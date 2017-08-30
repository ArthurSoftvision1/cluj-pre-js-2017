const commonEvents = function() {

    const goToTheLoginPage = function() {
        loadPage('login') // show loginPage
        sessionStorage.removeItem("LoggedIn")
    }

    const logoutButton = document.getElementById("logout-button")

    // add click event listener on lgoutButton
    logoutButton.addEventListener("click", goToTheLoginPage)
}