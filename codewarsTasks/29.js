class Cube {
  constructor(length) {
    this.length = length;
  }

  get volume() {
    return this.length ** 3;
  }

  set volume(newVolume) {
    this.length = Math.cbrt(newVolume);
  }

  get surfaceArea() {
    return 6 * this.length ** 2;
  }

  set surfaceArea(newSurfaceArea) {
    this.length = Math.sqrt(newSurfaceArea / 6);
  }
}