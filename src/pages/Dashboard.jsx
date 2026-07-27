import OverviewCard from "../components/OverviewCard";

function Dashboard() {
  return (
    <div className="p-8 bg-slate-100 min-h-screen">
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Welcome Back 👋
        </h1>

        <p className="text-slate-500 mt-2">
          Manage and track your job applications.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-2 gap-6 mt-8">
        <OverviewCard title="Total Applications" value="25" />
        <OverviewCard title="Interviews" value="8" />
        <OverviewCard title="Rejected" value="6" />
        <OverviewCard title="Offers" value="2" />
      </div>
    </div>
  );
}

export default Dashboard;