interviewApp.EvaluationsPage = function(options = {} )  {

    const headings = [
        'Nume','Tehnologie','Nivel', 'Details'
    ]
    
    let response;
    try {
        response = JSON.parse(localStorage.getItem("storageKey"))
    } catch (e) {
        console.error('Something went wrong', e)
        response =[]
    }
        const rows = response;
    
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
            <td style="text-align: right">Detalii<button class="add-button">+</button></td>
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

    return `

        ${interviewApp.NAV()}
        ${EvaluationsTable({
            items: rows,
            itemHeadings: headings
        })}
        ${interviewApp.Footer()}
         `;
}








