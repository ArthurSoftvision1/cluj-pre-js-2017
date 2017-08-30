
window.onload = function(){
    const app = document.querySelector('#app');
    // call LoginPage function and display LoginPage using innerHTML method
    app.innerHTML = LoginPage();

    // get the form by his ID
   const loginFormSection = document.getElementById("form-login")

    const myObj = {}

   const goToNewEvaluationPage = function(event) {
        event.preventDefault();
        // call NewEvaluationPage() which will render the New-evaluation page
        app.innerHTML = NewEvaluationPage()

         
    // get button by his ID #submit-button
    const submitFormButton = document.getElementById("submit-button")
    
        // Create submitButton function
        const submitButton = function(event) {
            event.preventDefault();
    
            const getSelectorAll = document.querySelectorAll("select")
            // console.log(getSelectorAll)
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

                if(el.type === 'text' || el.type === 'date') {
                    myObj[nameInput] = valueInput
                } else if (el.type === 'radio' && el.checked) {
                    myObj[nameInput] = valueInput
                }
            })
            console.log(myObj)

            if(localStorage.length === 0){ // check of localStorage is empty
                const storageArr = []
                storageArr.push(myObj)
                localStorage.setItem('storageKey', JSON.stringify(storageArr)) // transform Array in String
            } else {
                const getArrFromStorage = JSON.parse(localStorage.getItem('storageKey')) // transform a String in Array
                getArrFromStorage.push(myObj)
                localStorage.setItem('storageKey', JSON.stringify(getArrFromStorage)) // add getArrFromStorage to localStorage
            }
        }
    
        // addEventListener on submit
        submitFormButton.addEventListener("click", submitButton)

        // get evaluationButton by his ID
        const evaluationButton = document.getElementById("evaluation-page")

        // add "click" event listener
        evaluationButton.addEventListener("click", goToEvaluationsPage)
    }

    // go to evaluation page function
    const goToEvaluationsPage = function() {
        // call EvaluationPage function and display EvaluationPage using innerHTML method
        app.innerHTML = EvaluationsPage();
        const newEvaluationButton = document.getElementById("new-evaluation-page")

        // add click event listener on newEvaluationButton
        newEvaluationButton.addEventListener("click", goToNewEvaluationPage)
    }

   
    // submitLogin function
    const submitLogin = function(event) {
        event.preventDefault();

        // get username input value by his ID
        const usernameValue = document.getElementById("username-field").value

        // get password input value by his ID
        const passwordValue = document.getElementById("password-field").value

        // set alert message if the inputs not meet the conditions
        const displayAlert = function(message){
            const verify = document.getElementById('alert') || false;
            if(!verify){
                // create alert div where the message will be displayed
                const alertDiv = document.createElement('div'); 
                // call parameter function = message
                alertDiv.innerHTML = message;
                // set alertDiv ID
                alertDiv.id = "alert";
                loginFormSection.appendChild(alertDiv);
            }
        }

        // check of username input and password input contain value 1
        if (usernameValue === "1" && passwordValue === "1") {
            // call goToEvaluationPage function which will render the page
            goToEvaluationsPage()
        } else {
            // if the condition is not met, drop this message
            displayAlert("Something went wrong");
        }

    }

    // add "submit" event listener on login button
   loginFormSection.addEventListener("submit", submitLogin)


}

