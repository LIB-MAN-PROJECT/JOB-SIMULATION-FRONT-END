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



// export const fetchSimulationById = async (id) => {
//   // const token = localStorage.getItem("token"); // or "token" — match your login key

//   // if (!token) {
//   //   throw new Error("No token found. Please login first.");
//   // }

//   const res = await apiClient.get(`/user/view-simulations/${id}`, {
//     // headers: {
//     //   Authorization: `Bearer ${token}`,
//     // },
//   });

//   return res.data;
// };

// /services/jobs.js



export const fetchSimulationById = async (id) => {
  const res = await apiClient.get(`/user/view-simulations/${id}`); // ✅ No need to pass headers manually
  return res.data;
};


// --- Internships ---
export const fetchAllInternships = async () => {
  try {
    const res = await apiClient.get("/user/view-all-internships");
    return res.data;
  } catch (err) {
    handleError(err);
  }
};
export const fetchInternshipById = async (id) => {
  try {
    const res = await apiClient.get(`/user/view-internships/${id}`);
    return res.data.data;
  } catch (err) {
    handleError(err);
    return null;
  }
};
export const searchInternships = async (filters) => {
  try {
    const query = new URLSearchParams(filters).toString();
    const res = await apiClient.get(`/user/internships/search?${query}`);
    return res.data;
  } catch (err) {
    handleError(err);
    throw err;
  }
};
export const fetchFilteredInternships = async (filters) => {
  try {
    const queryParams = new URLSearchParams(filters).toString();
    const res = await apiClient.get(`/user/internships/search?${queryParams}`);
    return res.data;
  } catch (err) {
    handleError(err);
    throw err;
  }
};

// export const applyToInternship = async (id) => {
//   try {
//     const res = await apiClient.post(`/user/view-internships/${id}/apply`);
//     return res.message;
//   } catch (err) {
//     handleError(err);
//     throw err;
//   }
// };
export const applyToInternship = async (id, formData) => {
  try {
    const res = await apiClient.post(
      `/user/view-internships/${id}/apply`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res.data.message;
  } catch (err) {
    handleError(err);
    throw err;
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
