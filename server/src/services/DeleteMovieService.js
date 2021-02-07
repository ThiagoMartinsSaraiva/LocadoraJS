const MoviesRepository = require("../repositories/MoviesRepository");

class DeleteMovieService {
  constructor() {
    this.moviesRepository = new MoviesRepository()
  }

  async execute(id) {
    if (id < 1) {
      throw new Error ("Filme não encontrado!")
    }

    const [movieExist] = await this.moviesRepository.getById(id)

    if (!movieExist) {
      throw new Error ("Filme não encontrado!")
    }
  }
}

module.exports = DeleteMovieService
