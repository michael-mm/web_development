// No IIFE

// function() {
//   console.log('in function'); // Error
// }
// function won't execute 
// we are not doing anything to call it


// IIFE

// (function() {
//   console.log('in function'); // in function
// })();

// function executes


// Function Expression by asigning it to a variable

let app = (function() {
  let carId = 123;
  console.log('in function'); // in function
  return {}; 
})();

console.log(app); // {}
