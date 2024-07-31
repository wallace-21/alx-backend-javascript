import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    return new EVCar(this.brand, this.motor, this.color, this._range);
  }
}

export default EVCar;

