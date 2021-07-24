import React, { ReactElement } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Search from "../search";
import Background from "../../assets/images/header.jpg";

function Header(): ReactElement {
  return (
    <AppBar style={{ background: `url(${Background})` }}>
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h4">WOOKIE MOVIES</Typography>
          </Grid>
          <Grid item>
            <Search />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
