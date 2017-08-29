const LoginPage = function() {
    return `
    ${LoginForm()},
    ${SubmitFeedbackSection()},
    ${SubmitFeedbackResults()},
    ${Footer()},
    `;
}

const LoginForm = function (options) {
    return `
    <form id="form-login" class="feedback-interview-section">
    <div class="header-form-section">
         <h1 class="interview-text-area">Interview Feedback</h1>
        <input id="username-field" class="username-area-input" type="text" name="lastname" placeholder="Username"/> <br>
        <input id="password-field" class="password-area-input" type="password" name="lastname" placeholder="Password"/> <br>
        <input class="login-button" type="submit" value="Login">
    </div>
</form>
    `;
};

const SubmitFeedbackSection = function (options) {
    return `
    <div>
    <div class="banner-picture">
        <a href="evaluation.html"><img src="img/feedback-banner.jpg"/> </a>
    </div>
    <div>
        <a href="evaluation.html"><img class="feedback-image" src="./img/new feedback.jpg"/> </a>
    </div>
    <!--Right text area-->
    <div class="right-text-description">
        <h3 class="right-title">Submit new feedback</h3>
        <p class="text-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra
            nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus,
            tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque
            nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in
            tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis
            sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit
            amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque
            arcu mauris, malesuada quis ornare accumsan, blandit sed diam.
        </p>
    </div>
</div>
    `;
};

const SubmitFeedbackResults = function (options) {
    return `
    <div class="text-description-2">
    <!--Left text area-->
    <div class="left-text-description">
        <h3>View feedback results</h3>
        <p class="text-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra
            nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus,
            tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque
            nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in
            tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis
            sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit
            amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque
            arcu mauris, malesuada quis ornare accumsan, blandit sed diam.
        </p>
    </div>
    <div>
        <a class="" href="evaluation.html"><img class="left-image right-image" src="img/results.jpg"/> </a>
    </div>
</div>  
    `;
};

const LoginHeader = function (options) {
    return `
    <header class="header-background-section">
    <div>

        <!--Feedback Interview Form Section-->
       <form class="feedback-interview-section">
           <div class="header-form-section">
                <h1 class="interview-text-area">Interview Feedback</h1>

               <input class="username-area-input" type="text" name="lastname" placeholder="Username"/> <br>
               <input class="password-area-input" type="password" name="lastname" placeholder="Password"/> <br>
               <input class="login-button" type="submit" value="Login">
           </div>
       </form>

    </div>
</header>
    `;
}

