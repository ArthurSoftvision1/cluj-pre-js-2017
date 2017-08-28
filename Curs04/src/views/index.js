
window.onload = function(){
    const app = document.querySelector('#app');
    app.innerHTML = LoginPage();

   const loginFormSection = document.getElementById("form-login")


   const goToNewEvaluationPage = function(event) {
        event.preventDefault();
        app.innerHTML = NewEvaluationPage()

        const evaluationButton = document.getElementById("evaluation-page")
        evaluationButton.addEventListener("click", goToEvaluationsPage)
    }

    const goToEvaluationsPage = function() {
        app.innerHTML = EvaluationsPage();
        const newEvaluationButton = document.getElementById("new-evaluation-page")

        newEvaluationButton.addEventListener("click", goToNewEvaluationPage)
    }

    const submitLogin = function(event) {
        event.preventDefault();

        const usernameValue = document.getElementById("username-field").value
        const passwordValue = document.getElementById("password-field").value

        const displayAlert = function(message){
            const verify = document.getElementById('alert') || false;
            if(!verify){
                const alertDiv = document.createElement('div'); // create alert div
                alertDiv.innerHTML = message;
                alertDiv.id = "alert";
                loginFormSection.appendChild(alertDiv);
            }
        }

        if (usernameValue === "1" && passwordValue === "1") {
            goToEvaluationsPage()
        } else {
            displayAlert("Something went wrong");
        }

    }

   loginFormSection.addEventListener("submit", submitLogin)


}

