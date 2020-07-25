import React from "react";
import { useEncounterDispatch } from "../../encounterState";

const FightActions = () => {
  const { attack } = useEncounterDispatch();
  return (
    <div className="Actions">
      <button onClick={attack}>Attack</button>
    </div>
  );
};

export default FightActions;
