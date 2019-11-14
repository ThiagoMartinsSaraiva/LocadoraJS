myObj = {
  id: 4,
  nome: 'Birl',
  avaliacao: '10',
  duracao: '10'
}

fetch('http://localhost:3000/filme', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(myObj)
})
  .then(() => console.log(myObj))
  .catch(err => console.log(err))