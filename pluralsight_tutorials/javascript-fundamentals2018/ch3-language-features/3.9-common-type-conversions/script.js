// Convert string to integer
console.log(Number.parseInt('55')); // 55

// Convert string to float
console.log(Number.parseFloat('55.99')); // 55.99

// letter character ignored when it comes after number
// it does not need to end as a number
console.log(Number.parseFloat('55.99ABC')); //55.99

// when letter charcter comes before number
console.log(Number.parseInt('ABC55.99')); // NaN