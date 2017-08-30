const LoginPage = function() {
    this.markup = `
        <div>
            <h1>Login Page</h1>
            <form id="loginForm">
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <input type="submit" value="Login" />
            </form>
        </div>
    `;
}