const MoviesRepository = require("../repositories/MoviesRepository");

class UpdateMovieService {
  constructor() {
    this.moviesRepository = new MoviesRepository()
  }

  async execute({ id, title, synopsis, duration }) {
    if (id < 1) {
      throw new Error ("Filme não encontrado!")
    }

    const [movieExist] = await this.moviesRepository.getById(id)

    if (!movieExist) {
      throw new Error ("Filme não encontrado!")
    }

    return await this.moviesRepository.update({ id, title, synopsis, duration })
  }
}

module.exports = UpdateMovieService
