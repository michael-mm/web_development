
// Importing a Module

// use webpack for functionality

// breakdown each class into its 
// own file and each one of those files becomes a module 

// define the module by using the keyword import

import { Car } from './models/car.js';

let car = new Car(123);
console.log( car.id ); // 123