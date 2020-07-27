import React from "react";
import "./App.css";
import UserStats from "../UserStats/UserStats";
import Map from "../Map/Map";
import Login from "../Login/Login";
import Actions from "../Actions/Actions";
import Description from "../Description/Description";
import Encounters from "../Encounters/Encounters";
import FightActions from "../Fight/FightActions/FightActions";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/game">
          <UserStats />
          <Route
            path="/game/map"
            render={() => (
              <>
                <Map />
                <aside>
                  <Description />
                  <Actions />
                </aside>
              </>
            )}
          />
          <Route
            exact
            path="/game/:location/encounter/:action"
            render={({
              match: {
                params: { location, action },
              },
            }) => (
              <>
                <Encounters location={location} />
                <aside>
                  {action === "aggressive" ? (
                    <>
                      <FightActions />
                    </>
                  ) : (
                    <>
                      <p>
                        This is not implemented yet. Go{" "}
                        <Link to="/game/map">back</Link>
                      </p>
                    </>
                  )}
                </aside>
              </>
            )}
          />
          <Route
            exact
            path="/game/:location/encounter"
            render={({
              match: {
                params: { location },
              },
            }) => (
              <>
                <Encounters location={location} />
                <aside>
                  <Description />
                  <Actions />
                </aside>
              </>
            )}
          />
        </Route>
        <Route exact="/" component={Login}></Route>
      </Switch>
    </div>
  );
}

export default App;
