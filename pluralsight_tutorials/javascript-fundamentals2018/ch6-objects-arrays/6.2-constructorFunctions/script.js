// Constructor Functions

// capitalize first letter name of the function declaration

function Car () {
  // code goes here
}
// object using the new keyword created before the function call
let car = new Car();


// using this keyword

function Car() {
  console.log(this);  // {} empty object
}

new Car;


// this keyword and properties

function Car(id) {
  this.carId = id;;
}

let car = new Car(123);
console.log(car.carId); // 123


// methods

function Car(id) {
  this.carId = id;;
  this.start = function() {
    console.log('start: ' + this.carId)
  }
}

let car = new Car(123);
car.start(); // start: 123