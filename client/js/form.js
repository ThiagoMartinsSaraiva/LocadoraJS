const myForm = document.getElementById('form')
const formNome = document.getElementById('input_nome')
const formStatus = document.getElementById('input_status')
const formMulta = document.getElementById('input_multa')
const formSinopse = document.getElementById('input_sinopse')
const apiURL = 'http://localhost:3000/filme'

function obterFilme() {
  const id = window.location.search.substring(4)
  if (id) {
    fetch(`${apiURL}/${id}`, {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
      const { nome, statusLocacao, multaAplicada, sinopse } = data

      formNome.value = nome
      formStatus.value = statusLocacao
      formMulta.value = multaAplicada
      formSinopse.value = sinopse
    })
    .catch(err => console.log('err', err))
  }
}

myForm.addEventListener('submit', () => {
  const id = window.location.search.substring(4)
  event.preventDefault()
  if (id) {
    atualizarFilme(id)
  } else {
    adicionarFilme()
  }
})

function adicionarFilme() {
  const nome = formNome.value
  const statusLocacao = formStatus.value
  const multaAplicada = formMulta.value
  const sinopse = formSinopse.value
  const filme = { nome, statusLocacao, multaAplicada, sinopse }

  fetch(apiURL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(filme)
  })
    .then((res) => res.json())
    .then(data => console.log(data))
    .then(() => window.location.href="./filme.html")
    .catch(err => console.log(err))
}

function atualizarFilme(id) {
  const nome = formNome.value
  const statusLocacao = formStatus.value
  const multaAplicada = formMulta.value
  const sinopse = formSinopse.value
  const filme = { nome, statusLocacao, multaAplicada, sinopse }

  fetch(`${apiURL}/${id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(filme)
  })
    .then((res) => res.json())
    .then(data => console.log(data))
    .then(() => window.location.href="./filme.html")
    .catch(err => console.log(err))
}

obterFilme()