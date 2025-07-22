import apiClient from "./config";
import { handleError } from "./handleError";

// --- Simulations ---
export const fetchAllSimulations = async () => {
  try {
    const res = await apiClient.get("/user/view-all-simulations");
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

export const fetchSimulationById = async (id) => {
  try {
    const res = await apiClient.get(`/user/view-simulations/${id}`);
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

// --- Internships ---
export const fetchAllInternships = async () => {
  try {
    const res = await apiClient.get("/internships");
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

// --- Certificates ---
export const fetchUserCertificates = async () => {
  try {
    const res = await apiClient.get("/certificates/me");
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

// --- User Profile ---
export const fetchUserProfile = async () => {
  try {
    const res = await apiClient.get("/auth/profile");
    return res.data;
  } catch (err) {
    handleError(err);
  }
};
