import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white p-5">
      <h2 className="text-2xl font-bold mb-8">Job Tracker</h2>

      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/">Dashboard</Link>
          </li>

          <li>
            <Link to="/applications">Applications</Link>
          </li>

          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;