interviewApp.loginEvents = function () {

    // get the form by his ID
    const loginFormSection = document.getElementById("form-login")

    // submitLogin function
    const submitLogin = function (event) {
        event.preventDefault();

        // get username input value by his ID
        const usernameValue = document.getElementById("username-field").value

        // get password input value by his ID
        const passwordValue = document.getElementById("password-field").value

        // set alert message if the inputs not meet the conditions
        const displayAlert = function (message) {
            const verify = document.getElementById('alert') || false;
            if (!verify) {
                // create alert div where the message will be displayed
                const alertDiv = document.createElement('div');
                // call parameter function = message
                alertDiv.innerHTML = message;
                // set alertDiv ID
                alertDiv.id = "alert";
                loginFormSection.appendChild(alertDiv);
            }
        }

        var loginPagePromise = new Promise(function(resolve, reject) {
            const xhttpLoginPage = new XMLHttpRequest();
            xhttpLoginPage.onreadystatechange = function() {
                if (this.readyState === 4) {
                    if (this.status < 400) {
                        let loginObject
                        try {
                            loginObject = JSON.parse(xhttpLoginPage.responseText);
                        } catch (e) {
                            reject('Cannot access API')
                        }
                        resolve(loginObject);
                    } else {
                        reject('Cannot access API')
                    }
                }
            };
            xhttpLoginPage.open('GET', 'src/Data/xhrLogin.json', true)
            xhttpLoginPage.send()
    
        });

        loginPagePromise.then((loginObject) => {
                
                // check of username input and password input contain value 1
                if (usernameValue === loginObject.username && passwordValue === loginObject.password) {
                    // call goToEvaluationPage function which will render the page
                    interviewApp.evaluationsModule.init() // go to evaluations page
                    sessionStorage.setItem('LoggedIn', 'true')
                } else {
                    // if the condition is not met, drop this message
                    displayAlert("Something went wrong");
                }
        }).catch((error) => {
            displayAlert(error);
        })

    }
        // add "submit" event listener on login button
        loginFormSection.addEventListener("submit", submitLogin)


}
