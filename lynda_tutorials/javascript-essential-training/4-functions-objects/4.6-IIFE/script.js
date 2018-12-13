var theBiggest = (function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;
}(7/9,13/25));

console.log(theBiggest); // ["a", 0.7777777777777778]

// // if we have to use external variables those variables have to be declared before the function
//
// var theBiggest = (function(a,b) {
//     var result;
//     a>b ? result = ["a", a] : result = ["b", b];
//     return result;
// }(firstFrac, secondFrac));
//
// var firstFrac = 7/9;
// var secondFrac = 13/25;
//
// console.log(theBiggest); // ["b", undefined]
//
// // external variables declared before a IIFE
//
// var firstFrac = 7/9;
// var secondFrac = 13/25;
//
// var theBiggest = (function(a,b) {
//     var result;
//     a>b ? result = ["a", a] : result = ["b", b];
//     return result;
// }(firstFrac, secondFrac));
//
// console.log(theBiggest); // ["a", 0.7777777777777778]
