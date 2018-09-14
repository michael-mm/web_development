// Using bind

let obj = {
  carId: 504,
  getId: function() {
    return this.carId;
  }
};

let newCar = { carId: 456 };

// make a copy of getIf
let newFn = obj.getId.bind(newCar);

console.log( newFn() ); // 456