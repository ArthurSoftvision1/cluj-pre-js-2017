(function() {
	const INTERVAL = 1000;
  const clock = document.getElementById('clock');
	let tickerID = setInterval(function() {
  	let currentTime = new Date();
    (currentTime.getMinutes() < 10) ? 
    	(currentTime.getSeconds() < 10) ?
      	clock.innerText = currentTime.getHours() + ': 0' + currentTime.getMinutes() + ':0' + currentTime.getSeconds() :
        clock.innerText = currentTime.getHours() + ': 0' + currentTime.getMinutes() + ':' + currentTime.getSeconds() :
       (currentTime.getSeconds() < 10) ?
    		clock.innerText = currentTime.getHours() + ':' + currentTime.getMinutes() + ':0' + currentTime.getSeconds() : 
    		clock.innerText = currentTime.getHours() + ':' + currentTime.getMinutes() + ':' + currentTime.getSeconds() ;
  }, INTERVAL);
}())