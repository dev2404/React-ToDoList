import React from "react";

const NotMatching = (props) => {
  let { x, y, z } = props;

  return (
    <div>
      <>
        <h1>
          {x} {y} {z}
        </h1>
        <h1>This Is Not Matching</h1>
        <hr />
      </>
    </div>
  );
};

export default NotMatching;
