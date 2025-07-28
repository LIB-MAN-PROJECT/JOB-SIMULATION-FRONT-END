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
//   // const token = localStorage.getItem("token"); // or "accessToken" — match your login key

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

export const enrollforSimulation = async (id) => {
  try {
    const res = await apiClient.post(`/user/simulation/${id}/enroll`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data.message;
  } catch (err) {
    handleError(err);
    throw err;
  }
};

export const fetchSimulationById = async (id) => {
  const res = await apiClient.get(`/user/view-simulations/${id}`); //  No need to pass headers manually
  return res.data;
};

// user profile
export const fetchUserStats = async () => {
  try {
    const res = await apiClient.get("/user/profile/stats");
    return res.data;
  } catch (err) {
    handleError(err);
  }
};
export const fetchUserProfiles = async () => {
  try {
    const res = await apiClient.get("/user/profile/stats");
    return res.data;
  } catch (err) {
    handleError(err);
  }
};
export const fetchUserEnrollments = async () => {
  try {
    const res = await apiClient.get("/user/profile/enrollments");
    return res.data;
  } catch (err) {
    handleError(err);
  }
};
export const fetchUserApplication = async () => {
  try {
    const res = await apiClient.get("/user/profile/stats");
    return res.data;
  } catch (err) {
    handleError(err);
  }
};
export const fetchUserCertificates = async () => {
  try {
    const res = await apiClient.get("/user/profile/certificates");
    return res.data;
  } catch (err) {
    handleError(err);
  }
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
export const submitTask = async (id, formData) => {
  try {
    const res = await apiClient.post(
      `/user/simulation/${id}/task/${id}/submit-task`,
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
