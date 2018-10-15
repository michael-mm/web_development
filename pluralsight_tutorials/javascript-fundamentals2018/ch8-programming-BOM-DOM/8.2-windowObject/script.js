// Window Object
// window references the global object

year = 1956;
console.log(window.year); // 1956


// working with modules

// import { Car } from './models/car';
// year = 1956;
// console.log(window.year); // ReferenceError: year is not defined

// // we need to declare our variables when working with modules as they will not be placed on the global window object
// // use let keyword to declare year at the module level