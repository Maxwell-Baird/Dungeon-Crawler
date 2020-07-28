import React from "react";
import { usePlayerState, usePlayerDispatch } from "../playerState";
import "./UserStats.css";

const UserStats = () => {
  const player = usePlayerState();
  const { clearLSData } = usePlayerDispatch();

  const showAlert = () => {
    window.confirm(
      "WARNING: This will clear ALL your save data and restart your game! Are you sure you wish to continue?"
    ) && clearLSData();
  };

  return (
    <div className="User-Stats">
      <span>Name: {player.name}</span>
      <span className="red">
        HP: {player.hp} / {player.maxhp}
      </span>
      <span>Atk: {player.attack}</span>
      <span>Def: {player.defense}</span>
      <button className="warning" onClick={showAlert}>
        Clear Save & Quit
      </button>
    </div>
  );
};

export default UserStats;
