const evaluationEvents = function() {

    const goToTheNewEvaluationPage = function() {
        loadPage('new-evaluation') // show loginPage
    }
   
    const newEvaluationButton = document.getElementById("new-evaluation-page")

    // add click event listener on newEvaluationButton
    newEvaluationButton.addEventListener("click", goToTheNewEvaluationPage)
    
}