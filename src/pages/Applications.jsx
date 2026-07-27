import { useEffect, useState } from "react";

function Applications() {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");
  const [date, setDate] = useState("");

  const [jobs, setJobs] = useState([]);

  const [editingId, setEditingId] = useState(null);

  const [search, setSearch] = useState("");

  const [filterStatus, setFilterStatus] = useState("All");

  useEffect(() => {
    const savedJobs =
      JSON.parse(localStorage.getItem("jobs")) || [];

    setJobs(savedJobs);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!company || !role || !date) {
      alert("Please fill all fields");
      return;
    }

    if (editingId !== null) {
      const updatedJobs = jobs.map((job) =>
        job.id === editingId
          ? {
              ...job,
              company,
              role,
              status,
              date,
            }
          : job
      );

      setJobs(updatedJobs);

      localStorage.setItem(
        "jobs",
        JSON.stringify(updatedJobs)
      );

      setEditingId(null);
    } else {
      const newJob = {
        id: Date.now(),
        company,
        role,
        status,
        date,
      };

      const updatedJobs = [...jobs, newJob];

      setJobs(updatedJobs);

      localStorage.setItem(
        "jobs",
        JSON.stringify(updatedJobs)
      );
    }

    setCompany("");
    setRole("");
    setStatus("Applied");
    setDate("");
  };

  const deleteJob = (id) => {
    const updatedJobs = jobs.filter(
      (job) => job.id !== id
    );

    setJobs(updatedJobs);

    localStorage.setItem(
      "jobs",
      JSON.stringify(updatedJobs)
    );
  };

  const editJob = (job) => {
    setCompany(job.company);
    setRole(job.role);
    setStatus(job.status);
    setDate(job.date);

    setEditingId(job.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.company
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      job.role
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      filterStatus === "All" ||
      job.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Job Applications
        </h1>

        <p className="text-slate-500 mt-2">
          Manage all your applications in one place.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow mt-8 p-8 space-y-6"
      >
              <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block font-medium mb-2">
              Company
            </label>

            <input
              type="text"
              placeholder="Google"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Role
            </label>

            <input
              type="text"
              placeholder="Frontend Developer"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Status
            </label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Applied</option>
              <option>Interview</option>
              <option>Rejected</option>
              <option>Offer</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-2">
              Date
            </label>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        </div>

        <button
          className={`w-full py-3 rounded-lg text-white font-semibold transition ${
            editingId
              ? "bg-green-600 hover:bg-green-700"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {editingId ? "Update Job" : "Add Job"}
        </button>

      </form>

      <div className="bg-white shadow rounded-xl p-6 mt-8">

        <h2 className="text-2xl font-bold mb-6">
          Search & Filter
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          <input
            type="text"
            placeholder="Search Company or Role..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>All</option>
            <option>Applied</option>
            <option>Interview</option>
            <option>Rejected</option>
            <option>Offer</option>
          </select>

        </div>

      </div>

      <div className="bg-white rounded-xl shadow mt-8 p-6">

        <h2 className="text-2xl font-bold mb-6">
          Saved Applications
        </h2>

        <div className="space-y-5">
                  {filteredJobs.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              No Applications Found
            </div>
          ) : (
            filteredJobs
              .slice()
              .reverse()
              .map((job) => (
                <div
                  key={job.id}
                  className="border rounded-xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-5 hover:shadow-md transition"
                >
                  <div>
                    <h3 className="text-xl font-bold">
                      {job.company}
                    </h3>

                    <p className="text-gray-600 mt-1">
                      {job.role}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-3">

                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {job.status}
                      </span>

                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {job.date}
                      </span>

                    </div>
                  </div>

                  <div className="flex gap-3">

                    <button
                      onClick={() => editJob(job)}
                      className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteJob(job.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
                    >
                      Delete
                    </button>

                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Applications;