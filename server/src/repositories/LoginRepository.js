module.exports = {
  async logar(data) {
		try {
			const { login, senha } = data
			let usuario = await knex('usuario').where({login, senha}).first().select()
			if (usuario) {
				return "Sim"
			} else {
				return "Não"
			}
		} catch(err) {
			throw new Error(err.sqlMessage)
		}
	}
}