import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask } from '../features/tasks/taskSlice.js';

function EditTask() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  // Get tasks from Redux store
  const tasks = useSelector((state) => state.tasks.items);

  // Local state for form data
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: ''
  });

  // Load task data when component mounts
  useEffect(() => {
    const task = tasks.find(t => t.id === parseInt(id));
    if (task) {
      setFormData(task);
    } else {
      navigate('/');
    }
  }, [id, tasks, navigate]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(updateTask(formData));
    navigate('/');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Task</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            rows="4"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Update Task
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditTask;