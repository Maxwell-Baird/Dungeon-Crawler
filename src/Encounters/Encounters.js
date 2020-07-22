import React from "react";
import './Encounters.css'
// import { usePlayerState } from "../playerState";


const Encounters = () => {
//WIll need conditionally render this component based on wether the encounter is a battle or a friendly npc
//DO we need the props to be able to use player actions?
//This is a basic layout, things can change
//   const player = usePlayerState();
  
  return (
    <section className='ecounters-section'>
            <div className='encounter-div'>
                <p>Encounter Made It</p>
            </div>
    </section>
  );
};

export default Encounters;