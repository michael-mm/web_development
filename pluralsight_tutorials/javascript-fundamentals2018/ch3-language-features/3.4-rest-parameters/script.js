
// function sendCars(...allCarIds) {
//   allCarIds.forEach( id => console.log(id))
// }

// sendCars(100, 200, 555); // 100  200  555



// function sendCars(day, ...allCarIds) {
//   allCarIds.forEach( id => console.log(id))
// }

// sendCars('Monday', 100, 200, 555); // 100  200  555
// Monday will not be displayed only the remaining (rest) value parameters will be displayed



function sendCars(...allCarIds) {
  allCarIds.forEach( id => console.log(id))
}

sendCars('Monday', 100, 200, 555); // Monday 100  200  555
// // Monday becomes part of the array when the parameter is left out 
// considered bug



// function sendCars(...carIds, day) {
//     carIds.forEach( id => console.log(id) );
//   }
  
//   sendCars('Monday', 1, 2, 3); // error

// The rest parameter MUST be the last parameter on the list, comman not permitted