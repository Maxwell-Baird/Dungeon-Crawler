import React from "react";
import { usePlayerState } from "../playerState";
import "./UserStats.css";

const UserStats = () => {
  const player = usePlayerState();
  return (
    <div className="User-Stats">
      <span>Name: {player.name}</span>
      <span className="red">
        HP: {player.hp} / {player.maxhp}
      </span>
      <span>Atk: {player.attack}</span>
      <span>Def: {player.defense}</span>
    </div>
  );
};

export default UserStats;
