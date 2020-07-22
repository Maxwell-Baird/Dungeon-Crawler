import React from "react";
import { Link } from "react-router-dom";
import "./Actions.css";

const Actions = () => {
  return (
    <div className="Actions">
      <Link to="/game/forest/encounter">Go to the forest</Link>
      <Link to="/game/caves/encounter">Go to the caves</Link>
      <Link to="/game/beach/encounter">Go to the beach</Link>
    </div>
  );
};

export default Actions;
