import React from "react";
import { Link } from "react-router-dom";
import "./Actions.css";

const Actions = () => {
  return (
    <div className="Actions">
      <Link to="/places/forest">Go to the forest</Link>
      <Link to="/places/caves">Go to the caves</Link>
      <Link to="/places/beach">Go to the beach</Link>
    </div>
  );
};

export default Actions;
