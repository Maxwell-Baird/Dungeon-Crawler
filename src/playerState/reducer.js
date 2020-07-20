export const PlayerActions = {
  INITIALIZE: "INITIALIZE",
  CHANGE_NAME: "CHANGE_NAME",
  HEAL: "HEAL",
  HURT: "HURT",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case PlayerActions.INITIALIZE:
      return {
        name: action.name,
        hp: 20,
        maxhp: 20,
        attack: 3,
        defense: 3,
      };
    case PlayerActions.CHANGE_NAME:
      return {
        ...state,
        name: action.name,
      };
    case PlayerActions.HEAL:
      return {
        ...state,
        hp: Math.min(state.maxhp, state.hp + action.hp),
      };
    case PlayerActions.HURT:
      // todo: add in death code
      return {
        ...state,
        hp: Math.max(0, state.hp - action.hp),
      };
    default:
      return state;
  }
};
