import React from "react";
import "./UserStats.css";
import { usePlayerState } from "../playerState";


const Encounters = () => {
//WIll need conditionally render this component based on wether the encounter is a battle or a friendly npc
  const player = usePlayerState();
  
  return (
    <section className='ecounters-section'>
        <div className='main-container'>
            <div className='encounter-div'>
                <p>Encounters</p>
            </div>
            <aside className='npc-text-box'>
                <p>Get in my belly, or i'll eat your brain</p>
            </aside>
            <div>
        </div>
            <button>
                Talk About Adventure
            </button>
            <button>
                Talk About Cats
            </button>
            <button>
                Leave
            </button>
        </div>
    </section>
  );
};

export default Encounters;