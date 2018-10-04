// 5. Program Flow

// 5.2 Conditionals Using if()

let state = 'FL';
let taxPercent = 7;

if(state !== 'FL') {
  taxPercent = 0;
}

console.log(taxPercent); // 7

let score = 1000;

if(score >= 1000) {
  score = score + 100;
}

console.log("Score is: ", score); // 1100 


// 5.3 if ... else

let state = 'FL';
let taxPercent;

if (state === 'FL') {
  taxPercent = 7 ;
}
else if(state === 'NY'){
  taxPercent = 8.875;
}
else {
  taxPercent = 0;
}

console.log(taxPercent); // 7

let score = 100;

if(score > 1000) {
  score = score + 100;
}
else if(score === 1000){
  console.log("Almost")
}
else {
  console.log("Nice try!") // Nice try!
}

console.log("Score is: ", score); // Score is:  100


// // 5.4 switch and case

let state = 'TX';

switch(state) {
  case 'NY':
    console.log('New York');
    break;
  case 'TX':
    console.log('Texas'); // Texas
    break;
  default:
    console.log('Unknown')
} 


// 5.5 Looping with for()

for (let i = 0; i < 3; i++){
  console.log(i); // 0 1 2
}


// 5.6 Looping with while()

let count = 1;

while(count < 5) {
  console.log(count); // 1 2 3 4
  count++;
}