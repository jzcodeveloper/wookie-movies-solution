import { all } from "redux-saga/effects";
import { moviesWatchers } from "./movies/watchers";

export default function* rootSaga() {
  yield all([...moviesWatchers]);
}
