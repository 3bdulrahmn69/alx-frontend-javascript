export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const newCar = new this.constructor();
    for (const key in this) {
      if (this.hasOwnProperty(key)) {
        newCar[key] = this[key];
      }
    }
    return newCar;
  }
}
