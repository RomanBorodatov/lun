const generateChunk = coordinates => {
  return {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: coordinates
        }
      }
    ]
  };
};

export const breakRouteInChunksWithAngle = route => {
  const chunks = [];

  for (let i = 0; i < route.length; i++) {
    const chunkCoords = [route[i]];
    if (i === route.length - 2) {
      chunkCoords.push(route[route.length - 1]);
      chunks.push(generateChunk(chunkCoords));
      break;
    }
    for (let n = i; n < route.length - 2; n++) {
      const firstAngle = turf.bearing(
        turf.point(route[n]),
        turf.point(route[n + 1])
      );
      const secondAngle = turf.bearing(
        turf.point(route[n + 1]),
        turf.point(route[n + 2])
      );

      const delta = ((secondAngle - firstAngle + 540) % 360) - 180;

      if (delta > -45 && delta < 45) {
        chunkCoords.push(route[n + 1]);
      } else {
        chunkCoords.push(route[n + 1]);
        i = n;
        break;
      }
    }
    chunks.push(generateChunk(chunkCoords));
  }
  console.log(chunks);
  return chunks;
};
