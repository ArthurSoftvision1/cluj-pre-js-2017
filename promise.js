(function() {
	let retrieve = document.getElementById('retrieve');
    
    const getResult = function() {
      if (xhr.readyState === 4) {
            let result = document.getElementById('result');
            result.value = xhr.responseText;
          }
    }
  
  retrieve.addEventListener('click', () => {
  	let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr.send();
    xhr.onreadystatechange = (event) => {
    	getResult();
    };
  });
}());