export const EncounterActions = {
  NEW_ENCOUNTER_LOAD: "NEW_ENCOUNTER/LOAD",
  NEW_ENCOUNTER_RESPONSE: "NEW_ENCOUNTER/RESPONSE",
  ENCOUNTER_COMPLETE: "ENCOUNTER_COMPLETE",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case EncounterActions.NEW_ENCOUNTER_LOAD:
      return {
        isLoading: true,
        npc: null,
      };
    case EncounterActions.NEW_ENCOUNTER_RESPONSE:
      return {
        isLoading: false,
        npc: { ...action.npc, maxHealth: action.npc.health },
      };
    case EncounterActions.ENCOUNTER_COMPLETE:
      return {
        isLoading: false,
        npc: null,
      };
    default:
      return state;
  }
};
