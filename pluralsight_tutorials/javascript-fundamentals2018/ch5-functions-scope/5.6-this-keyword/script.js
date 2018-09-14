// this keyword

// let fn = function() {
//   console.log(this === window);
// };

// fn(); // true



let obj = {
  carId: 504,
  getId: function() {
    // console.log(this); // { carId: 504, getId: [Function: getId] }
    return this.carId;
  }
};

console.log( obj.getId() ) // 504