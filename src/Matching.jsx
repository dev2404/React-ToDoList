import React from "react";

function Matching(props) {
  let { x, y, z } = props;
  console.log(props);
  return (
    <div>
      <>
        <h1>
          {x} {y} {z}
        </h1>
        <h1>This Is Matching</h1>
        <hr />
      </>
    </div>
  );
}

export default Matching;
