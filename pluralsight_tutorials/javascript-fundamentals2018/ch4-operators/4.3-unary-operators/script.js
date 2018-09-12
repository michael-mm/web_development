// ++ increment depending on the context

// ++ before variable

let yearBefore = 1967;
console.log(++yearBefore); // 1967

// ++ after variable

let yearAfter = 1967;
console.log(yearAfter++); // 1967
console.log(yearAfter++); // 1968


// -- opposite of ++ increment



// + converts string to numeric type

let yearConv = '1967';
console.log(typeof (yearConv));
console.log(typeof (+yearConv));


// to convert but still negate  variable

let yearNegate = '1967';
console.log((-yearNegate)); // -1967
