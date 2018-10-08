// Inheritance

class Vehicle {
  constructor() {
    this.type = 'car';
  }
  start() {
    return `Starting: ${this.type}`;
  }
}

// not instantiating Vehicle direcly
// have Car take all the functionality from Vehicle to extend its class
// use keyword extends

class Car extends Vehicle {
  // all the properties in Vehicle beome acessible
}

let car = new Car();
console.log(car.type); // car
// car is inheriting or extending from Vehicle