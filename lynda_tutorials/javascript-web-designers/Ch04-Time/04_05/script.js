// Click on events on the nav bar to see how time was manipulated in the Now region
// Solution - Enhance the Event Calendar by displaying both the date and time

(function(){
'use strict';

document.addEventListener('DOMContentLoaded', function() {
		var currentTime = document.getElementById('current-time'),
				currentDate = document.getElementById('current-date');

		setInterval(function() {
			var d = new Date();

			var hours = d.getHours(),
					minutes = d.getMinutes(),
					month = formatMonth(d.getMonth()), // formats 0 - 11 to actual name month
					date = d.getDate(),
					ampm = 'AM';

			if (hours > 12) {
				hours -= 12;
				ampm = 'PM';
			} else if (hours === 0) {
				hours = 12;
			}
			
			if (minutes < 10) {
				minutes = '0' + minutes;
			}

			var sepClass = '';
			if (d.getSeconds() % 2 === 1) sepClass = 'trans';
			
			var sep = '<span class="' + sepClass + '">:</span>';
		
			currentTime.innerHTML = hours + sep + minutes + ' ' + ampm;
			currentDate.textContent = month + ' ' + date;
		}, 1000);

		function formatMonth(m) {
			m = parseInt(m, 10);

			if (m < 0) {
					m = 0;
			} else if (m > 11) {
				m = 11
			}

			/* var monthName;
			switch(m) {
				case 0:
						monthName = "January";
						break;
				case 1:
						monthName = "February";
						break;
				case 2:
						monthName = "March";
						break;
				case 3:
						monthName = "April";
						break;
				// and more...
			}
			*/

			var monthNames = [
				'January', 'February', 'March',
				'April', 'May', 'June',
				'July', 'August', 'September',
				'October', 'November', 'December'
			];
			return monthNames[m];
		}
			
});

})();