export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Method that returns a number(explicit)
  valueOf() {
    return this._size;
  }

  // Method that returns a string(implicit)
  toString() {
    return this._location;
  }
}
