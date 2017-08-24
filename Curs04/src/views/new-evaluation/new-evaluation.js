const NewEvaluationPage = function(options = {}) {
    

    return `
        ${NAV()},
        ${CandidateDetailsForm()},
        ${TechnicalLevelPicker(options.technicalLevelContent)},
        ${TextAreaBody(options.textAreaContent)},
        ${SelectAndInputFirst(options.legendDropDown)},
        ${SelectAndInputSecond()},
        ${SelectAndInputThree()},
        ${SelectAndInputFour()},
        ${SelectAndInputFive()},
        ${SelectAndInputSix()},
        ${Footer()},
        `;
}

const NAV = function (options) {
    const EvaluationLink = 'Evaluations'
    const NewEvaluation = 'New Evaluation'
    const LogoutLink = 'Logout'

    return `
    <nav class="row">
        <div class="col-md-12 logo_section">
            <div class="col-md-4 text_alignment">
                <a href="evaluation.html"><img class="logo_image" src="img/logo-v2.png"/> </a>
            </div>
            <div class="col-md-4" style="padding-top: 8px;">
                <a class="evaluation_button border_bottom" href="#">${EvaluationLink}</a>
                <a class="border_bottom" href="#" style="margin-left: 100px;">${NewEvaluation}</a>
                <a class="border_bottom" href="#" style="float:right;">${LogoutLink}</a>
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


const TechnicalLevelHeader = function (options){
    return `<div class="row">
    <h2 class="description_section">${options}</h2>
    </div>`
}

const  TechnicalLevelNav = function (options) {
    const result = options.map(function (element){
        return `
        <div class="col-md-3 bullets_menu">
            <h3>${element}</h3>
        </div>`
    })
    return result.join('')
}

const TechnicalLevelRadioBox = function (options = {}) {
    return `
    <input class="input-circle" type="radio" name="circle" value="circles">
    `
}

const TechnicalLevelRadioSubsection = function (arrayElement = {}) {
    const result =[]
    for(var i = 0; i < arrayElement ; i++){
        result.push(TechnicalLevelRadioBox())
    }
    return result.join('')
}

const TechnicalLevelBoxSection = function (options = {} ) {
    const result = options.map(function(element) {
        return `
        <div class="col-md-3 bullets_menu">
            <form action="">
                ${TechnicalLevelRadioSubsection(element)}
            </form>
        </div>
        `
    }).join('')

    return result
}

const TechnicalLevelPicker = function (options) {

    return `
        ${TechnicalLevelHeader(options.technicalHeader)}

    <div class="row level_evaluation">
        ${TechnicalLevelNav(options.technicalLevel)}
    </div>

    <div class="row_section">
        ${TechnicalLevelBoxSection(options.technicalLevelSection)}
    </div>
    `;
}

const TextAreaBody = function (options) {
    const result = options.map(function(element) {
        return `
        <div class="row_first">
        <h2 class="description-section">${element.textAreaHeader}</h2>
        <textarea cols="164" placeholder="${element.textAreaPlaceHolder}" ></textarea>
    </div>`
    }).join('')
    return result
}

const DropdownSelector = function (options ) {
    const result = options.map(function(element) {
        return `
        <option value="${element}">${element}</option>
        `
    }).join('')
    return result
}

const legendBoxes = function (options = {}){
    const result = options.map(function(elements){
        return `
        <li>
        <label>${elements.labelText}</label> 
            <select name="${elements.selectName}">
                <option selected disabled>Evaluation</option>
                ${DropdownSelector(elements.legendSelectorContent)}
            </select> 
        </li>
    `}).join('')
    return result
}


const legendFinal = function(options = {}){
    return `<form class="language-form">
    <fieldset class="field-section">
        <legend><h2>${options.legendHeader}</h2></legend>
        <ul class="technical-list"> 
        ${legendBoxes(options.liContents)}
        </ul>
        </fieldset>
    </form>`
}

const SelectAndInputFirst = function (options) {
    const result = options.map(function(elements) {
        return `
        ${legendFinal(elements)}
        `

    }).join('')


    return `
   ${result}
    
`;
}

const SelectAndInputSecond = function () {
    return `
    <form class="language-form">
    <fieldset class="field-section">
        <legend><h2>HTTP</h2></legend>
        <ul class="technical-list">
             <li>
                 <label>Protocol</label> <select name="protocol">
                 <option selected disabled>Evaluation</option>
                 <option value="0">0</option>
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
             </select> <br>
                 <label>Headers</label> <select name="headers">
                 <option selected disabled>Evaluation</option>
                 <option value="0">0</option>
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
             </select> <br>
             </li>

            <li>
                <label>Response codes</label> <select name="response">
                <option selected disabled>Evaluation</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select> <br>
                <label>Request methods</label> <select name="request">
                <option selected disabled>Evaluation</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select> <br>
            </li>

            <li>
                <label>REST</label> <select name="rest">
                <option selected disabled>Evaluation</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select> <br>
                <label>Sessions & Cookies</label> <select name="sessions">
                <option selected disabled>Evaluation</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select> <br>
            </li>
        </ul>
    </fieldset>
</form>
    `;
}

const SelectAndInputThree = function () {

    return `
    <form class="language-form">
    <fieldset class="field-section">
        <legend><h2>HTML</h2></legend>
        <ul class="technical-list">
            <li>
                <label>Doctype</label> <select name="doctype">
                <option selected disabled>Evaluation</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select> <br>
                <label>Syntax rules</label> <select name="syntax">
                <option selected disabled>Evaluation</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select> <br>
            </li>

            <li>
                <label>Tags</label> <select name="tags">
                <option selected disabled>Evaluation</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select> <br>
                <label>Attributes</label> <select name="attributes">
                <option selected disabled>Evaluation</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select> <br>
            </li>

            <li>
                <label>Basic SEO</label> <select name="seo">
                <option selected disabled>Evaluation</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select> <br>
            </li>
        </ul>
    </fieldset>
</form>
    `;
}


const SelectAndInputFour = function () {

    return  `
    <form class="language-form" style="text-align:center;">
    <fieldset class="field-section">
        <legend><h2>CSS</h2></legend>
        <ul class="technical-list">
            <li>
                <label>Usage</label> <select name="usage">
                <option selected disabled>Evaluation</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select> <br>
                <label>Selectors</label> <select name="selectors">
                <option selected disabled>Evaluation</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select> <br>
            </li>

            <li>
                <label>Box modelling</label> <select name="box">
                <option selected disabled>Evaluation</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select> <br>
                <label>Styling</label> <select name="styling">
                <option selected disabled>Evaluation</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select> <br>
            </li>

            <li>
                <label>CSS 3.0</label> <select name="css">
                <option selected disabled>Evaluation</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select> <br>
                <label>Dynamic Stylesheets</label><select name="dynamic">
                <option selected disabled>Evaluation</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select> <br>
            </li>
        </ul>
    </fieldset>
</form>
    `;
}

const SelectAndInputFive = function () {
    return `
    <form class="language-form">
            <fieldset class="field-section">
                <legend><h2>Javascript</h2></legend>
                <ul class="technical-list">
                    <li>
                        <label>Data types & variables</label> <select name="data">
                        <option selected disabled>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select> <br>
                        <label>Functions</label> <select name="functions">
                        <option selected disabled>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select> <br>
                        <label>Prototype & OOP</label><select name="prototype">
                        <option selected disabled>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select> <br>
                        <label>Debugging</label> <select name="debugg">
                        <option selected disabled>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select> <br>
                        <label>Libraries</label> <select name="libraries">
                        <option selected disabled>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select> <br>
                        <label>Frameworks</label> <select name="frameworks">
                        <option selected disabled>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select> <br>
                    </li>

                    <li>
                        <label>Object manipulation</label> <select name="object">
                        <option selected disabled>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select> <br>
                        <label>Templating</label> <select name="templating">
                        <option selected disabled>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select> <br>
                        <label>Testing(unit, E2E)</label> <select name="testing">
                        <option selected disabled>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select> <br>
                        <label>Websockets</label> <select name="websockets">
                        <option selected disabled>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select> <br>
                        <label>Promises</label> <select name="promises">
                        <option selected disabled>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select> <br>
                    </li>

                    <li>
                        <label>DOM Manipulation</label> <select name="dommanipulation">
                        <option>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select> <br>
                        <label>Event Handling</label> <select name="event">
                        <option>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select> <br>
                        <label>AJAX</label> <select name="ajaxrequest">
                        <option>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select> <br>
                        <label>Tooling</label> <select name="tooling">
                        <option>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select> <br>
                        <label>Browser Engines</label><select name="browser">
                        <option>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select> <br>
                    </li>
                </ul>
            </fieldset>
        </form>
    `;
}

const SelectAndInputSix = function () {

    return `
    <form class="language-form">
    <fieldset class="field-section">
        <legend><h2>NodeJS</h2></legend>
        <ul class="technical-list">
            <li>
                <label>Backend frameworks</label> <select name="backend">
                <option selected disabled>Evaluation</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select> <br>
                <label>Unit Testing</label><select name="unittesting">
                <option selected disabled>Evaluation</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select> <br>
            </li>

            <li>
                <label>Templating</label> <select name="templatingoptions">
                <option selected disabled>Evaluation</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select> <br>
            </li>

            <li>
                <label>DOM Manipulation</label> <select name="domhandle">
                <option selected disabled>Evaluation</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select> <br>
            </li>
        </ul>
    </fieldset> <br>
    <div class="submit-button-section">
        <input class="submit-button" type="submit" value="SUBMIT">
    </div>
</form>
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
    
    const legendSelectorContent =['0', '1', '2', '3']

    const legendDropDown = [{
        liContents:[
                {
                    legendSelectorContent,
                    selectName : 'class',
                    labelText : `Classes`
                },
                {
                    legendSelectorContent,
                    selectName : 'access',
                    labelText : 'Access modifiers'
                },
                {
                    legendSelectorContent,
                    selectName : 'protocol',
                    labelText : 'Protocol'
                },
                {
                    legendSelectorContent,
                    selectName : 'headers',
                    labelText : 'Headers'
                },
                
        ],
        legendHeader : 'OOP, Design Patterns'
    },
    {
        liContents:[
                {
                    legendSelectorContent,
                    selectName : 'class',
                    labelText : `Classes`
                },
                {
                    legendSelectorContent,
                    selectName : 'access',
                    labelText : 'Access modifiers'
                },
                {
                    legendSelectorContent,
                    selectName : 'protocol',
                    labelText : 'Protocol'
                },
                {
                    legendSelectorContent,
                    selectName : 'headers',
                    labelText : 'Headers'
                },
                
        ],
        legendHeader : 'HTTP'
    },

    {
        liContents:[
                {
                    legendSelectorContent,
                    selectName : 'class',
                    labelText : `Classes`
                },
                {
                    legendSelectorContent,
                    selectName : 'access',
                    labelText : 'Access modifiers'
                }
                
        ],
        legendHeader : 'HTML'
    },

    {
        liContents:[
                {
                    legendSelectorContent,
                    selectName : 'class',
                    labelText : `Classes`
                },
                {
                    legendSelectorContent,
                    selectName : 'access',
                    labelText : 'Access modifiers'
                }
                
        ],
        legendHeader : 'CSS'
    },

    {
        liContents:[
                {
                    legendSelectorContent,
                    selectName : 'class',
                    labelText : `Classes`
                },
                {
                    legendSelectorContent,
                    selectName : 'access',
                    labelText : 'Access modifiers'
                }, {
                    legendSelectorContent,
                    selectName : 'class',
                    labelText : `Classes`
                },
                {
                    legendSelectorContent,
                    selectName : 'access',
                    labelText : 'Access modifiers'
                },
                {
                    legendSelectorContent,
                    selectName : 'class',
                    labelText : `Classes`
                },
                {
                    legendSelectorContent,
                    selectName : 'access',
                    labelText : 'Access modifiers'
                }
                
        ],
        legendHeader : 'Javascript'
    },
    {
        liContents:[
                {
                    legendSelectorContent,
                    selectName : 'class',
                    labelText : `Classes`
                },
                {
                    legendSelectorContent,
                    selectName : 'access',
                    labelText : 'Access modifiers'
                }
                
        ],
        legendHeader : 'NodeJS'
    },
    
    ]
    const textAreaContent = [
        {
            textAreaHeader: 'Should the candidate be hired?',
            textAreaPlaceHolder: `The type of project that is suitable for the candidate
            Is guidance required for the candidate`
        },
        {
            textAreaHeader: 'General Impression',
            textAreaPlaceHolder: `*required`
        },
        {
            textAreaHeader: 'Workflow, Leadership & Soft Skills',
            textAreaPlaceHolder: `Describe the environment in which the candidate works.
            Describe any guidance or management experience`
        }
    ]


    const technicalLevelContent = { 
        technicalHeader: "Technical level",
        technicalLevel: ['Trainee', 'Junior', 'Middle', 'Senior'],
        technicalLevelSection: ['1', '3', '3', '3']
     }
    
    const options = {
        technicalLevelContent,
        textAreaContent,
        legendSelectorContent,
        legendDropDown
    } // const options = {technicalLevelContent} <=>const options = {technicalLevelContent : technicalLevelContent} 
    const result = [];
    result.push(NewEvaluationPage(options))
    document.querySelector('#app').innerHTML = result;
}
