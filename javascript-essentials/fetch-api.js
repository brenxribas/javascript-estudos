// fetch('cursos.json')
//     .then(resposta => resposta.json())
//     .then(json => carregaElementosNaPagina(json));

axios('cursos.json')
.then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
    const table = document.createElement('table');
    for (let cursos of json) {
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = cursos.nome_curso;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = cursos.nome_campus;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = cursos.sigla_campus;
        tr.appendChild(td);

        table.appendChild(tr);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}