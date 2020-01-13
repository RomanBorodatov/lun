export const drawRoute = (route, map) => {
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
