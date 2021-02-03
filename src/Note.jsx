import React from "react";
// import Button from "@material-ui/core/Button";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import "./Note.css";

function Note(props) {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <button onClick={deleteNote}>
          <DeleteOutlineIcon className="deleteicon" />
        </button>
      </div>
    </>
  );
}

export default Note;
