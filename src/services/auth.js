import apiClient from "./config";
// FOR THE AUTH

export const apiLogin = async (payload) =>
  apiClient.post("/auth/login", payload);

export const apiSignUp = async (payload) =>
  apiClient.post("/auth/signup", payload);
