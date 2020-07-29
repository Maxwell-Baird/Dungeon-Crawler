export const PlayerActions = {
  INITIALIZE: "INITIALIZE",
  CHANGE_NAME: "CHANGE_NAME",
  HEAL: "HEAL",
  HURT: "HURT",
  INC_HP: "INC_HP",
  INC_ATK: "INC_ATK",
  INC_DEF: "INC_DEF",
  LOAD: "LOAD",
  CLEAR: "CLEAR",
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
    case PlayerActions.INC_HP:
      return {
        ...state,
        hp: Math.floor(
          (state.hp / state.maxhp) * Math.floor(state.maxhp * 1.05)
        ),
        maxhp: Math.floor(state.maxhp * 1.05),
      };
    case PlayerActions.INC_DEF:
      return {
        ...state,
        defense: Math.max(Math.floor(state.defense * 1.05), state.defense + 1),
      };
    case PlayerActions.INC_ATK:
      return {
        ...state,
        attack: Math.max(Math.floor(state.attack * 1.05), state.attack + 1),
      };
    case PlayerActions.LOAD:
      return action.playerData;
    case PlayerActions.CLEAR:
      return {
        name: "",
        hp: 0,
        maxhp: 0,
        attack: 0,
        defense: 0,
      };
    default:
      return state;
  }
};
