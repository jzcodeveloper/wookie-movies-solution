import { ReactElement } from "react";
import { Movie } from "../../@types/wookie-movies";
import Grid from "@material-ui/core/Grid";
import MovieItem from "../movie-item";

interface Props {
  movies: Movie[];
}

function Movies({ movies }: Props): ReactElement {
  return (
    <Grid container spacing={1}>
      {movies.map((movie: Movie) => (
        <MovieItem key={movie.slug} movie={movie} />
      ))}
    </Grid>
  );
}

export default Movies;
