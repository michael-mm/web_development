// Using the let keyword

// if (5 === 5) {
//   let message = 'Equal'; 
// }
// console.log(message); // Error
// // message out of scope 

// Using the var  keyword

// if (5 === 5) {
//   var message = 'Equal'; 
// }
// console.log(message); // Equal
// no block scoping occurs when the var keyword is used


let message = 'Outside';
if (5 === 5) {
  // allows reuse of variable names within code blocks
  let message = 'Equal'; 
  console.log(message); // Equal
}
console.log(message); // Outside
