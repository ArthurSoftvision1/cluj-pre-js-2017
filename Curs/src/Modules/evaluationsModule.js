interviewApp.evaluationsModule = {
    init() {
        app.innerHTML = interviewApp.EvaluationsPage();
        interviewApp.evaluationEvents(); // call evaluation Page events function
        interviewApp.commonEvents(); // call commonEvents function which will load the login page
    }
}