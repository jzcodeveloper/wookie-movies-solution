import { takeLatest, fork, ForkEffect } from "redux-saga/effects";
import { moviesActions } from "./";
import { fetchMoviesWorker, fetchMovieWorker } from "./workers";

//
function* fetchMoviesWatcher() {
  yield takeLatest(moviesActions.fetchMovies.type, fetchMoviesWorker);
}

//
function* fetchMovieWatcher() {
  yield takeLatest(moviesActions.fetchMovie.type, fetchMovieWorker);
}

export const moviesWatchers: ForkEffect[] = [
  fork(fetchMoviesWatcher),
  fork(fetchMovieWatcher),
];
