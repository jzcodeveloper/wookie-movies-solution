import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { Action } from "redux";
import { MoviesState, MoviesSearch, Movie } from "../../@types/wookie-movies";

const initialState: MoviesState = {
  movie: null,
  movies: { "": [] },
  search: "",
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    //
    fetchMovies(state: MoviesState, action: PayloadAction<string>) {
      state.loading = true;
      state.search = action.payload;
    },
    //
    fetchMoviesSuccess(
      state: MoviesState,
      action: PayloadAction<MoviesSearch>
    ) {
      state.loading = false;
      state.movies[action.payload.search] = action.payload.movies;
      state.error = null;
    },
    //
    fetchMoviesFailure(state: MoviesState, action: PayloadAction<AxiosError>) {
      state.loading = false;
      state.error = action.payload;
    },
    //
    fetchMovie(state: MoviesState, action: PayloadAction<string>) {
      state.loading = true;
    },
    //
    fetchMovieSuccess(state: MoviesState, action: PayloadAction<Movie>) {
      state.loading = false;
      state.movie = action.payload;
      state.error = null;
    },
    //
    fetchMovieFailure(state: MoviesState, action: PayloadAction<AxiosError>) {
      state.loading = false;
      state.error = action.payload;
    },
    //
    resetMovie(state: MoviesState, action: Action) {
      state.movie = null;
    },
  },
});

const { actions, reducer } = moviesSlice;

export const moviesActions = actions;

export default reducer;
