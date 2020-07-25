import dotenv from "dotenv";
dotenv.config();

export const APP_URL = process.env.APP_URL;
export const API_URL = process.env.API_URL;
export const NODE_ENV = process.env.NODE_ENV;
export const PORT = process.env.PORT || 3000;
