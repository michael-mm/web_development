// 6. Functions

// 6.2 Function Basics

// defines a function NOT executed yet
function displayMessage() {
  console.log('in a function'); 
}

// showMessage(); // executes a function by calling it
//showMessage();


// 6.3 Passing Information to Functions

// // Information is passed in as a parameter that will be used as a local variable within the function
function showMessage(message, favoriteNumber) { 
  message = message + ' World!'
  console.log(message, favoriteNumber); // Hello World! 42
}

// a value is passed in as an argument to the function that will be used as a variable within the function 

showMessage('Hello', '42'); 


// 6.4 Function Return Values

function myFunction(favoriteNum){
  let newNum = favoriteNum;
  return newNum + 100;
}

let result = myFunction(42)
console.log(result); // 142


// 6.5 Function Scope

function triplePlus(value) {
  let newValue = value + value + value;
  return newValue; 
}
triplePlus(3);
// console.log(newValue); // Error: newValue is not defined
// newValue // only exist within the function NOT outside