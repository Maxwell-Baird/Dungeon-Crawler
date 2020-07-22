import React, {
  useReducer,
  createContext,
  useContext,
  useCallback,
} from "react";

import { reducer, EncounterActions } from "./reducer";

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

  if (dispatch === undefined) {
    throw new Error("useDispatch used outside of provider");
  }

  const getNewEncounter = useCallback(
    (area) => {
      dispatch({ type: EncounterActions.NEW_ENCOUNTER_LOAD });
    },
    [dispatch]
  );

  const completeEncounter = useCallback(
    (area) => {
      dispatch({ type: EncounterActions.ENCOUNTER_COMPLETE });
    },
    [dispatch]
  );

  return React.useMemo(() => ({ getNewEncounter, completeEncounter }), [
    getNewEncounter,
    completeEncounter,
  ]);
};
