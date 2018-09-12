// Using logical operator && 

if (5 === 5 && 6 === 7) {
  console.log(true);
}
else {
  console.log(false); // false
}


if (5 === 5 && 7 === 7) {
  console.log(true); // true
}
else {
  console.log(false); 
}
// both expressions need to be true



// Using logical operator || 

if (5 === 5 || 6 === 7) {
  console.log(true); // true
}
else {
  console.log(false); 
}
// only one of the conditions need to be met for it to be true


if (5 === 3 || 6 === 7) {
  console.log(true);  
}
else {
  console.log(false); // false
}
// when both conditions are not met the result is false


// Using logical operator || in variables

// let userSettings = null;
// let defaultSettings = { name: 'Default'};

// console.log( userSettings || defaultSettings); // {name: "Default"}


// using || to display any of the values when conditions are met
let userSettings =  { name: 'Joe'};
let defaultSettings = { name: 'Default'};

console.log(userSettings || defaultSettings); // {name: "Joe"}


// Convert a value to boolean, then flip it using !

console.log(!true); // false

let car = null;
console.log(!car);
























