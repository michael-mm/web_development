// Modifying DOM elements

let element = document.getElementById('first');
element.textContent = 'New content...';

element.classList.add('p2');
element.style.color = 'blue';

element.setAttribute('foo', 'fooValue');

console.log(element); // <p id="first" class="p1 p2" foo="fooValue" style="color: blue;">New content...</p>