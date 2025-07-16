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

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserLayouts />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: "recruiter-dashboard",
          element: <RecruiterLandingPage />,
        },
        {
          path: "internships",
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
        { index: true, element: <RecruiterHero /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
