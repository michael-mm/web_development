// Methods

class Car {
  constructor(id) {
    this.id = id;
  }
  // no need for function keyword
  identify(suffix) {
    return `Car Id: ${this.id} ${suffix}`;
  }
}

let car = new Car(123);
console.log( car.identify('!!') ); // Car Id: 123
