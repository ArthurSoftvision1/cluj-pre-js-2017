
interviewApp = {}; // interviewApp object

window.onload = function () {
    const app = document.querySelector('#app');

    if (sessionStorage.getItem('LoggedIn')) {
        interviewApp.evaluationsModule.init(); // initialize the evaluationsModule
    } else {
        interviewApp.loginModule.init(); // initialize the loginModule
    }
};