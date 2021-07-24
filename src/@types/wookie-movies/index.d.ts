import { AxiosError } from "axios";

export interface Movie {
  backdrop: string;
  cast: string[];
  classification: string;
  director: string;
  genres: string[];
  id: string;
  imdb_rating: number;
  length: string;
  overview: string;
  poster: string;
  released_on: string;
  slug: string;
  title: string;
}

export interface Movies {
  movies: Movie[];
}

export interface MoviesByGenre extends Movies {
  genre: string;
}

export interface MoviesSearch extends Movies {
  search: string;
}

export interface MoviesCache {
  [key: string]: Movie[];
}

export interface MoviesState {
  movie: Nullable<Movie>;
  movies: MoviesCache;
  search: string;
  loading: boolean;
  error: Nullable<AxiosError>;
}

export interface RootState {
  movies: MoviesState;
}

export type Nullable<T> = T | null;
