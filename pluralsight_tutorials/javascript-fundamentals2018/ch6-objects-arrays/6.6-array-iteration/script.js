// Array Iteration

let carIds = [
  { carId: 123, style: 'sedan' },
  { carId: 456, style: 'convertible' },
  { carId: 789, style: 'sedan' }
];

carIds.forEach( car => console.log( car )); 
// { carId: 123, style: 'sedan' }
// { carId: 456, style: 'convertible' }
// { carId: 789, style: 'sedan' }


carIds.forEach((car,index) => console.log( car, index ));

// { carId: 123, style: 'sedan' } 0
// { carId: 456, style: 'convertible' } 1
// { carId: 789, style: 'sedan' } 2


Array Filtering

let carIds = [
  { carId: 123, style: 'sedan' },
  { carId: 456, style: 'convertible' },
  { carId: 789, style: 'sedan' }
];
let convertibles = carIds.filter(
   car => car.style === 'convertible'
);
console.log(convertibles); // [ { carId: 456, style: 'convertible' } ]


Array Testing

let carIds = [
  { carId: 123, style: 'sedan' },
  { carId: 456, style: 'convertible' },
  { carId: 789, style: 'sedan' }
];

let result = carIds.every(
   car => car.carId > 0
);

console.log(result); // true
// // applies to the entire array NOT just for each element of the array


// Locate the First Match

let carIds = [
  { carId: 123, style: 'sedan' },
  { carId: 456, style: 'convertible' },
  { carId: 789, style: 'sedan' }
];

let car = carIds.find(
   car => car.carId > 500
);

console.log(car); // { carId: 789, style: 'sedan' }
// finds only the first element that matches than stops execution
