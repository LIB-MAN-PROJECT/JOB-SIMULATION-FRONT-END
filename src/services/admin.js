import apiClient from "./config";
// FOR THE ADMIN
export const getDashboardStats = () => apiClient.get("/admin/dashboard");
export const listUsers = () => apiClient.get("/admin/users");
export const listSimulations = () => apiClient.get("/admin/simulations");
export const disableUser = (userId) => apiClient.delete(`/admin/users/${userId}`);
