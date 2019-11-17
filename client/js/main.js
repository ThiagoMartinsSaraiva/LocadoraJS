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

function pesquisar(target) {
  let filteredList = []
  if (target.value) {
    filteredList = [...rows.filter(row => row.nome.toLowerCase().includes(target.value.toLowerCase()) || row.id == target.value)]
    renderizarLista(filteredList)
  } else {
    renderizarLista(rows)
  }
}

function excluirFilme(id) {
  fetch(`${apiURL}/${id}`, {
    method: 'DELETE'
  })
    .then((res) => res.json())
    .then(data => console.log(data))
    .then(() => {
      let removedItem = rows.find(row => row.id == id)
      let index = rows.indexOf(removedItem)
      rows.splice(index, 1)
      renderizarLista(rows)
    })
    .catch(err => console.log(err))
}

function atualizarFilme(id) {
  window.location.href = `./formulario.html?id=${id}`
}

obterFilmes()