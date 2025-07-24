import React from "react";
import RecruiterNavbar from "./components/RecruiterNavbar";


const internships = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TechNova",
    location: "Remote",
    duration: "3 Months",
    stipend: "GHS 800",
    status: "Open",
  },
  {
    id: 2,
    title: "Marketing Intern",
    company: "BrandSpark",
    location: "Accra",
    duration: "6 Weeks",
    stipend: "GHS 500",
    status: "Closed",
  },
  {
    id: 3,
    title: "UI/UX Design Intern",
    company: "DesignMate",
    location: "Kumasi",
    duration: "2 Months",
    stipend: "GHS 700",
    status: "Open",
  },
];

export default function InternshipCardList() {
  return (
    <>
    <RecruiterNavbar/>
    <div className="p-4 mt-10 ml-67">
      <h2 className="text-2xl font-semibold mb-4">Internship Opportunities</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {internships.map((internship) => (
          <div
            key={internship.id}
            className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition"
          >
            
            <h3 className="text-lg font-bold text-gray-800">
              {internship.title}
            </h3>
            <p className="text-sm text-gray-600">{internship.company}</p>
            <p className="text-sm text-gray-500">{internship.location}</p>

            <div className="mt-3 text-sm text-gray-700 space-y-1">
              <p><strong>Duration:</strong> {internship.duration}</p>
              <p><strong>Stipend:</strong> {internship.stipend}</p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`inline-block px-2 py-1 text-xs rounded-full ${
                    internship.status === "Open"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {internship.status}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
