import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import signUpImage from "../../assets/experience.jpg"; // Add a matching image here

import { apiSignUp } from "../../services/auth";
import Navbar from "../user/components/Navbar";
import axios from "axios";

const SignUp = () => {
    const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [companyName, setCompanyName] = useState("");
  const [companyCode, setCompanyCode] = useState("");
  const [logo, setLogo] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ shouldUnregister: true });

  const [state, setState] = useState("student");
  const [companyAction, setCompanyAction] = useState(null);

  const onSubmit = async (data) => {
    const payload = {
       firstName,
     lastName,
     userName,
      email,
      password,
      role: state,
      ...(state === "recruiter" && { companyId: data.companyId }),
    };

    setIsSubmitting(true);
    try {
       const res = await axios.post(
        "https://job-simulation-backend-3e6w.onrender.com/api/auth/signup",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
    toast.success("User Registered Successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error(error?.message || "Error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#f9f4ee] py-20 px-6">
      <Navbar/>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Graphic */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hidden md:block"
        >
          <img
            src={signUpImage}
            alt="Sign Up Graphic"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Form Section */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Create Your Account
          </h2>

          <div className="flex justify-center gap-4">
            {["student", "recruiter"].map((role) => (
              <button
                type="button"
                key={role}
                className={`px-4 py-2 rounded-full font-medium text-sm ${
                  state === role
                    ? "bg-gradient-to-r from-teal-500 to-orange-500 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
                onClick={() => setState(role)}
              >
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </button>
            ))}
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">First Name</label>
              <input
                type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
                className="w-full border p-2 rounded"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName.message}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">Last Name</label>
              <input
              type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
                className="w-full border p-2 rounded"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName.message}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium">User Name</label>
              <input
               type="text"
          name="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
                className="w-full border p-2 rounded"
              />
              {errors.userName && (
                <p className="text-red-500 text-sm">{errors.userName.message}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
             
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
              className="w-full border p-2 rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
              className="w-full border p-2 rounded"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Recruiter Extra Fields */}
          {state === "recruiter" && (
            <div className="space-y-4">
              <div className="flex gap-4">
                <button
                  type="button"
                  className="w-1/2 bg-teal-500 text-white py-2 rounded"
                  onClick={() => setCompanyAction("join")}
                >
                  Join Company
                </button>
                <button
                  type="button"
                  className="w-1/2 bg-orange-500 text-white py-2 rounded"
                  onClick={() => setCompanyAction("create")}
                >
                  Create Company
                </button>
              </div>

              {companyAction === "join" && (
                <>
                  <input
                    type="text"
                name="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
                    placeholder="Company Name"
                    className="w-full border p-2 rounded"
                  />
                  <input
                    type="text"
                name="companyCode"
                value={companyCode}
                onChange={(e) => setCompanyCode(e.target.value)}
                required
                    placeholder="Company Code"
                    className="w-full border p-2 rounded"
                  />
                </>
              )}

              {companyAction === "create" && (
                <>
                  <input
                    type="file"
                    className="w-full border p-2 rounded"
                  />
                  <input
                    type="text"
                  name="companyName"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                    placeholder="Company Name"
                    className="w-full border p-2 rounded"
                  />
                  {/* <input
                    {...register("companyEmail")}
                    placeholder="Company Email"
                    className="w-full border p-2 rounded"
                  /> */}
                  <input
                    type="text"
                  name="companyCode"
                  value={companyCode}
                  onChange={(e) => setCompanyCode(e.target.value)}
                  required
                    placeholder="Company Code"
                    className="w-full border p-2 rounded"
                  />
                  <input
                     type="text"
                  name="email"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    className="w-full border p-2 rounded"
                  />
                  <input
                  type="text"
                  name="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  required
                    placeholder="Website"
                    className="w-full border p-2 rounded"
                  />
                </>
              )}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white py-3 rounded font-semibold transition"
          >
            {isSubmitting ? "Submitting..." : "Sign Up"}
          </button>

          <p className="text-center text-sm text-gray-500">
            Already a member?{" "}
            <Link to="/login" className="text-orange-500 hover:underline">
              Login
            </Link>
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default SignUp;
