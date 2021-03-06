// Footer component
const Footer = function () {
    return `
        <!--Footer section-->
        <footer class="container-fluid footer-section">
            <div class="col-md-4">

            </div>
            <div class="col-md-4">

            </div>
            <div class="col-md-4">
                <p class="footer-description">Copyright@Softvision 2017</p>
            </div>
        </footer>
    `;
}

// Navigation bar component
const NAV = function (options={}) {
    return  `
        <div class="row">
            <!--Navigation bar section-->
            <nav class="col-md-12 navigation-bar">
                <div class="col-md-4">
                    <!--Softvision logo-->
                    <a href="new-evaluation.html"><img class="logo-image" src="img/logo-v2.png"/> </a>
                </div>
                <div class="col-md-4">
                    <!--Evaluation navbar button-->
                    <a id="evaluation-page" class="border-bottom" href="#">Evaluations</a>

                    <!--New Evaluation button-->
                    <a id="new-evaluation-page" class="new-evaluation border-bottom" href="#" style="margin-left: 100px;">New Evaluation</a>

                    <!--Logout button-->
                    <a id="logout-button" class="logout-button border-bottom" href="#">Logout</a>
                </div>
            </nav>
        </div>
    `;
}