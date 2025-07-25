import { useState } from "react";
import axios from "axios";
import { FaCheckCircle, FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

const TaskAccordion = ({
  taskNumber,
  title,
  isCompleted,
  content,
  resources,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleAccordion = () => setIsOpen((prev) => !prev);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      await axios.post("https://httpbin.org/post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSubmitted(true);
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border rounded-2xl shadow p-4 mb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="flex items-center space-x-2">
          <span className="font-bold text-lg">{taskNumber}.</span>
          <span className="font-semibold text-lg">{title}</span>
        </div>
        <div className="flex items-center space-x-3">
          {isCompleted && (
            <FaCheckCircle className="text-green-500" size={20} />
          )}
          {isOpen ? (
            <FaChevronCircleUp className="text-gray-600" />
          ) : (
            <FaChevronCircleDown className="text-gray-600" />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 space-y-4 text-gray-800">
          <p>{content}</p>

          {Array.isArray(resources) && resources.length > 0 && (
            <div>
              <h4 className="font-semibold">Resources:</h4>
              <ul className="list-disc ml-6">
                {resources.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {!isCompleted && !submitted && (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="file"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              <p className="text-sm text-gray-500">
                You can only submit once, so please double-check your file
                before uploading.
              </p>
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          )}

          {submitted && (
            <p className="text-green-600 font-medium">
              Your submission has been received.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default TaskAccordion;