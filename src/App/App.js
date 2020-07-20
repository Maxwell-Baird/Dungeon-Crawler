import React from "react";
import "./App.css";
import UserStats from "../UserStats/UserStats";
import Map from "../Map/Map";
import Actions from "../Actions/Actions";
import Description from "../Description/Description";

function App() {
  return (
    <div className="App">
      <UserStats />
      <Map />
      <aside>
        <Description />
        <Actions />
      </aside>
    </div>
  );
}

export default App;
