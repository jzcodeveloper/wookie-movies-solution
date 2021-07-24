import React, { ReactElement, useMemo } from "react";
import Grid from "@material-ui/core/Grid";
import Star from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";

interface Props {
  stars: number;
  max: number;
  value: number;
}

function Rating({ stars, max, value }: Props): ReactElement {
  const rating = useMemo(() => Math.floor((value * stars) / max), [
    stars,
    max,
    value,
  ]);

  return (
    <Grid container>
      {new Array(rating).fill(0).map((e: number, i: number) => (
        <Star key={i} />
      ))}
      {new Array(stars - rating).fill(0).map((e: number, i: number) => (
        <StarBorder key={i} />
      ))}
    </Grid>
  );
}

export default Rating;
