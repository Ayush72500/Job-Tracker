import { useState } from "react";

function Applications() {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Add New Job
        </h1>

        <p className="text-slate-500 mt-2">
          Fill in the details below to track your job application.
        </p>
      </div>

      {/* Form */}
      <form className="mt-8 max-w-3xl bg-white rounded-xl shadow-md p-8 space-y-6">

        {/* Company */}
        <div>
          <label className="block mb-2 font-medium">
            Company Name
          </label>

          <input
            type="text"
            placeholder="Enter company name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Role */}
        <div>
          <label className="block mb-2 font-medium">
            Job Role
          </label>

          <input
            type="text"
            placeholder="Enter job role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block mb-2 font-medium">
            Status
          </label>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Rejected</option>
            <option>Offer</option>
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="block mb-2 font-medium">
            Application Date
          </label>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Notes */}
        <div>
          <label className="block mb-2 font-medium">
            Notes
          </label>

          <textarea
            rows="4"
            placeholder="Write notes..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Add Job
        </button>

      </form>
    </div>
  );
}

export default Applications;