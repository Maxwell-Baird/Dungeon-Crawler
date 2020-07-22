import React from "react";
import "./Encounters.css";
import { useEncounterDispatch, useEncounterState } from "../encounterState";

const Encounters = ({ location }) => {
  const { npc, isLoading } = useEncounterState();
  const { getNewEncounter } = useEncounterDispatch();

  if (npc === null && !isLoading) getNewEncounter(location);

  return (
    <section className="encounters-section">
      {npc ? (
        <>
          <h1>{npc.name}</h1>
          <h3>
            {npc.health} / {npc.maxHealth} hp
          </h3>
        </>
      ) : (
        "Loading..."
      )}
    </section>
  );
};

export default Encounters;
