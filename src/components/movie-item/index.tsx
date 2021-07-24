import { ReactElement } from "react";
import { Movie } from "../../@types/wookie-movies";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

interface Props {
  movie: Movie;
}

function MovieItem({ movie }: Props): ReactElement {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <CardActionArea component={Link} to={`/${movie.slug}`}>
        <Box position="relative">
          <img src={movie.poster} alt={movie.slug} height="450" />

          <Box
            position="absolute"
            bottom={5}
            left={0}
            p={2}
            width="100%"
            bgcolor="#00000099"
            color="white"
          >
            <Typography>{movie.title}</Typography>
          </Box>
        </Box>
      </CardActionArea>
    </Grid>
  );
}

export default MovieItem;
