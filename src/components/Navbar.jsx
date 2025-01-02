import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white bg-opacity-70 backdrop-blur-lg shadow-lg rounded-lg mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            Todo App
          </Link>
          <Link
            to="/add"
            className="bg-indigo-600 bg-opacity-90 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Add New Task
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;