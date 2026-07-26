function Navbar() {
  return (
    <header className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">
      {/* Left Side */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h1>
        <p className="text-sm text-slate-500">
          Track all your job applications
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        <button className="text-2xl">🔔</button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
            A
          </div>

          <div>
            <h3 className="font-semibold text-slate-800">
              Ayush
            </h3>

            <p className="text-sm text-slate-500">
              Developer
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;