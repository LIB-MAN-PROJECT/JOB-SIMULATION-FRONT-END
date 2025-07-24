import apiClient from "./config";

// Get recruiter dashboard stats (e.g., total simulations, applicants, etc.)
export const getDashboardStats = () => apiClient.get("/recruiter/dashboard");

// Get all simulations posted by this recruiter
export const listSimulations = () => apiClient.get("/recruiter/simulations");

// Create a new job simulation
export const createSimulation = (data) => apiClient.post("/recruiter/simulations", data);

// Get all applicants to recruiter’s simulations or internships
export const listApplicants = () => apiClient.get("/recruiter/applicants");
