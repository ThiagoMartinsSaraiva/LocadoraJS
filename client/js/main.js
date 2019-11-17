const apiURL = 'http://localhost:3000/filme'
const dataTable = document.getElementById('data-table')
let rows = []

function renderizarLista(object) {
  dataTable.innerHTML = ''
  let renderizar = []
  object.forEach(row => {
    renderizar.push(
      `<tr>
        <td>${row.id}</td>
        <td>${row.nome}</td>
        <td>${row.statusLocacao}</td>
        <td>${row.multaAplicada}</td>
        <td>${row.sinopse || 'Misterioso'}</td>
        <td><span onclick="atualizarFilme(${row.id})">Editar</span> | <span onclick="excluirFilme(${row.id})">Excluir</span></td>
      </tr>`)
    })
    dataTable.innerHTML += (renderizar.join(''))
}

function obterFilmes() {
  fetch(apiURL, {
    method: 'GET'
  })
  .then(res => res.json())
  .then(data => {
    data.forEach(filme => {
      rows.push(filme)
    })
    renderizarLista(rows)
  })
  .catch(err => console.log('err', err))
}

obterFilmes()

function pesquisar(target) {
  let filteredList = []
  if (target.value) {
    filteredList = [...rows.filter(row => row.nome.toLowerCase().includes(target.value.toLowerCase()) || row.id == target.value)]
    renderizarLista(filteredList)
  } else {
    renderizarLista(rows)
  }
}

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