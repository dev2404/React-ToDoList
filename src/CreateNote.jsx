import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import "./CreateNote.css";

function CreateNote(props) {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const { value, name } = event.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    console.log(note);
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const expandIt = () => {
    setExpand(true);
  };
  const btoNormal = () => {
    setExpand(false);
  };
  return (
    <>
      <div className="main_note" onDoubleClick={btoNormal}>
        <form>
          {expand ? (
            <input
              type="text"
              value={note.title}
              onChange={InputEvent}
              name="title"
              placeholder="title"
              autoComplete="off"
            />
          ) : null}

          <textarea
            value={note.content}
            onChange={InputEvent}
            rows=""
            name="content"
            placeholder="Write a Note..."
            onClick={expandIt}
          ></textarea>
          {expand ? (
            <Button onClick={addEvent}>
              <AddCircleOutlineIcon className="plus_sign" color="red" />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
}

export default CreateNote;
