import { createSelector, Selector, OutputSelector } from "reselect";
import { AxiosError } from "axios";
import {
  RootState,
  Movie,
  MoviesState,
  MoviesCache,
  MoviesByGenre,
  Nullable,
} from "../../@types/wookie-movies";
import { getMoviesByGenre, getMovieBySlug } from "./utils";

export const selectMoviesState: Selector<RootState, MoviesState> = (state) =>
  state.movies;

export const selectMoviesCache: OutputSelector<
  RootState,
  MoviesCache,
  (movies: MoviesState) => MoviesCache
> = createSelector([selectMoviesState], (movies) => movies.movies);

export const selectMoviesSearch: OutputSelector<
  RootState,
  string,
  (movies: MoviesState) => string
> = createSelector([selectMoviesState], (movies) => movies.search);

export const selectMoviesLoading: OutputSelector<
  RootState,
  boolean,
  (movies: MoviesState) => boolean
> = createSelector([selectMoviesState], (movies) => movies.loading);

export const selectMoviesError: OutputSelector<
  RootState,
  Nullable<AxiosError>,
  (movies: MoviesState) => Nullable<AxiosError>
> = createSelector([selectMoviesState], (movies) => movies.error);

export const selectMovie: OutputSelector<
  RootState,
  Nullable<Movie>,
  (movies: MoviesState) => Nullable<Movie>
> = createSelector([selectMoviesState], (movies) => movies.movie);

export const selectMovies: OutputSelector<
  RootState,
  Movie[],
  (movies: MoviesCache, search: string) => Movie[]
> = createSelector(
  [selectMoviesCache, selectMoviesSearch],
  (movies, search) => movies[search] || []
);

export const selectMoviesByGenre: OutputSelector<
  RootState,
  MoviesByGenre[],
  (movies: Movie[]) => MoviesByGenre[]
> = createSelector([selectMovies], (movies) => getMoviesByGenre(movies));

export const selectMovieBySlug = (
  slug: string
): OutputSelector<
  RootState,
  Nullable<Movie>,
  (movies: Movie[]) => Nullable<Movie>
> => createSelector([selectMovies], (movies) => getMovieBySlug(movies, slug));
