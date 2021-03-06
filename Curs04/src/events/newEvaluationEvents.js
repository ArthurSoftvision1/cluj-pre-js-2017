const newEvaluationEvents = function () {

        const myObj = {}
    
    const goToTheEvaluationPage = function(event) {
        event.preventDefault();

        loadPage('evaluations') // load evaluation page

    }

    // get evaluationButton by his ID
    const evaluationButton = document.getElementById("evaluation-page")
      
    // add "click" event listener
    evaluationButton.addEventListener("click", goToTheEvaluationPage)
        
    // get button by his ID #submit-button
    const submitFormButton = document.getElementById("submit-button")

        // Create submitButton function
        const submitButton = function(event) {
            event.preventDefault();

            const getSelectorAll = document.querySelectorAll("select")
      
            getSelectorAll.forEach(function(el) {
                const nameSelector = el.name
                const valueSelector = el.value  

                myObj[nameSelector] = valueSelector

            })

            const getTextareaAll = document.querySelectorAll("textarea")

            getTextareaAll.forEach(function(el) {
                const nameTextarea = el.name
                const valueTextarea = el.value

                myObj[nameTextarea] = valueTextarea

            })

            const getInputAll = document.querySelectorAll("input")
            getInputAll.forEach(function(el) {
                const nameInput = el.name
                const valueInput = el.value

                if(el.type === 'text' || el.type === 'date') { // check the input type
                    myObj[nameInput] = valueInput
                } else if (el.type === 'radio' && el.checked) { // check input type and if the input is checked
                    myObj[nameInput] = valueInput
                }
            })
            console.log(myObj) // display the Object

            myObj.id = (myObj.candidate + myObj.date + (new Date()).getTime()).replace(/\s/g,'');

            if(localStorage.length === 0){ // check of localStorage is empty
                const storageArr = []
                storageArr.push(myObj)
                localStorage.setItem('storageKey', JSON.stringify(storageArr)) // transform Array in String
            } else {
                const getArrFromStorage = JSON.parse(localStorage.getItem('storageKey')) // transform a String in Array
                getArrFromStorage.push(myObj)
                localStorage.setItem('storageKey', JSON.stringify(getArrFromStorage)) // add getArrFromStorage to localStorage
            }

            loadPage('evaluations')
        }

        // addEventListener on submit
        submitFormButton.addEventListener("click", submitButton)


        
        

    
}