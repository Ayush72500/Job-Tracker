function JobCard({ company, role, status, date }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            {company}
          </h2>

          <p className="text-slate-600 mt-1">
            {role}
          </p>
        </div>

        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
          {status}
        </span>
      </div>

      <p className="text-sm text-slate-500 mt-4">
        Applied on: {date}
      </p>

      <div className="flex gap-3 mt-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Edit
        </button>

        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
          Delete
        </button>
      </div>
    </div>
  );
}

export default JobCard;