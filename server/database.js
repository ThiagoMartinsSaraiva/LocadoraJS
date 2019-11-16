const filmes = [
	{ id : 0 , nome: 'Avatar', avaliacao: 7, duracao: 120 },
	{ id : 1 , nome: 'Joker', avaliacao: 10, duracao: 210 },
	{ id : 2 , nome: 'Wolverine', avaliacao: 10, duracao: 140 },
	{ id : 3 , nome: 'Dance', avaliacao: 3, duracao: 120 }
]

module.exports = {
	adicionarFilme(filme){
		filmes.push(filme)
	},
	obterFilmePorId(id) {
		return filmes.find(filme => filme.id == id) || 'Nenhum filme encontrado'
	},
	obterTodosFilmes() {
		return filmes;
	},
	atualizarFilme(data) {
		const { id } = data
		let filme = filmes.find(filme => filme.id == id)
		if (filme) {
			filme = { ...data }
		}
		return filme
	},
	excluirFilme(id) {
		filmes.slice(id, 1)
		return filmes;
	}
}