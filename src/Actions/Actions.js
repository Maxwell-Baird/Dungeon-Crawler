import React from "react";
import { Link } from "react-router-dom";
import "./Actions.css";
import { useEncounterState } from "../encounterState";

const Actions = () => {
  const { npc } = useEncounterState();
  if (npc !== null)
    return (
      <div className="Actions">
        {npc.options.map((option) => (
          <Link to={"encounter/" + option.type}>{option.name}</Link>
        ))}
        <button>Run Away</button>
      </div>
    );
  else
    return (
      // we are on the map screen, assumedly
      <div className="Actions">
        <Link to="/game/forest/encounter">Go to the forest</Link>
        <Link to="/game/caves/encounter">Go to the caves</Link>
        <Link to="/game/beach/encounter">Go to the beach</Link>
      </div>
    );
};

export default Actions;
