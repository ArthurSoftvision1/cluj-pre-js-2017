(function() {

	const intervalTime = 1000; // set the time interval at 1 second

	const clock = document.getElementById('clock'); // get the element by his ID #clock
	
	let tickerID = setInterval(function() { // setInterval function

  	let currentTime = new Date(); // create the currentTime object
    (currentTime.getMinutes() < 10) ? // check if the minutes are under 10
    	(currentTime.getSeconds() < 10) ? // check of the seconds are under 10
      	clock.innerText = currentTime.getHours() + ': 0' + currentTime.getMinutes() + ':0' + currentTime.getSeconds() :
				clock.innerText = currentTime.getHours() + ': 0' + currentTime.getMinutes() + ':' + currentTime.getSeconds() :
				
       (currentTime.getSeconds() < 10) ? // check of the seconds are under 10
    		clock.innerText = currentTime.getHours() + ':' + currentTime.getMinutes() + ':0' + currentTime.getSeconds() : 
				clock.innerText = currentTime.getHours() + ':' + currentTime.getMinutes() + ':' + currentTime.getSeconds() ;
				
  }, intervalTime); // call the interval time
}())
