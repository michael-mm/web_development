// Constructors and Properties

class Car {
  // looks like a function
  constructor(id) {
    // we create properties with 'this' just like constructor func
    // this is only used within the class itself
    this.id = id;
  }
}

let car = new Car(123);
console.log( car.id );