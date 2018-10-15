// Selecting DOM Elements

let el = document.getElementById('first');
console.log(el); // <p id="first" class="p1">First Paragraph</p>

let els = document.getElementsByClassName('p1');
console.log(els); // [p#first.p1, p.p1, first: p#first.p1, name1: p.p1]

let elsTag = document.getElementsByTagName('p');
console.log(elsTag); // [p#first.p1, p.p1, p.p3, first: p#first.p1, name1: p.p1]