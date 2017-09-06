interviewApp.newEvaluationModule = {
    init() {
        app.innerHTML = interviewApp.NewEvaluationPage();
        interviewApp.newEvaluationEvents(); // call newEvaluation events function
        interviewApp.commonEvents(); // call commonEvents function which will load the login page
    }
}