import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default props => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h1" color="inherit">
        Short.ly
      </Typography>
    </Toolbar>
  </AppBar>
);
