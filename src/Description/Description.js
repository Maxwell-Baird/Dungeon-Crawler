import React from "react";
import "./Description.css";
import { usePlayerState } from "../playerState";
import { useEncounterState } from "../encounterState";

const Description = () => {
  const player = usePlayerState();
  const { npc } = useEncounterState();
  let description = "";
  if (npc !== null) {
    description = npc.description;
  } else {
    // starting string, can be changed according to player's last location
    description = "You are in a grassy field. ";

    // array of arrays, first element of each subarray is a query into the player's stats,
    // second element is a bit of info to add to the player's description
    // ex: details[0] takes in the player's hp and maxhp and if the hp is less then half
    // of the maxhp, gives back a "you are hurt" message.
    const details = [
      [({ hp, maxhp }) => hp < maxhp / 2, "You are hurt. "],
      [({ attack }) => attack < 3, "You feel weak. "],
      [({ defense }) => defense < 3, "You feel defenseless. "],
      [({ name }) => !name, "You feel a loss of identity. "],
    ];

    // if the query for each element in the details array returns true,
    // add the relevant info to the description string. otherwise don't
    description += details
      .map(([query, info]) => (query(player) ? info : ""))
      .join("");
  }

  return <p className="Description">{description}</p>;
};

export default Description;
