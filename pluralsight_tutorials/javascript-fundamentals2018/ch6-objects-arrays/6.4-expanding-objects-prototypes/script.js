// Expanding Objects using Prototypes

String.prototype.hello = function() {
  return this.toString() + ' Hello';
};

console.log('foo'.hello()) // foo Hello