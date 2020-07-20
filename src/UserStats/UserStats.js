import React from "react";
import { usePlayerState } from "../playerState";
import "./UserStats.css";

const UserStats = () => {
  const player = usePlayerState();
  return (
    <div>
      <div>Name: {player.name}</div>
      <div className="red">
        HP: {player.hp} / {player.maxhp}
      </div>
    </div>
  );
};

export default UserStats;
