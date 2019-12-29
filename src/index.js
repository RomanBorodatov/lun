import { simulate } from "guidance-sim";
import "./main.css";

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
  style: "mapbox://styles/mapbox/navigation-guidance-day-v4", // stylesheet location
  center: origin, // starting position [lng, lat]
  zoom: 9 // starting zoom
});

let route;

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
    const distanceIncrement = (distanceKm / animationDuration) * 16;

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

// Get route from Navigation API and draw it
const getRoute = destination => {
  const url =
    "https://api.mapbox.com/directions/v5/mapbox/driving/" +
    origin[0] +
    "," +
    origin[1] +
    ";" +
    destination[0] +
    "," +
    destination[1] +
    "?steps=true&geometries=geojson&access_token=" +
    mapboxgl.accessToken;

  fetch(url)
    .then(res => res.json())
    .then(async res => {
      route = res.routes[0];
      await drawRoute(route);
      console.log("waited");
    });
};

// function to generate tree points on map with listener for click
const generateTrees = () => {
  if (!map.isZooming()) {
    treePoints.map((point, index) => {
      const element = document.createElement("div");
      element.className = "tree";
      element.addEventListener("click", () => {
        getRoute(point);
      });
      new mapboxgl.Marker(element).setLngLat(point).addTo(map);
    });
  } else {
    setTimeout(generateTrees, 50);
  }
};

// Add origin point and zoom map to show all trees when map is ready
map.on("load", () => {
  map.addLayer({
    id: "origin",
    type: "circle",
    source: {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: origin
            }
          }
        ]
      }
    },
    paint: {
      "circle-radius": 10,
      "circle-color": "#3887be"
    }
  });
  const treesConnectionLine = turf.lineString([...treePoints]);
  const treesBoundingBox = turf.bbox(treesConnectionLine);

  map.fitBounds(treesBoundingBox, { padding: 100 });
  generateTrees();
});

// map.on("click", e => {
//   console.log(e.lngLat);
// });
