// // Use {} to destructure objects

// let car = { id: 5000, style: 'convertible' };

// let { id, style } = car;

// console.log(id, style); // 5000 convertible


// Defining object destructuring without assigning values leads to errors

// let car = { id: 5000, style: 'convertible' };

// let id, style;

// destructuring after declaration
// {id, style} = car;

// console.log(id, style); // Error


// To counter the above and avoid error use ()

let car = { id: 5000, style: 'convertible' };

let id, style ;
({id, style} = car);

console.log(id, style); // 5000 convertible