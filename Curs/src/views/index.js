
interviewApp = {}

window.onload = function () {
    const app = document.querySelector('#app');

    if (sessionStorage.getItem('LoggedIn')) {
        interviewApp.evaluationsModule.init(); // show evaluations page if the user is logged
    } else {
        interviewApp.loginModule.init(); // if is not logged go to login page
    }
};







