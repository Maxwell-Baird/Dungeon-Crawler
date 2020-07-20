import React, {
  useReducer,
  createContext,
  useContext,
  useCallback,
} from "react";

import { reducer, PlayerActions } from "./reducer";

const initialContext = {
  name: "",
  hp: 0,
  maxhp: 0,
  attack: 0,
  defense: 0,
};

const StateContext = createContext(initialContext);
const DispatchContext = createContext(undefined);

export const PlayerContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialContext);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const usePlayerState = () => useContext(StateContext);

export const usePlayerDispatch = () => {
  const dispatch = useContext(DispatchContext);

  if (dispatch === undefined) {
    throw new Error("useDispatch used outside of provider");
  }

  const initialize = useCallback(
    (name) => {
      dispatch({ type: PlayerActions.INITIALIZE, name });
    },
    [dispatch]
  );

  const changeName = useCallback(
    (name) => {
      dispatch({ type: PlayerActions.CHANGE_NAME, name });
    },
    [dispatch]
  );

  const heal = useCallback(
    (amount) => {
      dispatch({ type: PlayerActions.HEAL, hp: amount });
    },
    [dispatch]
  );

  const hurt = useCallback(
    (amount) => {
      dispatch({ type: PlayerActions.HURT, hp: amount });
    },
    [dispatch]
  );

  return React.useMemo(
    () => ({
      initialize,
      changeName,
      heal,
      hurt,
    }),
    [initialize, changeName, heal, hurt]
  );
};
