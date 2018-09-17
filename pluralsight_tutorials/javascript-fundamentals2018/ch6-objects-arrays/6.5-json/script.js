// Converting to JSON

// with no conversion
let car = {
  id: 123,
  style: 'convertible'
};

console.log((car)); // { id: 123, style: 'convertible' }


// with JSON conversion
let car = {
  id: 123,
  style: 'convertible'
};

console.log(JSON.stringify(car)); // {"id":123,"style":"convertible"}


// convert Array to JSON
let carIds = [ 
  { carId: 123 },
  { carId: 456 },
  { carId: 789 }
];

console.log( JSON.stringify(carIds) ); // [{"carId":123},{"carId":456},{"carId":789}]

// parsing JSON
let jsonIn = 
`
  [
    { "carId": 123 },
    { "carId": 456 },
    { "carId": 789 }
  
  ] 
`
;

console.log( JSON.parse(jsonIn) ); // [ { carId: 123 }, { carId: 456 }, { carId: 789 } ]