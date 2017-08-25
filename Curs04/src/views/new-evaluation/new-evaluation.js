const NewEvaluationPage = function(options = {}) {
    

    return `
        ${NAV()},
        ${CandidateDetailsForm()},
        ${TechnicalLevelPicker(options.technicalLevelContent)},
        ${TextAreaBody(options.textAreaContent)},
        ${SelectAndInputFirst(options.legendDropDown)},
        ${SubmitButtonArea(options.submitButton)},
        ${Footer(options.footerAreaSection)},
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

const SubmitButtonArea = function (options = '') {
    return `
        ${options.submitLink}
    `
}

const Footer = function (options = '') {
    return `
    <!--Footer section-->
    <footer class="container-fluid footer-section">
        <div class="col-md-4">

        </div>
        <div class="col-md-4">

        </div>
        <div class="col-md-4">
            ${options.footerText}
        </div>
    </footer>
        `
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
                    selectName : 'polymorphism',
                    labelText : 'Polymorphism'
                },
                {
                    legendSelectorContent,
                    selectName : 'exception',
                    labelText : 'Exception handling'
                },
                {
                    legendSelectorContent,
                    selectName : 'pattern',
                    labelText : 'Design patterns'
                },
                {
                    legendSelectorContent,
                    selectName : 'regex',
                    labelText : 'Regex'
                },
                {
                    legendSelectorContent,
                    selectName : 'version',
                    labelText : 'Version Control'
                },
                {
                    legendSelectorContent,
                    selectName : 'track',
                    labelText : 'Issue Tracking'
                },
                
        ],
        legendHeader : 'OOP, Design Patterns'
    },
    {
        liContents:[
                {
                    legendSelectorContent,
                    selectName : 'protocol',
                    labelText : `Protocol`
                },
                {
                    legendSelectorContent,
                    selectName : 'headers',
                    labelText : 'Headers'
                },
                {
                    legendSelectorContent,
                    selectName : 'response',
                    labelText : 'Response codes'
                },
                {
                    legendSelectorContent,
                    selectName : 'request',
                    labelText : 'Request methods'
                },
                {
                    legendSelectorContent,
                    selectName : 'rest',
                    labelText : 'REST'
                },
                {
                    legendSelectorContent,
                    selectName : 'sessions',
                    labelText : 'Sessions & Cookies'
                }
                
        ],
        legendHeader : 'HTTP'
    },

    {
        liContents:[
                {
                    legendSelectorContent,
                    selectName : 'doctype',
                    labelText : `Doctype`
                },
                {
                    legendSelectorContent,
                    selectName : 'syntax',
                    labelText : 'Syntax rules'
                },
                {
                    legendSelectorContent,
                    selectName : 'tags',
                    labelText : 'Tags'
                },
                {
                    legendSelectorContent,
                    selectName : 'attributes',
                    labelText : 'Attributes'
                },
                {
                    legendSelectorContent,
                    selectName : 'syntax',
                    labelText : 'Basic SEO'
                }
                
        ],
        legendHeader : 'HTML'
    },

    {
        liContents:[
                {
                    legendSelectorContent,
                    selectName : 'usage',
                    labelText : `Usage`
                },
                {
                    legendSelectorContent,
                    selectName : 'selectors',
                    labelText : 'Selectors'
                },
                {
                    legendSelectorContent,
                    selectName : 'access',
                    labelText : 'Access modifiers'
                },
                {
                    legendSelectorContent,
                    selectName : 'box',
                    labelText : 'Box modelling'
                },
                {
                    legendSelectorContent,
                    selectName : 'styling',
                    labelText : 'Styling'
                },
                {
                    legendSelectorContent,
                    selectName : 'css',
                    labelText : 'CSS 3.0'
                },
                {
                    legendSelectorContent,
                    selectName : 'dynamic',
                    labelText : 'Dynamic Stylesheets'
                }
                
        ],
        legendHeader : 'CSS'
    },

    {
        liContents:[
                {
                    legendSelectorContent,
                    selectName : 'data',
                    labelText : `Data types & variables`
                },
                {
                    legendSelectorContent,
                    selectName : 'functions',
                    labelText : 'Functions'
                }, {
                    legendSelectorContent,
                    selectName : 'prototype',
                    labelText : `Prototype & OOP`
                },
                {
                    legendSelectorContent,
                    selectName : 'debugg',
                    labelText : 'Debugging'
                },
                {
                    legendSelectorContent,
                    selectName : 'libraries',
                    labelText : `Libraries`
                },
                {
                    legendSelectorContent,
                    selectName : 'object',
                    labelText : 'Object manipulation'
                },
                {
                    legendSelectorContent,
                    selectName : 'templating',
                    labelText : 'Templating'
                },
                {
                    legendSelectorContent,
                    selectName : 'testing',
                    labelText : 'Testing(unit, E2E)'
                },
                {
                    legendSelectorContent,
                    selectName : 'websockets',
                    labelText : 'Websockets'
                },
                {
                    legendSelectorContent,
                    selectName : 'promises',
                    labelText : 'Promises'
                },
                {
                    legendSelectorContent,
                    selectName : 'dommanipulation',
                    labelText : 'DOM Manipulation'
                },
                {
                    legendSelectorContent,
                    selectName : 'event',
                    labelText : 'Event Handling'
                },
                {
                    legendSelectorContent,
                    selectName : 'ajaxrequest',
                    labelText : 'AJAX'
                },
                {
                    legendSelectorContent,
                    selectName : 'tooling',
                    labelText : 'Tooling'
                },
                {
                    legendSelectorContent,
                    selectName : 'browser',
                    labelText : 'Browser Engines'
                }
                
      
        ],
        legendHeader : 'Javascript'
    },
    {
        liContents:[
                {
                    legendSelectorContent,
                    selectName : 'backend',
                    labelText : `Backend frameworks`
                },
                {
                    legendSelectorContent,
                    selectName : 'unittesting',
                    labelText : 'Unit Testing'
                },
                {
                    legendSelectorContent,
                    selectName : 'templatingoptions',
                    labelText : 'Templating'
                },
                {
                    legendSelectorContent,
                    selectName : 'domhandle',
                    labelText : 'DOM Manipulation'
                }
                
        ],
        legendHeader : 'NodeJS'
    },
    
    ]

    const footerAreaSection = {
        footerText: '<p class="footer-description">Copyright@Softvision 2017</p>'
    }

    const submitButton = {
        submitLink: `
        <div class="submit-button-section">
            <input class="submit-button" type="submit" value="SUBMIT">
        </div>`
    }

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
        legendDropDown,
        footerAreaSection,
        submitButton
    } // const options = {technicalLevelContent} <=>const options = {technicalLevelContent : technicalLevelContent} 
    const result = [];
    result.push(NewEvaluationPage(options))
    document.querySelector('#app').innerHTML = result;
}
