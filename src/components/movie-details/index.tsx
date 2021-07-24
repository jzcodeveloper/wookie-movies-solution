import React, { ReactElement } from "react";
import { Movie } from "../../@types/wookie-movies";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Rating from "../rating";

interface Props {
  movie: Movie;
}

function MovieDetails({ movie }: Props): ReactElement {
  return (
    <Box style={{ background: `url(${movie.backdrop})` }}>
      <Box bgcolor="#000000AA" p={4}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Box>
              <img src={movie.poster} alt={movie.title} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <Box color="whitesmoke">
              <Box py={1}>
                <Typography variant="h4">{movie.title}</Typography>
                <Rating stars={5} max={10} value={movie.imdb_rating} />
              </Box>
              <Box py={1}>
                <Typography variant="h6">
                  {movie.released_on.substr(0, 4)}
                  {" | "}
                  {movie.length}
                  {" | "}
                  {movie.director}
                </Typography>
                <Typography variant="h6">
                  Cast: {movie.cast.join(", ")}
                </Typography>
              </Box>
              <Box py={1}>
                <Typography variant="h6">{movie.overview}</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default MovieDetails;
