
window.onload = function(){
    const app = document.querySelector('#app');

    if (sessionStorage.getItem('LoggedIn')) {
        loadPage('evaluations') // show evaluations page if the user is logged
    } else {
        loadPage('login') // if is not logged go to login page
    } 
}

// const loadPage = function(page) {
    
//     switch (page) {
//         case "login":
//         app.innerHTML = LoginPage(); // call LoginPage function
//         loginEvents() // call LoginPage events function
//             break;
//         case "evaluations":
//         app.innerHTML = EvaluationsPage();
//         evaluationEvents() // call evaluation Page events function
//         commonEvents() // call commonEvents function which will load the login page
//             break;
//         case "new-evaluation":
//         app.innerHTML = NewEvaluationPage();
//         newEvaluationEvents() // call newEvaluation events function
//         commonEvents() // call commonEvents function which will load the login page
//             break;
//     }
// }

