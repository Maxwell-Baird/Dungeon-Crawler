import React, { useState } from "react";
import "./App.css";
import UserStats from "../UserStats/UserStats";
import { usePlayerDispatch } from "../playerState";

function App() {
  const { initialize, hurt, heal } = usePlayerDispatch();
  return (
    <div className="App">
      <UserStats />
      <button onClick={() => initialize("sbeven")}>Init Player</button>
      <button onClick={() => hurt(3)}>Hurt Player</button>
      <button onClick={() => heal(3)}>Heal Player</button>
    </div>
  );
}

export default App;
