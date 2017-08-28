
window.onload = function(){
    const result = [];
    result.push(LoginPage({}))
    const app = document.querySelector('#app');
    app.innerHTML = LoginPage();
}

