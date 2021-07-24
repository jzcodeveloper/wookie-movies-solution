import React, { useEffect, ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { MoviesByGenre } from "../../@types/wookie-movies";
import { moviesActions } from "../../redux/movies";
import {
  selectMoviesByGenre,
  selectMoviesLoading,
} from "../../redux/movies/selectors";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Movies from "../../components/movies";
import Spinner from "../../components/spinner";

function Home(): ReactElement {
  const dispatch = useDispatch();
  const location = useLocation();

  const movies = useSelector(selectMoviesByGenre);
  const loading = useSelector(selectMoviesLoading);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get("q") || "";
    dispatch(moviesActions.fetchMovies(search));
  }, [dispatch, location.search]);

  if (loading) return <Spinner />;

  return (
    <Box p={1}>
      {movies.map((movie: MoviesByGenre) => (
        <React.Fragment key={movie.genre}>
          <Box my={1}>
            <Typography variant="h4">{movie.genre}</Typography>
          </Box>
          <Box my={1}>
            <Movies movies={movie.movies} />
          </Box>
        </React.Fragment>
      ))}
    </Box>
  );
}

export default Home;
