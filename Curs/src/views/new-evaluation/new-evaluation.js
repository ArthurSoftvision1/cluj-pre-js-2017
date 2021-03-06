interviewApp.NewEvaluationPage = function(optionParam = {}) {

    const CandidateDetailsForm = function (options) {
        const result = options.map(function (element) {
            return `
            <div class="row">
                <div class="container top_page_inputs">
                    <div class="col-md-3">${element}</div>
                </div>
            </div>
            `
        })
        return result.join('')
        
    }
        
    const TechnicalLevelHeader = function (options){
        return `<div class="row_title">
        <h2 class="description_section">${options}</h2>
        </div>`
    }

    const  TechnicalLevelNav = function (options) {
        const result = options.map(function (element){
            return `
            <div class="col-md-3 bullets_menu">
                <h3 class="header-title">${element}</h3>
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
                ${TechnicalLevelRadioSubsection(element)}
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
    
    const SubmitButtonArea = function () {
        return `
        <div class="submit-button-section">
            <input id="submit-button" class="submit-button" type="submit" value="SUBMIT">
        </div>
        `
    }
   
    return `
        ${interviewApp.NAV(optionParam.navigationLinks)},
        ${CandidateDetailsForm(optionParam.detailsForm)},
        ${TechnicalLevelPicker(optionParam.levelContent)},
        ${TextAreaBody(optionParam.areaContent)},
        ${SelectAndInputFirst(optionParam.dropDown)},
        ${SubmitButtonArea()},
        ${interviewApp.Footer()},
        `;
}















