// Click on events on the nav bar to see how time was manipulated in the Now region

(function(){
'use strict';

document.addEventListener('DOMContentLoaded', function(){
	var c = document.getElementById('current-time');
// function calls at an interval of every 1 second
	setInterval(updateTime, 1000);

	function updateTime() {
		
		var d = new Date(); // everytime we pass through this we get a new time & update it
		var hours = d.getHours();
		if (hours > 12) {
			hours -= 12;
		}
		
		var sep = ':';
		if (d.getSeconds() % 2 === 1) sep = ' ';

		c.innerHTML = hours + sep + d.getMinutes();	
	}
	
});


})();