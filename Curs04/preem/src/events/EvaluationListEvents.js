const EvaluationListEvents = function() {
    this.initEvents = function(build) {
        const button = document.getElementById('logout');
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            window.dataStorage.remove('userData');
            build();
        });
    }
}