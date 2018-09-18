let app = (function() {
  let carId = 123;
  let getId = function() {
    return carId;
  };

  //closure
  return {
    getId: getId
  };
  
})();

console.log( app.getId() ); // 123