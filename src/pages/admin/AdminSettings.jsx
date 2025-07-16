import React, { useState } from "react";
import { toast } from "react-toastify";
import AdminSidebar from "./compoments/AdminSidebar";

const AdminSettings = () => {
  const [platformName, setPlatformName] = useState("SimuLearn");
  const [fields, setFields] = useState(["IT", "Marketing", "Law"]);
  const [newField, setNewField] = useState("");
  const [defaultLevel, setDefaultLevel] = useState("beginner");

  const addField = () => {
    if (newField && !fields.includes(newField)) {
      setFields([...fields, newField]);
      setNewField("");
    }
  };

  const removeField = (field) => {
    setFields(fields.filter((f) => f !== field));
  };

  const handleSave = () => {
    
    toast.success("Settings saved successfully!");
    console.log({ platformName, fields, defaultLevel });
  };

  return (
    
    <div className="max-w-3xl mx-auto bg-white shadow p-6 rounded">
      <h2 className="text-2xl font-bold mb-4">Admin Settings</h2>

<AdminSidebar/>
     
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Platform Name</label>
        <input
          type="text"
          value={platformName}
          onChange={(e) => setPlatformName(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

     
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Industry Fields</label>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            value={newField}
            onChange={(e) => setNewField(e.target.value)}
            placeholder="Add new field"
            className="border p-2 rounded w-full"
          />
          <button
            type="button"
            onClick={addField}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {fields.map((field) => (
            <span
              key={field}
              className="flex items-center bg-gray-200 px-3 py-1 rounded-full text-sm"
            >
              {field}
              <button
                onClick={() => removeField(field)}
                className="ml-2 text-red-500 font-bold"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

    
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Default Simulation Level</label>
        <select
          value={defaultLevel}
          onChange={(e) => setDefaultLevel(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      
      <button
        onClick={handleSave}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Save Settings
      </button>
    </div>
  );
};

export default AdminSettings;
