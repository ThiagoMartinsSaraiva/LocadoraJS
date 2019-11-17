const apiURL = 'http://localhost:3000/filme'
const dataTable = document.getElementById('data-table')

function obterFilmes() {
  fetch(apiURL, {
    method: 'GET'
  })
  .then(res => res.json())
  .then(data => {
    let rows = []
    data.forEach(filme => {
      rows.push(`<tr>
        <td>${filme.id}</td>
        <td>${filme.nome}</td>
        <td>${filme.statusLocacao}</td>
        <td>${filme.multaAplicada}</td>
        <td>${filme.sinopse}</td>
        <td>Editar | Excluir</td>
      </tr>`)
    })
    dataTable.innerHTML += (rows.join(''))
  })
  .catch(err => console.log('err', err))
}

obterFilmes()

function obterFilme() {

}

function adicionarFilme() {
  fetch(api, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
  })
    .then(res => console.log(res))
    .finally(() => console.log('Inserido com sucesso!'))
    .catch(err => console.log(err))
}

function atualizarFilme() {

}

function excluirFilme() {

}