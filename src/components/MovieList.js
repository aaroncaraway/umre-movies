import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
// import Todo from "./Todo";
// import { TodoContext } from "./context/TodoContext";

const MovieList = (props) => {
  // const todos = useContext(TodoContext);
  if (props.movies.length)
    return (
      <Paper>
        Movie List
        <List>
          {props.movies.map((movie, id) => (
            <>
              {movie.movie}
              {/* <Todo {...todo} key={todo.id} /> */}
              {id < props.movies.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
};

export default MovieList;
