import React from "react";
import { useEncounterDispatch, useEncounterState } from "../../encounterState";
import { Redirect } from "react-router";

const FightActions = () => {
  const { attack } = useEncounterDispatch();
  const { npc } = useEncounterState();

  if (npc === null) return <Redirect to="/game/map" />;

  return (
    <div className="Actions">
      <button onClick={attack}>Attack</button>
    </div>
  );
};

export default FightActions;
