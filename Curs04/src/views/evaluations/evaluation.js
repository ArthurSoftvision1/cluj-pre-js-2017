function EvaluationsPage (options = {}) {

    const headings = [
        'Nume','Tehnologie','Nivel'
    ]

    const rows = [

        {
            Name: "Popescu Adrian",
            Technology: "Javascript",
            Level: "Mid 2"
        },
        {
            Name: "Dragan Roxana",
            Technology: "PHP",
            Level: "Mid 1"
        },
        {
            Name: "Florescu Mihai",
            Technology: "Javascript",
            Level: "Junior 3"
        },
        {
            Name: "Gheorghe Andrei",
            Technology: "Ruby",
            Level: "Senior 1"
        }
    ]

    return `

        ${NAV()}
        ${EvaluationsTable({
            items: rows,
            itemHeadings: headings
        })}
        ${Footer()}
         `;
}

function EvaluationsTableHeader(options) {

    const headings = [];

    options.headings.forEach(function(el) {
        const generatedEl = `<th class="candidates_table_header">${el}</th>`;
        headings.push(generatedEl);
    });
    const headingsEl = `
    ${headings.join('')};`
    return `
        <tr>
            ${headingsEl}
        </tr>
        `;
}

function EvaluationsTableRow (options = {}) {

    return `

    <tr class="rows">
        <td>${options.Name}</td>
        <td>${options.Technology}</td>
        <td>${options.Level}</td>
        <td style="text-align: right">Detalii <button>+</button></td>
    </tr>
    `
}

function EvaluationsTableBody (options = {}) {
  
    const rowsElements = options.items.map(function(rowObj){

        return EvaluationsTableRow(rowObj)

    })
    
    const rowsEl = rowsElements.join('');

    return `

    <tbody>    
        ${rowsEl}
    </tbody>
    `
}

function EvaluationsTable (options = {}) {

    return `

    <section>
        <table class="candidates_table">
            ${EvaluationsTableHeader({
                headings: ['Nume','Tehnologie','Nivel'
            ]
        })}
            ${EvaluationsTableBody({
                items: options.items
            })}
        </table>
    </section>
    `
}

window.onload = function () {
    const appEl = document.querySelector("#app");
    appEl.innerHTML = EvaluationsPage();
}