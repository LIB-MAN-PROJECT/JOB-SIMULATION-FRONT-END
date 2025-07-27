import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";

import signUpImage from "../../assets/experience.jpg";
import Navbar from "../user/components/Navbar";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [role, setRole] = useState("student");
  const [companyAction, setCompanyAction] = useState(null);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName,
      email: data.email,
      password: data.password,
      role,
      ...(role === "recruiter" && companyAction === "join" && {
        companyCustomId: data.companyCustomId,
        companyCode: data.companyCode,
      }),
      ...(role === "recruiter" && companyAction === "create" && {
        // companyCustomId: data.companyCustomId,
        companyCode: data.companyCode,
        companyName: data.companyName,
        companyEmail: data.companyEmail,
        description: data.description,
        website: data.website,
      }),
    };

    try {
      setIsSubmitting(true);
      const res = await axios.post(
        "https://job-simulation-backend-3e6w.onrender.com/api/auth/signup",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("User Registered Successfully");
      navigate("/login");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Registration failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const signUp = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("firstName", firstName);
    // formData.append("lastName", lastName);
    // formData.append("userName", userName);
    // formData.append("password", userName);
    // formData.append("email", email);
    // formData.append("companyName", companyName);
    // formData.append("companyCode", companyCode);
    // formData.append("logo", logo);
    // formData.append("description", description);
    // formData.append("website", website);
    // formData.append("companyEmail", companyEmail);
    // formData.append("adom", adom);
    // formData.append("role", role);
      const payload = {
       firstName,
     lastName,
     userName,
      email,
      password,
      companyName,
      companyCode,
      description,
      website,
      companyCustomId,
      companyEmail,
      logo,
      logoPublicId,
      

      role
    // ...(state === "recruiter" && { companyId: data.companyId }),
    };
    try {
      const response = await axios.post(
        "https://job-simulation-backend-3e6w.onrender.com/api/auth/signup",
        payload,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log(response);
      localStorage.setItem("token", response.data.data.token);
      // setRole(response.data.user.role);
      toast.success("User Registered Successfully");
      // role === "student" ? navigate("/") : ;
      if (role === "student") {
        navigate("/");
      } else {
        navigate("/recru");
      }
    } catch (error) {
      console.log(error);
      // toast.error(error.response.data.message);
    }
  };
  return (
    <section className="min-h-screen bg-[#f9f4ee] py-20 px-6">
      <Navbar />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden md:block"
        >
          <img
            src={signUpImage}
            alt="Sign Up"
            className="w-full h-auto rounded-xl shadow-lg"
          />
          {/* <div >
              <input  type="checkbox"
              name="role"
              checked={role}
              value={role}
               onChange={() => setRole(!role)}
            />
            </div> */}
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Create Your Account
          </h2>

          {/* Role Toggle */}
          <div className="flex justify-center gap-4">
            {["student", "recruiter"].map((r) => (
              <button
                key={r}
                type="button"
                className={`px-4 py-2 rounded-full font-medium text-sm ${
                  role === r
                    ? "bg-gradient-to-r from-teal-500 to-teal-800 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
                onClick={() => {
                  setRole(r);
                  setCompanyAction(null);
                }}
              >
                {r.charAt(0).toUpperCase() + r.slice(1)}
              </button>
            ))}
          </div> 

          {/* Base Fields */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              {...register("firstName", { required: "First name is required" })}
              placeholder="First Name"
              className="w-full border p-2 rounded"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}

            <input
              {...register("lastName", { required: "Last name is required" })}
              placeholder="Last Name"
              className="w-full border p-2 rounded"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}

            <input
              {...register("userName", { required: "Username is required" })}
              placeholder="Username"
              className="w-full border p-2 rounded"
            />
            {errors.userName && (
              <p className="text-red-500 text-sm">{errors.userName.message}</p>
            )}

            <input
              {...register("email", { required: "Email is required" })}
              placeholder="Email"
              className="w-full border p-2 rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <input
            {...register("password", { required: "Password is required" })}
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          {/* Recruiter-specific fields */}
          {role === "recruiter" && (
            <div className="space-y-4">
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setCompanyAction("join")}
                  className={`w-1/2 py-2 rounded text-white ${
                    companyAction === "join"
                      ? "bg-teal-600"
                      : "bg-teal-400 hover:bg-teal-600"
                  }`}
                >
                  Join Company
                </button>
                <button
                  type="button"
                  onClick={() => setCompanyAction("create")}
                  className={`w-1/2 py-2 rounded text-white ${
                    companyAction === "create"
                      ? "bg-orange-600"
                      : "bg-orange-400 hover:bg-orange-600"
                  }`}
                >
                  Create Company
                </button>
              </div>

              {/* Join Company */}
              {companyAction === "join" && (
                <>
                  <input
                    {...register("companyCustomId", {
                      required: "Company ID is required",
                    })}
                    placeholder="Company Custom ID"
                    className="w-full border p-2 rounded"
                  />
                  <input
                    {...register("companyCode", {
                      required: "Company Code is required",
                    })}
                    placeholder="Company Code"
                    className="w-full border p-2 rounded"
                  />
                </>
              )}

              {/* Create Company */}
              {companyAction === "create" && (
                <>
                  <input
                    {...register("companyCustomId", {
                
                    })}
                    placeholder="Company Custom ID"
                    className="w-full border p-2 rounded"
                  />
                  <input
                    {...register("companyCode", {
                      required: "Company Code is required",
                    })}
                    placeholder="Company Code"
                    className="w-full border p-2 rounded"
                  />
                  <input
                    {...register("companyName", {
                      required: "Company Name is required",
                    })}
                    placeholder="Company Name"
                    className="w-full border p-2 rounded"
                  />
                  <input
                    {...register("companyEmail")}
                    placeholder="Company Email"
                    className="w-full border p-2 rounded"
                  />
                  <input
                    {...register("description")}
                    placeholder="Description"
                    className="w-full border p-2 rounded"
                  />
                  <input
                    {...register("website")}
                    placeholder="Website"
                    className="w-full border p-2 rounded"
                  />
                </>
              )}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-orange-400 to-orange-800 text-white py-3 rounded font-semibold"
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



// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useAuth } from "../../services/useAuth";
// // import { useAuth } from "../../../services/useAuth";

// const SignUp = () => {
//   const [role, setRole] = useState("student");
//   const [companyAction, setCompanyAction] = useState("join");
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const payload = {
//       firstName: data.firstName,
//       lastName: data.lastName,
//       userName: data.userName,
//       email: data.email,
//       password: data.password,
//       role,
//     };

//     if (role === "recruiter") {
//       if (companyAction === "join") {
//         payload.companyCustomId = data.companyCustomId;
//         payload.companyCode = data.companyCode;
//       } else if (companyAction === "create") {
//         payload.companyName = data.companyName;
//         payload.companyEmail = data.companyEmail;
//         payload.companyCode = data.companyCode;
//         payload.description = data.description;
//         payload.website = data.website;
//         payload.companyCustomId = data.companyCustomId;
//       }
//     }

//     try {
//       const response = await axios.post(
//         "https://job-simulation-backend-3e6w.onrender.com/api/auth/register",
//         payload
//       );
//       toast.success("Registration successful!");

//       const token = response.data.token;
//       localStorage.setItem("token", token);
//       login(token);
//       navigate("/");
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message || "Registration failed. Please try again."
//       );
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="w-full max-w-lg bg-white p-8 rounded shadow-md"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

//         {/* Role Selection */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2">Role:</label>
//           <select
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             className="w-full p-2 border rounded"
//           >
//             <option value="student">Student</option>
//             <option value="recruiter">Recruiter</option>
//           </select>
//         </div>

//         {/* Common Fields */}
//         <input
//           {...register("firstName", { required: true })}
//           placeholder="First Name"
//           className="w-full mb-3 p-2 border rounded"
//         />
//         {errors.firstName && <p className="text-red-500 text-sm">First name is required</p>}

//         <input
//           {...register("lastName", { required: true })}
//           placeholder="Last Name"
//           className="w-full mb-3 p-2 border rounded"
//         />
//         {errors.lastName && <p className="text-red-500 text-sm">Last name is required</p>}

//         <input
//           {...register("userName", { required: true })}
//           placeholder="Username"
//           className="w-full mb-3 p-2 border rounded"
//         />
//         {errors.userName && <p className="text-red-500 text-sm">Username is required</p>}

//         <input
//           {...register("email", { required: true })}
//           placeholder="Email"
//           type="email"
//           className="w-full mb-3 p-2 border rounded"
//         />
//         {errors.email && <p className="text-red-500 text-sm">Email is required</p>}

//         <input
//           {...register("password", { required: true })}
//           placeholder="Password"
//           type="password"
//           className="w-full mb-3 p-2 border rounded"
//         />
//         {errors.password && <p className="text-red-500 text-sm">Password is required</p>}

//         {/* Recruiter-specific fields */}
//         {role === "recruiter" && (
//           <>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-bold mb-2">
//                 Company Action:
//               </label>
//               <select
//                 value={companyAction}
//                 onChange={(e) => setCompanyAction(e.target.value)}
//                 className="w-full p-2 border rounded"
//               >
//                 <option value="join">Join Existing Company</option>
//                 <option value="create">Create New Company</option>
//               </select>
//             </div>

//             <input
//               {...register("companyCustomId", { required: true })}
//               placeholder="Company Custom ID"
//               className="w-full mb-3 p-2 border rounded"
//             />
//             {errors.companyCustomId && (
//               <p className="text-red-500 text-sm">Company ID is required</p>
//             )}

//             <input
//               {...register("companyCode", { required: true })}
//               placeholder="Company Code"
//               className="w-full mb-3 p-2 border rounded"
//             />
//             {errors.companyCode && (
//               <p className="text-red-500 text-sm">Company Code is required</p>
//             )}

//             {companyAction === "create" && (
//               <>
//                 <input
//                   {...register("companyName", { required: true })}
//                   placeholder="Company Name"
//                   className="w-full mb-3 p-2 border rounded"
//                 />
//                 {errors.companyName && (
//                   <p className="text-red-500 text-sm">Company name is required</p>
//                 )}

//                 <input
//                   {...register("companyEmail", { required: true })}
//                   placeholder="Company Email"
//                   type="email"
//                   className="w-full mb-3 p-2 border rounded"
//                 />
//                 {errors.companyEmail && (
//                   <p className="text-red-500 text-sm">Company email is required</p>
//                 )}

//                 <input
//                   {...register("description")}
//                   placeholder="Company Description"
//                   className="w-full mb-3 p-2 border rounded"
//                 />

//                 <input
//                   {...register("website")}
//                   placeholder="Company Website"
//                   className="w-full mb-3 p-2 border rounded"
//                 />
//               </>
//             )}
//           </>
//         )}

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition"
//         >
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;

