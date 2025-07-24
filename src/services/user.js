import apiClient from "./config";

// User dashboard stats (applications, simulations, etc.)
export const getDashboardStats = () => apiClient.get("/user/dashboard");

// Get user's internship applications
export const getApplications = () => apiClient.get("/user/applications");

// Get user's enrolled simulations
export const getSimulations = () => apiClient.get("/user/simulations");

// Get all certificates earned by the user
export const getCertificates = () => apiClient.get("/user/certificates");

// Update user profile (name, email, etc.)
export const updateProfile = (data) => apiClient.put("/user/profile", data);

// Change user password
export const changePassword = (data) => apiClient.put("/user/password", data);

// Update user notification preferences
export const updateNotificationPrefs = (prefs) => apiClient.put("/user/notifications", prefs);

export const searchSimulations = async (params) => {
  try {
    const res = await apiClient.get("/user/simulations/search", { params });
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

