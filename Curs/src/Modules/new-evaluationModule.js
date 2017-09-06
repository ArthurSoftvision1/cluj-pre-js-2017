interviewApp.newEvaluationModule = {

    init() {

        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'src/Data/xhrNew.json', true)
        xhttp.send()

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
            
                const newObject = JSON.parse(xhttp.responseText);
                app.innerHTML = interviewApp.NewEvaluationPage(newObject);
                interviewApp.newEvaluationEvents(); // call newEvaluation events function
                interviewApp.commonEvents(); // call commonEvents function which will load the login page
            }
        };      
    }
}