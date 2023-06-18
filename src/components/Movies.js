import React from 'react';
import { movies } from '../data';

function Movies() {
  const moviesList = movies.map((movie) => (
    <div key={movie.title}>
      <h2>Name: {movie.title}</h2>
      <p>time: {movie.time}</p>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Movies Page</h1>
      {moviesList}
    </div>
  );
}

export default Movies;
