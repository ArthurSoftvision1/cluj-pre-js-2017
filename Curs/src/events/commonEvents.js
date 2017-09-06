interviewApp.commonEvents = function() {

    const goToTheLoginPage = function() {
        interviewApp.loginModule.init() // show loginPage
        sessionStorage.removeItem("LoggedIn") // remove the item from sessionStorage
    }

    const logoutButton = document.getElementById("logout-button") // get logoutButton by his ID

    logoutButton.addEventListener("click", goToTheLoginPage) // add click event listener on lgoutButton
}