import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { apiLogin } from '../../services/auth';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import loginGraphic from '../../assets/experience.jpeg'; // Place a sleek image here
import Navbar from '../user/components/Navbar';
import axios from 'axios';

const LogIn = () => {
   const [userName, setUserName] =useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const isError = Object.keys(errors).length > 0;

  const onSubmit = async (data) => {
   const payload = {
      email,
      password,
      userName,
    };
    setIsSubmitting(true);
    try {
        const res = await axios.post(
        "https://job-simulation-backend-3e6w.onrender.com/api/auth/login",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
        localStorage.setItem("accesstoken", res.data.token);
         const userRole = res.data.user.role;
      toast.success(res.data.message || "Logged In Successfully!");
      
      
      if (userRole === "recruiter") {
        navigate("/recruiter");
      } else {
        navigate("/");
      }


    } catch (error) {
          toast.error(error?.message || "Failed. Try Again");
    } finally {
      setIsSubmitting(false);
    }
    };

  return (
    <section className="min-h-screen bg-[#f9f4ee] flex items-center justify-center relative overflow-hidden px-6 py-20">
      <Navbar/>
      {/* Glow + Overlay Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={loginGraphic}
          alt="Login Graphic"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/50 to-orange-500/40 mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl w-full max-w-3xl p-10 md:p-14"
      >
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Welcome <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-orange-500">Back</span>
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
           <div>
              <input
                type="text"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
        required
                className=" text-white w-full p-2 border border-white rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                // {...register("email", { required: "Email address required" })}
              />
              {errors?.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}
            </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className="text-right text-sm">
            <Link to="/forgot-password" className="text-orange-500 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isError || isSubmitting}
            className={`w-full py-3 rounded-lg text-white font-semibold text-lg transition-all ${
              isError
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600"
            }`}
          >
            {isSubmitting ? "Logging in..." : "Log In"}
          </motion.button>

          <p className="text-center text-sm text-gray-700 mt-4">
            Don’t have an account?{" "}
            <Link to="/sign-up" className="text-orange-500 font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </motion.div>
    </section>
  );
};

export default LogIn;
