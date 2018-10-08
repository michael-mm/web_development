// Creating a Module

// breakdown each class into its own file 
// each one of those files becomes a module 

let car = new Car(123);
console.log( car.id ); // Error as Car is not defined yet
// we need to import Car from created file to here
