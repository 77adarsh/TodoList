import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTasks, deleteTask } from '../features/tasks/taskSlice.js';

function TaskList() {
  const dispatch = useDispatch();
  const { items: tasks, status, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTasks());
    }
  }, [status, dispatch]);

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  if (status === 'loading') {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="text-center py-8 text-red-600">Error: {error}</div>;
  }

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
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-3 ${
                    task.status === 'completed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
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
                  onClick={() => handleDeleteTask(task.id)}
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