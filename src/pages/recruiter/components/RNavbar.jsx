import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { LogOut, UserCircle2, FileCheck2, ClipboardList } from "lucide-react";
// import GenerateCertificateModal from "./GenerateCertificateModal"; // modal component
// import ReviewEnrollmentsModal from "../ReviewEnrollmentsModal"; // modal component
import GenerateCertificateModal from "../GenerateCertificateModal";
import ReviewCompletedEnrollment from "../ReviewCompletedEnrollments";

const RNavbar = () => {
  const navigate = useNavigate();
  const [showCertModal, setShowCertModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  
  console.log("accessToken",accessToken);
    console.log("Token",token);
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  return (
    <div className="fixed top-0 left-64 right-0 h-16 bg-white shadow-md z-40 flex items-center justify-between px-6 border-b border-orange-200">
      <div className="flex items-center gap-10 justify-center">
        <Link to="/recruiter-profile" className="flex items-center gap-2 hover:text-orange-500 text-gray-700">
          <UserCircle2 size={20} />
          <span className="text-sm font-medium">Profile</span>
        </Link>

        <button
          onClick={() => setShowCertModal(true)}
          className="flex items-center gap-2 hover:text-orange-500 text-gray-700"
        >
          <FileCheck2 size={20} />
          <span className="text-sm font-medium">Generate Cert</span>
        </button>

        <button
          onClick={() => setShowReviewModal(true)}
          className="flex items-center gap-2 hover:text-orange-500 text-gray-700"
        >
          <ClipboardList size={20} />
          <span className="text-sm font-medium">Enrollments</span>
        </button>
        <button
          onClick={() => setShowReviewModal(true)}
          className="flex items-center gap-2 hover:text-orange-500 text-gray-700"
        >
          <ClipboardList size={20} />
          <span className="text-sm font-medium">Review Enrollments</span>
        </button>
      </div>

      <button
        onClick={handleLogout}
        className="text-red-500 hover:bg-red-100 px-3 py-1 rounded flex items-center gap-1 text-sm"
      >
        <LogOut size={18} />
        Logout
      </button>

      {/* Modals */}
      {showCertModal && (
        <GenerateCertificateModal onClose={() => setShowCertModal(false)} isOpen={() => setShowCertModal(true)} />
      )}
      {showReviewModal && (
        <ReviewEnrollmentsModal onClose={() => setShowReviewModal(false)} />
      )}
    </div>
  );
};

export default RNavbar;
