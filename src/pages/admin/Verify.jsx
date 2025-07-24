import { useEffect, useState } from 'react';
import axios from 'axios';
import AdminSidebar from './compoments/AdminSidebar';

const Verify = () => {
  // const [recruiters, setRecruiters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recruiters, setRecruiters] = useState("");

  const recruiter = [
  {
    _id: "r001",
    firstName: "Alice",
    lastName: "Mensah",
    email: "alice@techfirm.com",
    companyName: "TechFirm Ltd",
    isVerified: true,
  },
  {
    _id: "r002",
    firstName: "Kwame",
    lastName: "Boateng",
    email: "kwame@innovategh.com",
    companyName: "InnovateGH",
    isVerified: false,
  },
  {
    _id: "r003",
    firstName: "Linda",
    lastName: "Owusu",
    email: "linda@softspark.com",
    companyName: "SoftSpark Solutions",
    isVerified: true,
  },
  {
    _id: "r004",
    firstName: "Kojo",
    lastName: "Appiah",
    email: "kojo@cyberwave.com",
    companyName: "CyberWave Inc.",
    isVerified: false,
  },
  {
    _id: "r005",
    firstName: "Akua",
    lastName: "Asante",
    email: "akua@greencode.com",
    companyName: "GreenCode Ghana",
    isVerified: false,
  },
];

  const fetchRecruiters = async () => {
    try {
      setLoading(true);
      const res = await axios.get('/api/admin/recruiters'); // Replace with your actual API
      setRecruiters(res.data);
    } catch (error) {
      console.error('Error fetching recruiters:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleVerification = async (id, isVerified) => {
    try {
      await axios.patch(`/api/admin/recruiters/${id}/verify`, {
        isVerified: !isVerified,
      });

      setRecruiters((prev) =>
        prev.map((r) =>
          r._id === id ? { ...r, isVerified: !isVerified } : r
        )
      );
    } catch (error) {
      console.error('Error toggling verification:', error);
    }
  };

  useEffect(() => {
    fetchRecruiters();
  }, []);

  if (loading) return <div className="p-4 text-center">Loading...</div>;

  return (
    <div className="p-4">
      <AdminSidebar/>
      <h1 className="text-2xl font-semibold ml-70 mb-4">All Recruiters</h1>
      <div className="grid grid-cols-1 ml-70 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recruiter.map((recruiter) => (
          <div
            key={recruiter._id}
            className="bg-white p-4 rounded-lg shadow-md border"
          >
            
            <h2 className="text-lg font-bold">
              {recruiter.firstName} {recruiter.lastName}
            </h2>
            <p className="text-sm text-gray-700">
              <strong>Email:</strong> {recruiter.email}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Company:</strong> {recruiter.companyName}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Status:</strong>{' '}
              {recruiter.isVerified ? (
                <span className="text-green-600 font-semibold">Verified</span>
              ) : (
                <span className="text-red-600 font-semibold">Unverified</span>
              )}
            </p>
            <button
              onClick={() =>
                toggleVerification(recruiter._id, recruiter.isVerified)
              }
              className={`mt-3 px-4 py-2 rounded-md text-white ${
                recruiter.isVerified
                  ? 'bg-red-500 hover:bg-red-600'
                  : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {recruiter.isVerified ? 'Unverify' : 'Verify'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Verify;
