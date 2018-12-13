// constant

const MYCONSTANT = 5;
console.log(MYCONSTANT);

// let

function logScope() {
  let localVar = 2; // scope is within function itself

  if(localVar) {
    let localVar = "I'm different!";
    console.log("nested localVar: ", localVar);
  }
  console.log("logScope localVar: ", localVar);
}

logScope();
