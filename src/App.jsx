import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
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


function App() {
  const router = createBrowserRouter([
{
  path: "/login",
  element: <LogIn/>,
},
{
  path:"/sign-up",
  element: <SignUp/>,
},
{
  path: "/admin-sidebar",
  element: <AdminSidebar/>,
},
{
  path: "/admin-settings",
  element: <AdminSettings/>,
}, 
{
  path: "/certificates-issued",
  element: <CertificatesIssued/>,
},
{
  path: "/certificate-table",
  element: <CertificateTable/>,
},
{
  path: "/admin",
  element: <AdminDashboard/>,
},
{
  path: "/company-table",
  element: <CompanyTable/>,
},
{
  path: "/internships",
  element: <InternshipCardList/>,
},
{
  path: "/recruiters",
  element: <Recruiters/>,
},
{
  path: "/simulations",
  element: <SimulationTable/>,
}

  ])
  return (
  <div>
    <RouterProvider router={router}/>
  </div>
)
}

export default App;
