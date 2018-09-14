// call() - cannot pass arguments

// let obj = {
//   carId: 504,
//   getId: function() {
//     return this.carId;
//   }
// };

// let newCar = { carId: 456 };
// the context of the function is changed
// console.log( obj.getId.call(newCar) ); // 456


// apply() - accepts an array of arguments

let obj = {
  carId: 504,
  getId: function(prefix) {
    return prefix + this.carId;
  }
};

let newCar = { carId: 456 };
console.log( obj.getId.apply(newCar, ['ID: ']) ); // ID: 456