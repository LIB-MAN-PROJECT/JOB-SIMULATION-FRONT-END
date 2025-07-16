import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { apiSignUp } from "../../services/auth";
import { Link } from "react-router";
// import { apiSignUp } from "../../services/auth.js";

const SignUp = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ shouldUnregister: true });

  const [state, setState] = useState("student");

  const onSubmit = async (data) => {
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      role: state,
      ...(state === "recruiter" && { companyId: data.companyId }),
    };

    setIsSubmitting(true);
    try {
      const res = await apiSignUp(payload);
      toast.success("User Registered Successfully");
      navigate("/login");
    } catch (error) {
      toast.error(error?.message || "Error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const [companyAction,setCompanyAction] =useState(null);

  const selectedRole = state;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 bg-white shadow rounded space-y-4"
    >
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>

      <div className="flex gap-4 mb-4">
        {["student", "recruiter"].map((role) => (
          <button
            type="button"
            key={role}
            className={`px-4 py-2 rounded ${
              state === role
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setState(role)}
          >
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        ))}
      </div>

      {/* {state === "student" ? ( */}
        <div>
          <label className="block text-sm font-medium">First Name <span className="text-red-500 text-lg">*</span></label>
          <input
            {...register("firstName", { required: "First name is required" })}
            className="w-full border p-2 rounded"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
        </div>
       {/* ) : null} */}

      {/* {state === "student" ? ( */}
        <div>
          <label className="block text-sm font-medium">Last Name</label>
          <input
            {...register("lastName", { required: "Last name is required" })}
            className="w-full border p-2 rounded"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}
        </div>
       {/* ) : null} */}
      
        <div>
          <label className="block text-sm font-medium">User Name <span className="text-red-500 text-lg">*</span></label>
          <input
            {...register("UserName", { required: "User name is required" })}
            className="w-full border p-2 rounded"
          />
          {errors.userName && (
            <p className="text-red-500 text-sm">{errors.UserName.message}</p>
          )}
        </div>
      


      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
          className="w-full border p-2 rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Password</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Min 6 characters" },
          })}
          className="w-full border p-2 rounded"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

        {/* Selection buttons */}
      {state === "recruiter" && (
        <div className="flex gap-4 mt-4">
          <button
          type="button"
          className="w-1/2 bg-[#1a4edc] text-white py-2 rounded hover:bg-[#394a64]"
          onClick={() => setCompanyAction("join")}
          >Join Existing Company</button>

          <button
          type="button"
          className="w-1/2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          onClick={() => setCompanyAction("create")}
          >Create New Company</button>
        </div>
      )}

      {companyAction === "join" && (
          <div>
            {/* Joining Existing Company */}
           {state === "recruiter" && (
             <div>
               <label className="block text-sm font-medium">Company Name</label>
               <input
                 type="text"
                 placeholder="Name of Company"
                 {...register("companyname", {
                   required: "CompanyName is required",
                 })}
                 className="w-full border p-2 rounded"
               />
               {errors.companyname && (
                 <p className="text-red-500 text-sm">{errors.companyname.message}</p>
               )}
             </div>
           )} 

           {selectedRole === "recruiter" && (
        <div>
          <label className="block text-sm font-medium">Company Code</label>
          <input
            {...register("companyId", {
              required: "Company ID is required for recruiters",
            })}
            className="w-full border p-2 rounded"
          />
          {errors.companyId && (
            <p className="text-red-500 text-sm">{errors.companyId.message}</p>
          )}
        </div>
      )}
          </div>
        )}

      {companyAction === "create" && (
        <div >
          {/* creating New Company */}
          {state === "recruiter" && (
           <div className="gap-4 mt-4">
             <div>
             <label className="block text-sm font-medium">Logo</label>
             <input
             type="file"
             className="w-full border p-2 rounded"
             />
             </div>
             <div>
             <label className="block text-sm font-medium">Company Name</label>
             <input
             type="text"
             {...register("companyName", { required: "Company name is required" })}
             className="w-full border p-2 rounded"
             />
             {errors.companyName && (
            <p className="text-red-500 text-sm">{errors.companyName.message}</p>
              )}
             </div>
             <div>
             <label className="block text-sm font-medium">Company Email</label>
             <input
             type="email"
             {...register("companyEmail", { required: "Company Email is required" })}
             className="w-full border p-2 rounded"
             />
             {errors.companyEmail && (
            <p className="text-red-500 text-sm">{errors.companyEmail.message}</p>
              )}
             </div>
             <div className="block text-sm font-medium">
             <label>Company Code</label>
             <input
             type="password"
              {...register("companyCode", {
                 required: "Company COde is required for recruiters",
                 
               })}
             className="w-full border p-2 rounded"
             />
             {errors.companyCode && (
            <p className="text-red-500 text-sm">{errors.companyCode.message}</p>
              )}
             </div>
             <div className="block text-sm font-medium">
             <label>Description</label>
             <input
             type="text"
             {...register("description", {
                 required: "Description is required for recruiters",
               })}
             className="w-full border p-2 rounded"
             />
             {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
              )}
             </div>
             <div className="block text-sm font-medium">
             <label>Website</label>
             <input
             type="text"
              {...register("website", {
                 required: "Website is required for recruiters",
               })}
             className="w-full border p-2 rounded"
             />
             {errors.website && (
            <p className="text-red-500 text-sm">{errors.website.message}</p>
              )}
             </div>
           </div>
         )}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        {isSubmitting ? "Submitting..." : "Sign Up"}
      </button>
      <p className="flex justify-center">I'm Already A Member!<Link to="/login"> Login </Link></p>
    </form>
  );
};

export default SignUp;
