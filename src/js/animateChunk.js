const ease = ({ distance, durationMs, onStep, resolve }) => {
  const stepCount = durationMs / 16 > 80 ? durationMs / 16 : 80;
  const valueIncrement = distance / stepCount;
  const sinValueIncrement = Math.PI / stepCount;

  let currentValue = 0;
  let currentSinValue = 0;

  const step = () => {
    currentSinValue += sinValueIncrement;
    currentValue += valueIncrement * Math.sin(currentSinValue) ** 2 * 2;

    if (currentSinValue < Math.PI && currentValue < distance) {
      onStep(currentValue);
      requestAnimationFrame(step);
    } else {
      resolve();
    }
  };

  requestAnimationFrame(step);
};

export const animateRouteChunk = (chunk, carMarker) => {
  console.log(chunk);
  return new Promise(resolve => {
    const distanceKm = turf.length(chunk.features[0].geometry, {
      units: "kilometers"
    });
    const animationDuration = Math.round((distanceKm * 1000) / 0.0139 / 18);

    const currentMarkerPosition = carMarker.getLngLat();
    let initialyRotated = 0;
    const targetAngle = turf.bearing(
      turf.point([currentMarkerPosition.lng, currentMarkerPosition.lat]),
      turf.point(chunk.features[0].geometry.coordinates[1])
    );
    const currentAngle = carMarker.getRotation();
    const delta = ((targetAngle - currentAngle + 540) % 360) - 180;

    const moveMarker = distance => {
      const oldPosition = carMarker.getLngLat();
      const newPosition = turf.along(chunk.features[0].geometry, distance);
      const angleToRotate = turf.bearing(
        turf.point([oldPosition.lng, oldPosition.lat]),
        turf.point(newPosition.geometry.coordinates)
      );

      carMarker.setLngLat(newPosition.geometry.coordinates);

      if (initialyRotated <= 20) {
        carMarker.setRotation(currentAngle + delta * 0.05 * initialyRotated);
        initialyRotated += 1;
      } else if (angleToRotate !== 0) {
        carMarker.setRotation(angleToRotate);
      }
    };

    ease({
      distance: distanceKm,
      durationMs: animationDuration,
      onStep: moveMarker,
      resolve
    });
  });
};
