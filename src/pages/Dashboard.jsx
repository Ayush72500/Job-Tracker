import { useEffect, useState } from "react";
import OverviewCard from "../components/OverviewCard";

function Dashboard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(savedJobs);
  }, []);

  const totalApplications = jobs.length;

  const appliedJobs = jobs.filter(
    (job) => job.status === "Applied"
  ).length;

  const interviewJobs = jobs.filter(
    (job) => job.status === "Interview"
  ).length;

  const rejectedJobs = jobs.filter(
    (job) => job.status === "Rejected"
  ).length;

  const offerJobs = jobs.filter(
    (job) => job.status === "Offer"
  ).length;

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      {/* Heading */}

      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Welcome Back 👋
        </h1>

        <p className="text-slate-500 mt-2">
          Manage and track your job applications.
        </p>
      </div>

      {/* Overview */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6 mt-8">

        <OverviewCard
          title="📋 Total Applications"
          value={totalApplications}
        />

        <OverviewCard
          title="🟢 Applied"
          value={appliedJobs}
        />

        <OverviewCard
          title="🟡 Interview"
          value={interviewJobs}
        />

        <OverviewCard
          title="🔴 Rejected"
          value={rejectedJobs}
        />

        <OverviewCard
          title="🟣 Offers"
          value={offerJobs}
        />

      </div>

      {/* Recent Applications */}

      <div className="mt-12">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold">
            Recent Applications
          </h2>

          <span className="text-gray-500">
            {jobs.length} Total
          </span>

        </div>

        {jobs.length === 0 ? (

          <div className="bg-white rounded-xl shadow border-2 border-dashed border-gray-300 p-12 text-center">

            <h3 className="text-2xl font-semibold text-gray-700">
              No Applications Yet
            </h3>

            <p className="text-gray-500 mt-3">
              Start by adding your first job application.
            </p>

          </div>

        ) : (

          <div className="space-y-5">

            {jobs
              .slice()
              .reverse()
              .slice(0, 5)
              .map((job) => (

                <div
                  key={job.id}
                  className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition flex flex-col md:flex-row md:items-center md:justify-between gap-5"
                >

                  <div>

                    <h3 className="text-xl font-bold text-slate-800">
                      {job.company}
                    </h3>

                    <p className="text-gray-600 mt-1">
                      {job.role}
                    </p>

                    <p className="text-sm text-gray-500 mt-3">
                      📅 {job.date}
                    </p>

                  </div>

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold w-fit
                    ${
                      job.status === "Applied"
                        ? "bg-blue-100 text-blue-700"
                        : job.status === "Interview"
                        ? "bg-yellow-100 text-yellow-700"
                        : job.status === "Offer"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {job.status}
                  </span>

                </div>

              ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default Dashboard;