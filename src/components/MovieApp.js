import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import MovieList from "./MovieList";

const defaultMovies = [
  { id: 1, movie: "Starwars", favorite: false },
  { id: 2, movie: "1917", favorite: true },
  { id: 3, movie: "Frozen II", favorite: false },
];

const MovieApp = () => {
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">MOVIES FROM 2019</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <Typography>My Movies</Typography>
          <MovieList movies={defaultMovies} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MovieApp;
