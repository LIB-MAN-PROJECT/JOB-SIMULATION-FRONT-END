import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import "./App.css";
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
import CertificateTable from "./pages/admin/compoments/CertificateTable";
import CertificatesIssued from "./pages/admin/CertificateIssued";
import AdminDashboard from "./pages/admin/Dashboard";
import CompanyTable from "./pages/admin/compoments/CompanyTable";
import InternshipCardList from "./pages/admin/compoments/InternshipTable";
import Recruiters from "./pages/admin/Recruiters";
import SimulationTable from "./pages/admin/compoments/Simulations";
import About from "./pages/user/About.jsx";
import HowItWorks from "./pages/user/HowItWorks.jsx";
import Team from "./pages/user/Team.jsx";
import ContactPage from "./components/Contact.jsx";
import InternshipGrid from "./pages/recruiter/InternGrid.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/how-it-works",
      element: <HowItWorks />,
    },
    { path: "/contact", element: <ContactPage /> },
    {
      path: "/admin-sidebar",
      element: <AdminSidebar />,
    },
    {
      path: "/admin-settings",
      element: <AdminSettings />,
    },
    {
      path: "/certificates-issued",
      element: <CertificatesIssued />,
    },
    {
      path: "/certificate-table",
      element: <CertificateTable />,
    },
    {
      path: "/admin",
      element: <AdminDashboard />,
    },
    {
      path: "/company-table",
      element: <CompanyTable />,
    },
    {
      path: "/internships",
      element: <InternshipGrid />,
    },
    {
      path: "/recruiters",
      element: <Recruiters />,
    },
    {
      path: "/simulations",
      element: <SimulationTable />,
    },
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
