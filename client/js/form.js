const myForm = document.getElementById('form')
const formNome = document.getElementById('input_nome')
const formStatus = document.getElementById('input_status')
const formMulta = document.getElementById('input_multa')
const formSinopse = document.getElementById('input_sinopse')
const apiURL = 'http://localhost:3000/filme'

function obterFilme() {

}

myForm.addEventListener('submit', () => {
  event.preventDefault()
  adicionarFilme()
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
    .then(() => window.location.href="./index.html")
    .finally(() => console.log('Inserido com sucesso!'))
    .catch(err => console.log(err))
}

function atualizarFilme() {

}