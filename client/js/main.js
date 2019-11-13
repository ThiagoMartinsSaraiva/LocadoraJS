myObj = {
  id: 4,
  nome: 'Birl',
  avaliacao: '10',
  duracao: '10'
}

fetch('http://localhost:3000/filme/criar', {
  method: 'get',
  headers: JSON.stringify(myObj)
})
  .then(res => console.log(myObj))
  .catch(err => console.log(err))