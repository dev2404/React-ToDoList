import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ListComp from "./ListComp";

function ToDoList() {
  const [item, setItem] = useState("");
  const [additem, setAddItem] = useState([]);

  const inputEvent = (event) => {
    setItem(event.target.value);
  };

  const listOfItems = () => {
    setAddItem((preValue) => {
      return [...preValue, item];
    });
    setItem("");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            value={item}
            placeholder="Enter Your work"
            onChange={inputEvent}
          />
          <Button className="newBtn" onClick={listOfItems}>
            <AddIcon />
          </Button>
          <br />
          <ol>
            {additem.map((val, index) => {
              return <ListComp key={index} text={val} />;
            })}
          </ol>
          <br />
        </div>
      </div>
    </>
  );
}

export default ToDoList;
