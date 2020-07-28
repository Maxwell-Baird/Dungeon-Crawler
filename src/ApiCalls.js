export const getNpcs = async () =>
  await (
    await fetch(
      (process.env.NODE_ENV === "production"
        ? "https://whispering-temple-46123.herokuapp.com/api/v1"
        : "http://localhost:8000/api/v1") + "/npcs?format=json"
    )
  ).json();
