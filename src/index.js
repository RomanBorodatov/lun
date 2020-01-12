import "./main.css";
import carImage from "./car.svg";
import { animateRouteChunk } from "./js/animateChunk";
import { breakRouteInChunksWithAngle } from "./js/breakRoute";

const origin = [30.4696164, 50.386801];
const treePoints = [
  [30.453013093566653, 50.38236903375892],
  [30.477433033299803, 50.379981404067905],
  [30.500041966855406, 50.389946840865264],
  [30.523445704883244, 50.41274632617777]
];

mapboxgl.accessToken =
  "pk.eyJ1Ijoicm9tYW5ib3JvZGF0b3YiLCJhIjoiY2sxa2w3N3Y1MDdvZjNibzNveXFidWpuaSJ9.h9858JVC3HbU02hxED68eg";
const map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/romanborodatov/ck5bi9lc90b0h1cr4zfljuqzo", // stylesheet location
  center: origin, // starting position [lng, lat]
  zoom: 9 // starting zoom
});

let route;
const carElement = document.createElement("img");
carElement.src = carImage;
carElement.classList.add("car");
document.querySelector("body").appendChild(carElement);
const carMarker = new mapboxgl.Marker(carElement).setLngLat(origin).addTo(map);
const treesConnectionLine = turf.lineString([...treePoints]);
const treesBoundingBox = turf.bbox(treesConnectionLine);

const showAllTrees = () => {
  document.querySelectorAll(".tree").forEach(element => {
    element.classList.remove("hide");
    element.classList.remove("selected");
  });
};

const drawRoute = route => {
  return new Promise(resolve => {
    let currentGeojson = {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: []
      }
    };

    const treesConnectionLine = turf.lineString([
      ...route.geometry.coordinates
    ]);
    const treesBoundingBox = turf.bbox(treesConnectionLine);

    map.fitBounds(treesBoundingBox, { padding: 100, maxZoom: 14 });

    // Reset route line if it exists, otherwise create one
    if (map.getSource("route")) {
      map.getSource("route").setData(currentGeojson);
    } else {
      map.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: currentGeojson
        },
        layout: {
          "line-join": "round",
          "line-cap": "round"
        },
        paint: {
          "line-color": "#3887be",
          "line-width": 5,
          "line-opacity": 0.5
        }
      });
    }

    // animation duration is duration value form Mapbox API converted to ms and speeded 20 times
    const animationDuration = route.duration;
    const distanceKm = route.distance / 1000;
    const distanceIncrement = (distanceKm / animationDuration) * 10;

    let passedDistance = 0;

    const lineRef = map.getSource("route");

    //Function gets new Point along the line, draws it and increases passedDistance
    const draw = () => {
      const newPosition = turf.along(route.geometry, passedDistance);
      currentGeojson.geometry.coordinates.push(
        newPosition.geometry.coordinates
      );
      lineRef.setData(currentGeojson);

      passedDistance = passedDistance + distanceIncrement;

      if (passedDistance < distanceKm) {
        requestAnimationFrame(draw);
      } else {
        resolve();
      }
    };

    requestAnimationFrame(draw);
  });
};

const animateCarAlongRoute = async route => {
  const chunks = breakRouteInChunksWithAngle(route.geometry.coordinates);

  for (let i = 0; i < chunks.length; i++) {
    await animateRouteChunk(chunks[i], carMarker);
  }
  map.fitBounds(treesBoundingBox, { padding: 100 });
  showAllTrees();
};

// Get route from Navigation API and draw it
const getRoute = destination => {
  const start = carMarker.getLngLat();
  const url =
    "https://api.mapbox.com/directions/v5/mapbox/driving/" +
    start.lng +
    "," +
    start.lat +
    ";" +
    destination[0] +
    "," +
    destination[1] +
    "?steps=true&geometries=geojson&access_token=" +
    mapboxgl.accessToken;

  fetch(url)
    .then(res => res.json())
    .then(async res => {
      console.log(res);
      route = res.routes[0];
      await drawRoute(route);
      animateCarAlongRoute(route);
    });
};

const hideInactiveTrees = activeId => {
  const allTrees = document.querySelectorAll(".tree");

  allTrees.forEach(treeElement => {
    if (treeElement.id === activeId) {
      treeElement.classList.add("selected");
    } else {
      treeElement.classList.add("hide");
    }
  });
};

// function to generate tree points on map with listener for click
const generateMarkers = () => {
  if (!map.isZooming()) {
    const office = document.createElement("div");
    office.className = "point";
    office.classList.add("office");
    office.addEventListener("click", e => {
      getRoute(origin);
    });
    new mapboxgl.Marker({ element: office, anchor: "left" })
      .setLngLat(origin)
      .addTo(map);

    treePoints.map((point, index) => {
      const element = document.createElement("div");
      element.className = "point";
      element.classList.add("tree");
      element.id = index;
      element.addEventListener("click", e => {
        hideInactiveTrees(e.target.id);
        getRoute(point);
      });
      new mapboxgl.Marker({ element: element, anchor: "top" })
        .setLngLat(point)
        .addTo(map);
    });
  } else {
    setTimeout(generateMarkers, 50);
  }
};

// Add origin point and zoom map to show all trees when map is ready
map.on("load", () => {
  // disable map rotation using right click + drag
  map.dragRotate.disable();

  // disable map rotation using touch rotation gesture
  map.touchZoomRotate.disableRotation();

  map.fitBounds(treesBoundingBox, { padding: 100 });
  generateMarkers();
});

// map.on("click", e => {
//   console.log(e.lngLat);
// });
