function cutCube(volume, n) {
  const largeCubeLength = Math.round(Math.cbrt(volume));
  if (largeCubeLength * largeCubeLength * largeCubeLength !== volume) {
    return false;
  }
  const smallCubeLength = Math.round(Math.cbrt(n));
  if (smallCubeLength * smallCubeLength * smallCubeLength !== n) {
    return false;
  }
  if (largeCubeLength % smallCubeLength === 0) {
    return true;
  } else {
    return false;
  }
}
