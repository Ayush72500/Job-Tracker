import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-5">
      {/* Logo */}
      <h1 className="text-3xl font-bold tracking-wide mb-10">
        Job Tracker
      </h1>

      {/* Navigation */}
      <nav>
        <ul className="space-y-3">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `block rounded-lg px-4 py-3 transition duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-slate-800"
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/applications"
              className={({ isActive }) =>
                `block rounded-lg px-4 py-3 transition duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-slate-800"
                }`
              }
            >
              Applications
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `block rounded-lg px-4 py-3 transition duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-slate-800"
                }`
              }
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;