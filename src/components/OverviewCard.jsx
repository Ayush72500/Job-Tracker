function OverviewCard({ title, value }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-gray-100">
      <h3 className="text-gray-500 text-sm font-medium">
        {title}
      </h3>

      <p className="text-4xl font-bold text-slate-800 mt-4">
        {value}
      </p>
    </div>
  );
}

export default OverviewCard;