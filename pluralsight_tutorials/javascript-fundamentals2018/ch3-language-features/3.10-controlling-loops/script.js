// for loop

// using break
let i = 0;
for(; i < 12; i++) {
  if (i === 8) {
    break; // break a loop & finish it off
  }
}

console.log(i); // 8

// using continue

let int = 0;

for(; int < 4; int++) {
  if (int === 2) {
    continue;
  }
  console.log(int); // 0  1  3
}

