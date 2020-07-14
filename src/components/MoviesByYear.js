import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
import Movie from "./Movie";
const MoviesByYear = () => {
  const [year, setYear] = useState("2019");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://raw.githubusercontent.com/aaroncaraway/data/master/${year}moviesALL.json`
      );
      console.log(response.data);
      setMovies(response.data);
    }
    getData();
  }, [year]);
  if (movies.length)
    return (
      <Paper>
        <List>
          {movies.map((movie, id) => (
            // <Movie {...movie} key={movie.id} />
            <Movie movie={movie.title} key={movie.id} />
          ))}
        </List>
      </Paper>
    );
  return null;
};

export default MoviesByYear;
