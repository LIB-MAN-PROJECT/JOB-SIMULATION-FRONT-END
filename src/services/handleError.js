import { toast } from "react-toastify";

export const handleError = (error) => {
  const message =
    error?.response?.data?.message ||
    error?.message ||
    "Something went wrong. Please try again.";

  // Prevent showing the same toast multiple times
  toast.dismiss(); 
  toast.error(message, { autoClose: 4000, pauseOnHover: true });

  console.error("[API Error]:", error);
};
