// Prototypes

// constructor function is simpler with just the car property

function Car(id) {
  this.carId = id;
}

// Car has a property called prototype we directly add our methods to

Car.prototype.start = function() {
  console.log('start: ' + this.carId);
};

// create as many car objects but there will only be 1 function
let car = new Car(123);
car.start(); // start: 123