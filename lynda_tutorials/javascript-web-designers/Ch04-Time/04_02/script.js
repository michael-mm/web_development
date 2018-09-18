// Click on events on the nav bar to see how time was manipulated in the Now region

(function(){
  
'use strict';
  document.addEventListener('DOMContentLoaded', function() {
    var c = document.getElementById('current-time');

    var d = new Date();
// to reset to a 12 Hr clock
    var hours = d.getHours();
    if (hours > 12) {
      hours = hours - 12; // or hours -= 12
    }
    
    c.innerHTML = hours + ':' + d.getMinutes();
  });

})();