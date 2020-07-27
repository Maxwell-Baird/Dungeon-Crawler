import React, {
  useReducer,
  createContext,
  useContext,
  useCallback,
} from "react";

import { reducer, EncounterActions } from "./reducer";
import { usePlayerState, usePlayerDispatch } from "../playerState";

const initialContext = {
  isLoading: false,
  npc: null,
};

const StateContext = createContext(initialContext);
const DispatchContext = createContext(undefined);

export const EncounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialContext);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useEncounterState = () => useContext(StateContext);

export const useEncounterDispatch = () => {
  const dispatch = useContext(DispatchContext);

  const playerState = usePlayerState();
  const playerDispatch = usePlayerDispatch();
  const npcState = useEncounterState();

  if (dispatch === undefined) {
    throw new Error("useDispatch used outside of provider");
  }

  const getNewEncounter = useCallback(
    async (area) => {
      dispatch({ type: EncounterActions.NEW_ENCOUNTER_LOAD });

      const allNpcs = await (
        await fetch(process.env.REACT_APP_API_URL + "/npcs")
      ).json();

      const locationNpcs = allNpcs.filter(
        (npc) => npc.location.toLowerCase() === area
      );

      dispatch({
        type: EncounterActions.NEW_ENCOUNTER_RESPONSE,
        npc: locationNpcs[Math.floor(Math.random() * locationNpcs.length)],
      });
    },
    [dispatch]
  );

  const completeEncounter = useCallback(
    (area) => {
      dispatch({ type: EncounterActions.ENCOUNTER_COMPLETE });
    },
    [dispatch]
  );

  const attack = useCallback(() => {
    if (Math.random() < 0.9) {
      dispatch({
        type: EncounterActions.HURT,
        hp:
          Math.random() < 0.05
            ? Math.floor(playerState.attack * 1.5)
            : playerState.attack,
      });

      if (npcState.npc.health <= playerState.attack) {
        playerDispatch.win();
        dispatch({ type: EncounterActions.WIN });
      }
    }

    const def = playerState.defense;
    const defenseMath = Math.min(
      2.5 * ((2 * Math.log(2 * def + 1)) / (def + 1)),
      1
    ); // https://www.desmos.com/calculator/t6g3eenojj

    if (Math.random() < defenseMath) playerDispatch.hurt(3);
  }, [dispatch, playerDispatch, playerState, npcState.npc]);

  return React.useMemo(() => ({ getNewEncounter, completeEncounter, attack }), [
    getNewEncounter,
    completeEncounter,
    attack,
  ]);
};
