module.exports = {
  getMovies,
  getMovie,
  newMovie,
  putMovie
};

let movies = [
  { name: 'Matrix' },
  { name: 'Avengers' }
];

function getMovies(req, res) {
  console.log('Devolvemos todas las películas!!');
  res.json(movies);
}

function getMovie(req, res) {
  console.log('Buscando por la pelicula con id ', req.swagger.params.movie_uuid.value);
  res.json({ name: 'Aquí tienes tu película' });
}

function newMovie(req, res) {
  console.log('Creando una nueva película', req.swagger.params.movie.value);
  const newMovie = {
    name: req.swagger.params.movie.value.name
  };
  res.json(newMovie);
}

function putMovie(req, res) {
  console.log('Actualizando una nueva película', req.swagger.params.movie_uuid.value);
  movies[1].name = req.swagger.params.movie_uuid.value.name;
  res.json(putMovie);
}
