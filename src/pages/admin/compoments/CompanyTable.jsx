
import React from "react";

const mockCompanies = [
  {
    id: 1,
    name: "TechNova Inc.",
    email: "contact@technova.com",
    industry: "Technology",
    internships: 3,
  },
  {
    id: 2,
    name: "GreenWorld Corp.",
    email: "hr@greenworld.org",
    industry: "Environmental",
    internships: 1,
  },
  {
    id: 3,
    name: "FinEdge Ltd.",
    email: "careers@finedge.com",
    industry: "Finance",
    internships: 5,
  },
  {
    id: 4,
    name: "EduBridge",
    email: "admin@edubridge.edu",
    industry: "Education",
    internships: 2,
  },
];

export default function CompanyTable() {
  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-semibold mb-4">Registered Companies</h2>
      
      <table className="min-w-full table-auto border">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Company Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Industry</th>
            <th className="px-4 py-2 text-left">Internships</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {mockCompanies.map((company) => (
            <tr key={company.id} className="border-t">
              <td className="px-4 py-2">{company.name}</td>
              <td className="px-4 py-2">{company.email}</td>
              <td className="px-4 py-2">{company.industry}</td>
              <td className="px-4 py-2">{company.internships}</td>
              <td className="px-4 py-2">
                <button className="text-blue-600 hover:underline mr-2">View</button>
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
