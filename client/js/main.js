
fetch('http://localhost:3000/filme', {
  method: 'post',
  body: JSON.stringify({ "a": "abc" })
})
  .then(res => console.log(res))