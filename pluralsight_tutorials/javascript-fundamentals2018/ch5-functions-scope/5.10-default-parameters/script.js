// Using default parameters

let trackCar = function(carId, city='NY') {
  console.log(`Tracking ${carId} in ${city}`);
}

trackCar(123); // Tracking 123 in NY

trackCar(123, 'Chicago'); // Tracking 123 in Chicago