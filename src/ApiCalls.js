export const getNpcs = async () => await (
  await fetch(process.env.REACT_APP_API_URL + "/npcs")
).json();
