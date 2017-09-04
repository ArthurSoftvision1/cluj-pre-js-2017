const loadPage = function(page, id = '') {
    const app = document.querySelector('#app')

        switch (page) {
            case "login":
            app.innerHTML = LoginPage(); // call LoginPage function
            loginEvents() // call LoginPage events function
                break;

            case "evaluations":
            app.innerHTML = EvaluationsPage();
            evaluationEvents() // call evaluation Page events function
            commonEvents() // call commonEvents function which will load the login page
                break;
                
            case "new-evaluation":
                const isIdSet = !!id;
                if(!isIdSet) {
            app.innerHTML = NewEvaluationPage()
                } else {
                app.innerHTML =  NewEvaluationPage()

                const getArrFromStorage = JSON.parse(localStorage.getItem('storageKey')) // transform a String in Array

                    let verifyEvaluation
                    getArrFromStorage.forEach(function(evaluation) {
                        if (evaluation.id === id) {
                            verifyEvaluation = evaluation
                        } 
                    });

                    document.querySelectorAll('input').forEach(function(input) {
                        if(input.type === 'text' || input.type === 'date') {
                            input.value = verifyEvaluation[input.name]
                        }

                        if(input.type === 'radio'){
                            if(input.value === verifyEvaluation[input.name]){
                                input.setAttribute('isChecked', true)
                            }
                        }
                    })

                    document.querySelectorAll('select').forEach(function(select) {
                        select.value = verifyEvaluation[select.name]
                        select.setAttribute('off', true)
                    })

                    document.querySelectorAll('textarea').forEach(function(textAr){
                        textAr.value = verifyEvaluation[textAr.name]
                        textAr.setAttribute('selected', true)
                    }) 

                    
                } 
                
        }

        app.innerHTML = NewEvaluationPage();
        newEvaluationEvents() // call newEvaluation events function
        commonEvents() // call commonEvents function which will load the login page
            
}
