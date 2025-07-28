import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import loginGraphic from "../../assets/experience.jpeg";
import { useAuth } from "../../services/useAuth";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const user = useAuth();
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    const payload = { email, password, userName };

    try {
      setIsSubmitting(true);
      const res = await axios.post(
        "https://job-simulation-backend-3e6w.onrender.com/api/auth/login",
        payload
      );
      console.log("Login Response:", res.data);
      const token = res.data.token;
      toast.success("Login successful!");
      localStorage.setItem("token", token);
      login(token);

      if (user) {
        navigate("/");
      }
      // const redirectPath = location.state?.from || "/";
      // navigate(redirectPath, { replace: true });
    } catch (err) {
      toast.error("Login failed. Please check credentials.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#f9f4ee] flex items-center justify-center px-6 py-20 relative">
      {/* <Navbar /> */}
      <div className="absolute inset-0 z-0">
        <img
          src={loginGraphic}
          alt="Login"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/50 to-orange-500/40 mix-blend-overlay"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl w-full max-w-3xl p-10 md:p-14"
      >
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Welcome{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-700">
            Back
          </span>
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full p-3 border rounded"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded"
            required
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            className="w-full bg-gradient-to-r from-teal-500 to-teal-700 py-3 text-white font-semibold rounded"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Log In"}
          </motion.button>
        </form>

        {/* Sign Up link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/sign-up"
            className="text-teal-600 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
       <p className="mt-6 text-center text-sm text-gray-600">
          Go back to the {" "}
          <Link
            to="/"
            className="text-teal-600 font-semibold hover:underline"
          >
            Homepage
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default LogIn;
