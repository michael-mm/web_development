// Get elements out of array, use them as parameter in function

// function startCars(car1, car2, car3) {
//   console.log(car1, car2, car3);
// }

// let carIds = [100, 200, 500];
// startCars(...carIds); // 100  200  500


// Using spread syntax on other iterables

function startCars(car1, car2, car3) {
  console.log(car1, car2, car3);
}

let carCodes = 'abc';
startCars(...carCodes); // a  b  c