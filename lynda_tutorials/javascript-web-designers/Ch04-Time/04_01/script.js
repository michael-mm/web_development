// Click on events on the nav bar to see how time was manipulated in the Now region

(function(){
'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    var c = document.getElementById('current-time');

    var d = new Date();

    c.innerHTML = d.toTimeString();
  });


})();