import { select, put, call } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../@types/wookie-movies";
import { moviesActions } from "./index";
import { moviesAPI } from "../../api/movies";
import { selectMovie, selectMovies, selectMovieBySlug } from "./selectors";

//
export function* fetchMoviesWorker(action: PayloadAction<string>) {
  try {
    let movies: Movie[] = yield select(selectMovies);

    if (!movies.length)
      movies = yield call(moviesAPI.fetchMovies, action.payload);

    yield put(
      moviesActions.fetchMoviesSuccess({ search: action.payload, movies })
    );
  } catch (error) {
    yield put(moviesActions.fetchMoviesFailure(error));
  }
}

//
export function* fetchMovieWorker(action: PayloadAction<string>) {
  try {
    // select from reducer.movie
    let movie: Movie = yield select(selectMovie);
    // select from reducer.movies[search]
    if (!movie) movie = yield select(selectMovieBySlug(action.payload));
    // fetch movies
    if (!movie) yield call(fetchMoviesWorker, { ...action, payload: "" });
    // select from reducer.movies[search]
    movie = yield select(selectMovieBySlug(action.payload));

    yield put(moviesActions.fetchMovieSuccess(movie));
  } catch (error) {
    yield put(moviesActions.fetchMovieFailure(error));
  }
}
