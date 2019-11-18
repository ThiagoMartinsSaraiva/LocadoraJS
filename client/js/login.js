const formLogin = document.getElementById('formLogin')
const formSenha = document.getElementById('formSenha')
const apiURL = 'http://localhost:3000/login'
const message = document.getElementById('message')

myForm.addEventListener('submit', () => {
  event.preventDefault()
  logar()
})

function logar() {
  const login = formLogin.value
  const senha = formSenha.value
  const usuario = { login, senha }

  fetch(apiURL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(usuario)
  })
    .then((res) => res.json())
    .then(data => {
      if (data.toLowerCase() == 'sim') {
        window.location.href="./filme.html"
      } else {
        message.innerHTML = 'Senha incorreta'
      }
    })
    .catch(err => console.log(err))
}