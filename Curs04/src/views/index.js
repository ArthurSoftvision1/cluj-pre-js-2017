
window.onload = function(){
    const app = document.querySelector('#app');
    // call LoginPage function and display LoginPage using innerHTML method

    if (sessionStorage.getItem('LoggedIn')) {
        loadPage('evaluations') // show evaluations page if the user is logged
    } else {
        loadPage('login') // if is not logged go to login page
    } 
}

const loadPage = function(page) {
    
    switch (page) {
        case "login":
        app.innerHTML = LoginPage();
        loginEvents()
            break;
        case "evaluations":
        app.innerHTML = EvaluationsPage();
        evaluationEvents()
        commonEvents()
            break;
        case "new-evaluation":
        app.innerHTML = NewEvaluationPage();
        newEvaluationEvents()
        commonEvents()
            break;
    }
}

