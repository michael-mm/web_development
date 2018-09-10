// // let cannot be accessed before its called, var is undefined

// console.log(carId); // Error, carId is not defined
// let carId; // preferred behavior

// var carId = 42; 
// console.log(carId); ; // undefined


// // let has block scoping, var does not

if(true) {
  let foo = 9;
  console.log(foo) // 9
}
console.log(foo); // error

// if(true) {
//   var foo = 9;
// }
// console.log(foo); // 9