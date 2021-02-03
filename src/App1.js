import React from "react";
import "./App1.css";
import SlotM from "./SlotM";

const App1 = () => {
  return (
    <>
      <h1 className="heading_style">
        🎰 Welcome to{" "}
        <span style={{ fontWeight: "bold" }}> Slot Machine Game</span> 🎰
      </h1>
      <SlotM x="😄" y="😄" z="😄" />
      <SlotM x="🍕" y="🍕" z="🍕" />
      <SlotM x="🐕" y="🎅" z="🎅" />
      <SlotM x="🍎" y="🍌" z="🍎" />
    </>
  );
};

export default App1;
