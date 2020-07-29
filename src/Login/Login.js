import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { mapImage } from "../Map/MapImage";
import "./Login.css";
import Map from "../Map/Map";

import { usePlayerDispatch, usePlayerState } from "../playerState";

const Login = () => {
  const [name, setName] = useState("");
  const playerName = usePlayerState().name;
  const { initialize, loadFromLS } = usePlayerDispatch();

  useEffect(loadFromLS, []);

  const onChange = (e) => {
    setName(e.target.value);
  };

  const onSubmit = () => {
    if (name.length > 0) initialize(name);
  };

  return playerName ? (
    <Redirect to="/game/map" />
  ) : (
    <section className="loginSection">
      <h1 className="title">Untitled Dungeon Crawler</h1>
      <input
        type="text"
        className="heroName"
        placeholder="Input Hero Name"
        value={name}
        onChange={onChange}
      />
      <Link to="/game/map">
        <button
          type="submit"
          disabled={!name}
          className="login"
          onClick={onSubmit}
        >
          Start Adventure
        </button>
      </Link>
    </section>
  );
};

export default Login;
