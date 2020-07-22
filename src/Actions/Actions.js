import React from "react";
import { Link } from "react-router-dom";
import "./Actions.css";

const Actions = () => {
  return (
    <div className="Actions">
      <Link to="/places/forest/encounter">Go to the forest</Link>
      <Link to="/places/caves/encounter">Go to the caves</Link>
      <Link to="/places/beach/encounter">Go to the beach</Link>
    </div>
  );
};

export default Actions;
