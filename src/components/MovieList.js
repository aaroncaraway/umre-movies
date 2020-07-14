import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Movie from "./Movie";
// import { TodoContext } from "./context/TodoContext";

const MovieList = (props) => {
  // const todos = useContext(TodoContext);
  if (props.movies.length)
    return (
      <Paper>
        <List>
          {props.movies.map((movie, id) => (
            <>
              <Movie {...movie} key={movie.id} />
              {id < props.movies.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
};

export default MovieList;
