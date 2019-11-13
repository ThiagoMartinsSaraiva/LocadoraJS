const idSequence = {
    actualId: 3,
    getId(){ return actualId++;}
}

const filmes = [
    { id : 0 , nome: 'Avatar', avaliacao: '7', duracao: '1h20m' },
    { id : 1 , nome: 'Joker', avaliacao: '10', duracao: '2h10m' },
    { id : 2 , nome: 'Wolverine', avaliacao: '10', duracao: '1h40m' },
    { id : 3 , nome: 'Dance', avaliacao: '3', duracao: '1h20m' }
]

function saveFilme(filme){
    if(!filme.id) filme.id = idSequence.actualId;
    
    filmes[filme.id] = filme;
    return filme;
}

function getFilme(id){
    return filmes[id] || {}
}

function getAllFilmes(){
    return filmes;
}

function deleteFilme(id){
    filmes.slice(id,1)
    return filmes;
}

module.exports = {saveFilme, getFilme, getAllFilmes, deleteFilme}