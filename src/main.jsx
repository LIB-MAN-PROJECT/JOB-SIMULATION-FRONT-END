// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./contexts/AuthContext"; // Capital A
import { ToastContainer, Bounce } from 'react-toastify'

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
