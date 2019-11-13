let actualId = 3

const idSequence = {
	getId(){ return actualId++;}
}

const filmes = [
	{ id : 0 , nome: 'Avatar', avaliacao: '7', duracao: '1h20m' },
	{ id : 1 , nome: 'Joker', avaliacao: '10', duracao: '2h10m' },
	{ id : 2 , nome: 'Wolverine', avaliacao: '10', duracao: '1h40m' },
	{ id : 3 , nome: 'Dance', avaliacao: '3', duracao: '1h20m' }
]

module.exports = {
	saveFilme(filme){
		filmes.push(filme)
	},
	getFilme(id){
		return filmes.find(filme => filme.id == id) || 'Nenhum filme encontrado'
	},
	getAllFilmes(){
		return filmes;
	},
	deleteFilme(id){
		filmes.slice(id, 1)
		return filmes;
	}
}