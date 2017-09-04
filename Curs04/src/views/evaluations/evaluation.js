function EvaluationsPage (options = {}) {

    const headings = [
        'Nume','Tehnologie','Nivel', 'Details'
    ]

    const rows = JSON.parse(localStorage.getItem("storageKey"))
    
    return `

        ${NAV()}
        ${EvaluationsTable({
            items: rows,
            itemHeadings: headings
        })}
        ${Footer()}
         `;
}

// data-id = "${myObject.id}"

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
        <td class="table-data">${options.candidate}</td>
        <td class="table-data">${options.date}</td>
        <td class="table-data">${options.circle}</td>
        <td style="text-align: right">Detalii<button class="add-button" data-Candidate="${options.id}">+</button></td>
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
        <table class="candidates-table">
            ${EvaluationsTableHeader({
                headings: ['Nume','Tehnologie','Nivel', ' '
            ]
        })}
            ${EvaluationsTableBody({
                items: options.items
            })}
        </table>
    </section>
            `;
}
