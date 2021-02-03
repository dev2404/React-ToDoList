import React, { useState } from "react";

function App2() {
  let inicount = new Date().toLocaleTimeString();

  const [count, setcount] = useState(inicount);

  const IncNum = () => {
    setcount(new Date().toLocaleTimeString());
    //   count++;
    // console.log("clicked " + count++);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={IncNum}>Click Me</button>
    </div>
  );
}

export default App2;
