// Function Scope

// function startCar(carId) {
//   let message = 'Starting...'; 
//   // has function scope & as soon as the function finishes executing, message has no scope 
// }

// startCar(123);
// console.log(message); // ReferenceError 
// // message can't be referenced outside its scope

// Nested Function Scope

// function startCar(carId) {
//   let message = 'Starting...';
//   let startFn = function turnKey() {
//     console.log(message); // Starting...
//   };
//   startFn();
// }

// startCar(123);

function startCar(carId) {
  let message = 'Starting...';
  let startFn = function turnKey() {
// same variable name as its parent, but out of scope
    let message = 'Override'
  };
  startFn();
  console.log(message) // Starting...
}

startCar(123);