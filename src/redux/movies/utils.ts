import { Movie, MoviesByGenre, Nullable } from "../../@types/wookie-movies";

//
export function getGenres(movies: Movie[]): string[] {
  return Array.from(
    new Set(movies.reduce((acc, val) => acc.concat(val.genres), [] as string[]))
  );
}

//
export function getMoviesByGenre(movies: Movie[]): MoviesByGenre[] {
  const genres = getGenres(movies);
  return genres.map((genre: string) => ({
    genre,
    movies: movies.filter((movie: Movie) => movie.genres.includes(genre)),
  }));
}

//
export function getMovieBySlug(movies: Movie[], slug: string): Nullable<Movie> {
  return movies.find((movie: Movie) => movie.slug === slug) || null;
}
