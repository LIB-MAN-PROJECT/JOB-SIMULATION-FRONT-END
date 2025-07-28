// src/pages/PendingVerification.js
import React from "react";
import { Link } from "react-router-dom";

const PendingVerification = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-[#fefae0] text-center px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Awaiting Verification
      </h1>
      <p className="text-gray-600 mb-6 max-w-lg">
        Your recruiter account is currently under review. Once verified by an
        admin, you'll be granted access to your dashboard.
      </p>
      <Link
        to="/login"
        className="bg-teal-500 text-white px-6 py-3 rounded hover:bg-teal-600"
      >
        Back to Login
      </Link>
      <p> or</p>
      <Link
        to="/"
        className="bg-teal-500 text-white px-6 py-3 rounded hover:bg-teal-600"
      >
        {" "}
        Back to Home
      </Link>
    </section>
  );
};

export default PendingVerification;
