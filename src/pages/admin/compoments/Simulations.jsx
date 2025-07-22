import { simulations } from "../../../db/Data";

const SimulationTable = () => {
  // const [simulations, setSimulations] = useState([]);

  // useEffect(() => {
  //   axios.get("/api/simulations")
  //     .then((res) => {
  //       console.log("API response:", res.data);
  //       setSimulations(res.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching simulations:", error);
  //     });
  // }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Simulations</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-md shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Field</th>
              <th className="p-3 text-left">Company</th>
              <th className="p-3 text-left">Level</th>
              <th className="p-3 text-left">Duration</th>
              <th className="p-3 text-left">Hiring?</th>
              <th className="p-3 text-left">Published?</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {simulations.map((sim) => (
              <tr key={sim._id} className="border-t">
                <td className="p-3">
                  <img
                    src={sim.imageUrl}
                    alt={sim.title}
                    className="w-16 h-12 object-cover rounded"
                  />
                </td>
                <td className="p-3 font-medium">{sim.title}</td>
                <td className="p-3">{sim.field}</td>
                <td className="p-3">{sim.companyName}</td>
                <td className="p-3">{sim.level}</td>
                <td className="p-3">{sim.duration} weeks</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 text-sm rounded ${
                      sim.isHiring
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {sim.isHiring ? "Yes" : "No"}
                  </span>
                </td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 text-sm rounded ${
                      sim.isPublished
                        ? "bg-blue-200 text-blue-800"
                        : "bg-yellow-200 text-yellow-800"
                    }`}
                  >
                    {sim.isPublished ? "Yes" : "No"}
                  </span>
                </td>
                <td className="p-3 flex gap-3 mt-3 space-x-2">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded text-sm">
                    View
                  </button>
                  
                  <button className="bg-red-500 text-white px-2 py-1 rounded text-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SimulationTable;
