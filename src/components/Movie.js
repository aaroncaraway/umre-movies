import React, { useContext, memo } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import useToggle from "../hooks/useToggleState";
// import EditTodoForm from "./EditTodoForm";
// import { DispatchContext } from "./context/TodoContext";

const Movie = ({ id, movie, favorite }) => {
  //   const dispatch = useContext(DispatchContext);
  const [isEditing, toggle] = useToggle(false);
  return (
    <ListItem style={{ height: "64px" }}>
      <>
        <Checkbox
          tabIndex={-1}
          checked={favorite}
          //   onClick={() => dispatch({ type: "TOGGLE", id: id })}
        />
        <ListItemText
          style={{ textDecoration: favorite ? "line-through" : "none" }}
        >
          {movie}
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Delete"
            // onClick={() => dispatch({ type: "REMOVE", id: id })}
          ></IconButton>
        </ListItemSecondaryAction>
      </>
    </ListItem>
  );
};

export default memo(Movie);
