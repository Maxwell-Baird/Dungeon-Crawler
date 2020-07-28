import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Map from "../Map/Map";

import { usePlayerDispatch } from "../playerState";

const Login = () => {
  const [name, setName] = useState("");
  const { initialize } = usePlayerDispatch();

  const onChange = (e) => {
    setName(e.target.value);
  };

  const onSubmit = () => {
    if (name.length > 0) initialize(name);
  };

  return (
    <section className="loginSection">
      <h1 className="title">Untitled Dungeon Crawler</h1>
      <input
        type="text"
        className="heroName"
        placeholder="Input Hero Name"
        value={name}
        onChange={onChange}
      />
      <Map />
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
