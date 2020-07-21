import React from "react";
import "./App.css";
import UserStats from "../UserStats/UserStats";
import Map from "../Map/Map";
import Actions from "../Actions/Actions";
import Description from "../Description/Description";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/game">
          <UserStats />
          <Route path="/game/map" component={Map} />
          <aside>
            <Description />
            <Actions />
          </aside>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
