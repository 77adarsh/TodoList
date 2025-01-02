import { Link } from "react-router-dom";

function TaskList({ tasks, setTasks }) {
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));

    return (
        <div className="space-y-4">
          {tasks.length === 0 ? (
            <div className="text-center py-8 bg-white bg-opacity-70 backdrop-blur-lg rounded-lg shadow-lg">
              <p className="text-gray-500 text-lg">No tasks yet. Add one to get started!</p>
              <Link 
                to="/add" 
                className="text-indigo-600 hover:text-indigo-800 font-medium inline-block mt-2"
              >
                Add Your First Task
              </Link>
            </div>
          ) : (
            tasks.map(task => (
              <div key={task.id} className="bg-white bg-opacity-70 backdrop-blur-lg rounded-lg shadow-lg p-6 hover:bg-opacity-80 transition-all duration-300">
                {/* ... existing task card content ... */}
              </div>
            ))
          )}
        </div>
      );
  };

  const getStatusColor = (status) => {
    return status === "completed"
      ? "bg-green-100 text-green-800"
      : "bg-yellow-100 text-yellow-800";
  };

  return (
    <div className="space-y-4">
      {tasks.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">
            No tasks yet. Add one to get started!
          </p>
          <Link
            to="/add"
            className="text-indigo-600 hover:text-indigo-800 font-medium inline-block mt-2"
          >
            Add Your First Task
          </Link>
        </div>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {task.title}
                </h3>
                <p className="text-gray-600 mt-2">{task.description}</p>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-3 ${getStatusColor(
                    task.status
                  )}`}
                >
                  {task.status}
                </span>
              </div>
              <div className="flex gap-2">
                <Link
                  to={`/edit/${task.id}`}
                  className="text-blue-600 hover:text-blue-800 px-3 py-1 rounded"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-600 hover:text-red-800 px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;
