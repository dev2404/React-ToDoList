import React from "react";
import { add, divide, multiply, subtract } from "./Calculator";

function App() {
  return (
    <>
      <ul>
        <li>{add(40, 4)}</li>
        <li>{divide(40, 4)}</li>
        <li>{multiply(40, 2)}</li>
        <li>{subtract(40, 2)}</li>
      </ul>
    </>
  );
}

export default App;
