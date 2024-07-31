class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Method that returns a string
  toString() {
    return `[object ${this._code}]`;
  }
}

export default Airport;
