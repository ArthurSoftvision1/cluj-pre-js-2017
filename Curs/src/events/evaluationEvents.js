interviewApp.evaluationEvents = function() {

    const goToTheNewEvaluationPage = function(event) {
        event.preventDefault();
        interviewApp.newEvaluationModule.init() // show new-evaluation page
    }
   
    const newEvaluationButton = document.getElementById("new-evaluation-page") // get newEvaluationButton by his ID

    newEvaluationButton.addEventListener("click", goToTheNewEvaluationPage) // add click event listener on newEvaluationButton

    const addDetailsButtons = document.getElementsByClassName("add-button");
    function bindEvent(el) {
        el.addEventListener("click", goToTheNewEvaluationPage);
    }
    Array.prototype.forEach.call(addDetailsButtons, bindEvent);
}