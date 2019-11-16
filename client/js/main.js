fetch('http://localhost:3000/filme', {
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