import { ReactElement, useEffect } from "react";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { moviesActions } from "../../redux/movies";
import { selectMovie, selectMoviesLoading } from "../../redux/movies/selectors";
import MovieDetails from "../../components/movie-details";
import Spinner from "../../components/spinner";

function Details(): ReactElement {
  const location = useLocation();
  const dispatch = useDispatch();

  const movie = useSelector(selectMovie);
  const loading = useSelector(selectMoviesLoading);

  useEffect(() => {
    const slug = location.pathname.substr(1);
    dispatch(moviesActions.fetchMovie(slug));

    return () => {
      dispatch(moviesActions.resetMovie());
    };
  }, [dispatch, location.pathname]);

  if (loading || !movie) return <Spinner />;

  return <MovieDetails movie={movie} />;
}

export default Details;
