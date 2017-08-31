const evaluationEvents = function() {

    const goToTheNewEvaluationPage = function() {
        loadPage('new-evaluation') // show new-evaluation page
    }
   
    const newEvaluationButton = document.getElementById("new-evaluation-page") // get newEvaluationButton by his ID

    newEvaluationButton.addEventListener("click", goToTheNewEvaluationPage) // add click event listener on newEvaluationButton

    const addDetailsButton = document.getElementById("add-button")

    addDetailsButton.addEventListener("click", goToTheNewEvaluationPage)

    
    
}