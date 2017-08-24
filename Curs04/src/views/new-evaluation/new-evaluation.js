const NewEvaluationPage = function() {
     
    return `
        ${NAV()},
        ${CandidateDetailsForm()},
        ${TechnicalLevelPicker()},
        ${Textarea()},
        ${Footer()},
        `;
}

const NAV = function (options) {

    return `
    <nav class="row">
        <div class="col-md-12 logo_section">
            <div class="col-md-4 text_alignment">
                <a href="evaluation.html"><img class="logo_image" src="img/logo-v2.png"/> </a>
            </div>
            <div class="col-md-4" style="padding-top: 8px;">
                <a class="evaluation_button border_bottom" href="#">Evaluations</a>
                <a class="border_bottom" href="#" style="margin-left: 100px;">New Evaluation</a>
                <a class="border_bottom" href="#" style="float:right;">Logout</a>
            </div>
        </div>
    </nav>
    `;
}

const CandidateDetailsForm = function (options) {

    return `
    <div class="row">
        <div class="container top_page_inputs">
            <div class="col-md-3"><input class="candidate_input" type="text" name="lastname" placeholder="Candidate"/></div>
            <div class="col-md-3"> <input class="interviewer_input" type="text" name="lastname" placeholder="Interviewer"/></div>
            <div class="col-md-3"> <input class="calendar_input" type="password" name="lastname" placeholder="4/22/2012"/> </div>
            <div class="col-md-3"><a href="evaluation.html"> <img style="width: 35px; margin-top: 18px;" src="img/2019-200.png"/> </a></div>
        </div>
    </div>
    `;
}

const TechnicalLevelPicker = function (options) {
    
    return `
        <div class="row">
        <h2 class="description_section">Technical level</h2>
    </div>

    <div class="row level_evaluation">
            <div class="col-md-3 bullets_menu">
                <h3>Trainee</h3>
            </div>

            <div class="col-md-3 bullets_menu">
                <h3>Junior</h3>
            </div>
            <div class="col-md-3 bullets_menu">
                <h3>Middle</h3>
            </div>
            <div class="col-md-3 bullets_menu">
                <h3>Senior</h3>
            </div>
    </div>

    <div class="row_section">
        <div class="col-md-3 bullets_menu">
            <form action="">
                <input class="input-circle" type="radio" name="circle" value="circles">
            </form>
        </div>
        <div class="col-md-3 bullets_menu">

            <form action="">
                <input class="input-circle" type="radio" name="circle" value="circles">
                <input class="input-circle" type="radio" name="circle" value="circles">
                <input class="input-circle" type="radio" name="circle" value="circles">
            </form>
        </div>
        <div class="col-md-3 bullets_menu">
            <form action="">
                <input class="input-circle" type="radio" name="circle" value="circles">
                <input class="input-circle" type="radio" name="circle" value="circles">
                <input class="input-circle" type="radio" name="circle" value="circles">
            </form>
        </div>
        <div class="col-md-3 bullets_menu">
            <form action="">
                <input class="input-circle" type="radio" name="circle" value="circles">
                <input class="input-circle" type="radio" name="circle" value="circles">
                <input class="input-circle" type="radio" name="circle" value="circles">
            </form>
        </div>
    </div>
    `;
}

const Textarea = function (options) {
    return 
    `
        <div class="row_first">
        <h2 class="description-section">Should the candidate be hired?</h2>
        <textarea cols="164" placeholder="The type of project that is suitable for the candidate
    Is guidance required for the candidate
    " ></textarea>

    </div>

    <div class="row_first">
        <h2 class="description-section">General Impression</h2>
        <textarea cols="164" placeholder="*required
    " ></textarea>

    </div>

    <div class="row_first">
        <h2 class="description-section">Workflow, Leadership & Soft Skills</h2>
        <textarea cols="164" placeholder="Describe the environment in which the candidate works.
    Describe any guidance or management experience
    " ></textarea>

    </div>
    `;
}

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

window.onload = function(){
    const result = [];
    result.push(NewEvaluationPage({}))
    document.querySelector('#app').innerHTML = result;
}
