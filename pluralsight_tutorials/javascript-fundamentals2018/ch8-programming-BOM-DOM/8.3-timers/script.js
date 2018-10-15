// // Timers

// // setTimeout - to fire a function only once

// let timeoutId = setTimeout(function() {
//   console.log('1 second passed');
// }, 1000) 

// // if need to cancel ...
// clearTimeout(timeoutId);



// setInterval() - to execute a function repeatedly

let intervalId = setInterval(function() {
  console.log('1 second passed');
}, 1000) 

// if need to cancel ...
clearInterval(intervalId);