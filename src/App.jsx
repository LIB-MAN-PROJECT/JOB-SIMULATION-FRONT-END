import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import UserLayouts from "./layouts/UserLayouts";
import LandingPage from "./pages/user/LandingPage";
import RecruiterLandingPage from "./pages/recruiter/RecruiterLandingPage.jsx";
import InternshipLandingPage from "./pages/recruiter/InternshipLandingPage.jsx";
import MentorLanding from "./pages/recruiter/MentorLanding.jsx";
import AllJobSimulations from "./pages/user/AllJobSimulations.jsx";
import JobSimulationDetails from "./pages/user/JobSimulationDetails.jsx";
import UserProfileLayouts from "./layouts/UserProfileLayouts.jsx";
import UserDashboard from "./pages/user/UserDashboard.jsx";
import RecruiterLayouts from "./layouts/RecruiterLayouts.jsx";
import RecruiterHero from "./pages/recruiter/components/RecruiterHero.jsx";
import LogIn from "./pages/auth/LogIn";
import SignUp from "./pages/auth/SignUp";
import AdminSidebar from "./pages/admin/compoments/AdminSidebar";
import AdminSettings from "./pages/admin/AdminSettings";
// import CertificatesIssued from "./pages/recruiter/CertificateIssued.jsx";
// import CertificateTable from "./pages/recruiter/CertificatesTable.jsx"

// import AdminDashboard from "./pages/admin/Dashboard";
// import CompanyTable from "./pages/admin/compoments/CompanyTable";
// import InternshipCardList from "./pages/admin/compoments/InternshipTable";
import Recruiters from "./pages/admin/Verify.jsx";
// import SimulationTable from "./pages/admin/compoments/Simulations";
import About from "./pages/user/About.jsx";
import HowItWorks from "./pages/user/HowItWorks.jsx";
import Team from "./pages/user/Team.jsx";
import ContactPage from "./components/Contact.jsx";
import InternshipGrid from "./pages/recruiter/InternGrid.jsx";
import UserProfile from "./pages/user/UserProfilePage.jsx";
import Applications from "./pages/user/UserApplications.jsx";
import UserSimulations from "./pages/user/UserSimulations.jsx";
import UserCertificates from "./pages/user/Certificates.jsx";
import UserSettings from "./pages/user/UserSettings.jsx";
import RecruiterProfilePage from "./pages/recruiter/RecruiterProfilePage.jsx";
import RecruiterDashboard from "./pages/recruiter/RecruiterDashboard.jsx";
import AddTasksForm from "./pages/recruiter/AddTask.jsx";
import AddSimulationForm from "./pages/recruiter/CreateSimulation.jsx";
import CreateInternship from "./pages/recruiter/CreateInternship.jsx";
import Verify from "./pages/admin/Verify.jsx";
// import CertificatesTable from "./pages/recruiter/CertificatesTable.jsx";
import CompletedEnrollments from "./pages/recruiter/CompletedEnrollments.jsx";
import ReviewCompletedEnrollment from "./pages/recruiter/ReviewCompletedEnrollments.jsx";
import GenerateCertificatePage from "./pages/recruiter/GenerateCertificateModal.jsx";
import RecruiterInternships from "./pages/recruiter/MyInternships.jsx";
import MySimulations from "./pages/recruiter/MySimulations.jsx";
//  import InternshipDetails from "../pages/recruiter/InternDetails.jsx";

import RecruiterSimulations from "./pages/recruiter/RecruiterSimulations.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import ManageStudents from "./pages/admin/ManageStudents.jsx";
import ManageRecruiters from "./pages/admin/ManageRecruiters.jsx";
import ManageCompanies from "./pages/admin/ManageCompanies.jsx";
import EditSimulation from "./pages/recruiter/EditSimulation.jsx";
import ReviewCompletedEnrollmentsModal from "./pages/recruiter/ReviewCompletedEnrollmentModal.jsx";
import InternshipDetails from "./pages/recruiter/InternDetails.jsx";
import PendingVerification from "./pages/recruiter/PendingVerification.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/how-it-works",
      element: <HowItWorks />,
    },
    { path: "/contact", element: <ContactPage /> },
    // ADMIN PATHS
    {
      path: "/admin-sidebar",
      element: <AdminSidebar />,
    },
    {
      path: "/admin-settings",
      element: <AdminSettings />,
    },

    // {
    //   path: "/issued-certificates",
    //   element: <CertificatesIssued />,
    // },
    // {
    //   path: "/certificate-table",
    //   element: <CertificatesTable/>,
    // },
    {
      path: "/admin",
      element: <AdminDashboard />,
    },
    {
      path: "/admin-students",
      element: <ManageStudents />,
    },
    {
      path: "/admin-recruiters",
      element: <ManageRecruiters />,
    },
    {
      path: "/admin-companies",
      element: <ManageCompanies />,
    },
    {
      path: "/verify-recruiters",
      element: <Verify />,
    },
    // {
    //   path: "/company-table",
    //   element: <CompanyTable />,
    // },

    {
      path: "/my-internships",
      element: <RecruiterInternships />,
    },
    // RECRUITERS NOT NESTED
    {
      path: "/recruiter",
      element: <Recruiters />,
    },

    { path: "/recruiter/simulations", element: <RecruiterSimulations /> },
    {
      path: "/recruiter-dashboard",
      element: <RecruiterDashboard />,
    },
    {
      path: "/add-simulation",
      element: <AddSimulationForm />,
    },
    {
      path: "/edit-simulation/:id",
      element: <EditSimulation />,
    },
    {
      path: "/create-internship",
      element: <CreateInternship />,
    },
    {
      path: "/completed-enrollments",
      element: <CompletedEnrollments />,
    },
    {
      path: "/enrollments",
      element: <ReviewCompletedEnrollmentsModal />,
    },
    {
      path: "/review-enrollments/:id",
      element: <ReviewCompletedEnrollment />,
    },
    {
      path: "/recruiter-profile",
      element: <RecruiterProfilePage />,
    },

    {
      path: "/generate-cert",
      element: <GenerateCertificatePage />,
    },
    {
      path: "/add-tasks/:id",
      element: <AddTasksForm />,
    },
    {
      path: "/my-simulations",
      element: <MySimulations />,
    },

    // PRIVATE ROUTES
    {
      path: "/recruiters-profile",
      element: <ProtectedRoute roles={["student", "recruiter"]} />,
      children: [
        {
          path: "/recruiters-profile",
          element: <RecruiterProfilePage />,
        },
      ],
    },
    {
      path: "/user",
      element: <ProtectedRoute roles={["student", "recruiter"]} />,
      children: [
        {
          path: "/user",
          element: <UserDashboard />,
        },
      ],
    },

    // AUTHENTICATION
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    { path: "/pending-verification", element: <PendingVerification /> },
    // 
    //   path: "/internship/:id",
    //   element: <InternshipDetails />,
    // },
    // NESTED PATHS
    {
      path: "/",
      element: <UserLayouts />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        { path: "about-us/meet-the-team", element: <Team /> },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "recruiter-dashboard",
          element: <RecruiterLandingPage />,
        },
        {
          path: "internship",
          element: <InternshipLandingPage />,
        },
        {
          path: "all-internships",
          element: <InternshipGrid />,
        },
        { path: "internship/:id", element: <InternshipDetails /> },
        { path: "recruiter-home", element: <RecruiterLandingPage /> },
        {
          path: "mentorship",
          element: <MentorLanding />,
        },
        {
          path: "simulations",
          children: [
            {
              index: true,
              element: <AllJobSimulations />,
            },
            {
              path: ":id",
              element: <JobSimulationDetails />,
            },
          ],
        },
      ],
    },
    {
      path: "/user",
      element: <UserProfileLayouts />,
      children: [
        {
          index: true,
          element: <UserDashboard />,
        },
        {
          path: "profile",
          element: <UserProfile />,
        },
        {
          path: "all-applications",
          element: <Applications />,
        },

        {
          path: "all-enrollments",
          element: <UserSimulations />,
        },
        {
          path: "track-progress",
          element: <UserCertificates />,
        },
        {
          path: "settings",
          element: <UserSettings />,
        },
      ],
    },
    {
      path: "/recruiter",
      element: <RecruiterLayouts />,
      children: [
        {
          index: true,
          element: <RecruiterHero />,
        },
        {
          path: "/recruiter/add",
          element: <AddSimulationForm />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
