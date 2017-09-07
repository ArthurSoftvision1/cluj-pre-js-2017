interviewApp.newEvaluationModule = {

    init() {
        const newPromise = new Promise(function (resolve, reject) {
            const xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        var newEvalObject;
                        try {
                            newEvalObject = JSON.parse(xhttp.responseText);
                        } catch (e) {
                            reject('Something went wrong')
                        }
                        resolve(newEvalObject);
                    } else {
                        reject('Status wrong')
                    }
                }
            }

            xhttp.open('GET', 'src/Data/xhrNew.json', true)
            xhttp.send()
        });
        newPromise.then((newObject) => {
            app.innerHTML = interviewApp.NewEvaluationPage(newObject);
            interviewApp.newEvaluationEvents(); // call newEvaluation events function
            interviewApp.commonEvents(); // call commonEvents function which will load the login page
        }).catch((error) => {
            alert(error);
        });

    }
}



