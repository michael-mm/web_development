// Commonly used operators += , -= , *= , %= , /=

var numOne = 1;

console.log(numOne); // 1
console.log(numOne +=1); // 2

// numOne is altered & reaasigned 
console.log(numOne); // 2


// Less Commonly used advanced operators

// Shift Left
var numShiftLeft = 3;

console.log(numShiftLeft); // 3

// numShiftLeft is altered & reaasigned 
console.log(numShiftLeft <<= 1); // 6
console.log(numShiftLeft); // 6


// Shift Right
var numShiftRight = 20;

console.log(numShiftRight); // 20

// numShiftRight is altered & reaasigned 
console.log(numShiftRight >>= 1); // 10
console.log(numShiftRight); // 10