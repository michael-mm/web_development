// Using Arrow => 

// let getId = () => 123;
// console.log( getId() ); // 123


// no need to display () if argument is only one

// let getId = prefix => prefix + 123;
// console.log( getId('ID: ') ); // ID: 123


// parentheses needed if 2 or more parameters

// let getId = (prefix, suffix) => prefix + 123 + suffix;
// console.log( getId('ID: ', '!!!!!!') ); // ID: 123


// using {} and return within a function body 

let getId = (prefix, suffix) => {
  return prefix + 123 + suffix;
};

console.log( getId('ID: ', '!!!!!!') ); // ID: 123