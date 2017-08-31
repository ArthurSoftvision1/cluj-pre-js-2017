const evaluationEvents = function() {

    const goToTheNewEvaluationPage = function() {
        loadPage('new-evaluation') // show new-evaluation page
    }
   
    const newEvaluationButton = document.getElementById("new-evaluation-page") // get newEvaluationButton by his ID

    newEvaluationButton.addEventListener("click", goToTheNewEvaluationPage) // add click event listener on newEvaluationButton

    const addDetailsButtons = document.getElementsByClassName("add-button");

    Array.prototype.forEach.call(addDetailsButtons, bindEvent);

    function bindEvent(el) {
        el.addEventListener("click", goToTheNewEvaluationPage);
    }
}