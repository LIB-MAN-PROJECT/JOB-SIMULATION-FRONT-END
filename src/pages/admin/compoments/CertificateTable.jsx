import React from "react";
import { certificateData } from "../mockData"; 
import AdminSidebar from "./AdminSidebar";

const CertificateTable = () => {

  return (
    <div className="p-6 bg-white rounded shadow overflow-x-auto">
      <h2 className="text-2xl ml-69 font-semibold mb-4">Issued Certificates</h2>
      <div className="flex justify-between">
      <div>
        <AdminSidebar/>
      </div>
      <table className="w-250 table-auto border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-4 py-2 border">#</th>
            <th className="px-4 py-2 border">Certificate ID</th>
            <th className="px-4 py-2 border">User</th>
            <th className="px-4 py-2 border">Simulation</th>
            <th className="px-4 py-2 border">Issued At</th>
            <th className="px-4 py-2 border">Download</th>
          </tr>
        </thead>
        <tbody>
          {certificateData.map((cert, index) => (
            <tr key={cert.certId} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">{index + 1}</td>
              <td className="px-4 py-2 border">{cert.certId}</td>
              <td className="px-4 py-2 border">{cert.userName}</td>
              <td className="px-4 py-2 border">{cert.simulationTitle}</td>
              <td className="px-4 py-2 border">{cert.issuedAt}</td>
              <td className="px-4 py-2 border">
                <a
                  href={cert.certUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View PDF
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default CertificateTable;
