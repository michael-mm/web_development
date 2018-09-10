// //  Assign a value within arrays to variables

// let carIds = [1, 2, 5];
// let [car1, car2, car3] = carIds;
// console.log(car1, car2, car3); // 1, 2, 5

// Using rest syntax to destructure and display remaining as array values

// let carIds = [1, 2, 5];
// let car1, remainingCars;
// [car1, ...remainingCars] = carIds;
// console.log(car1, remainingCars); // 1 [ 2, 5 ]

// To skip the first element when using rest

let carIds = [1, 2, 5];
let remainingCars;
[, ...remainingCars] = carIds;
console.log(remainingCars); // [2, 5]

