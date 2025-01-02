import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TaskList from './pages/TaskList';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        {/* Main content */}
        <div className="relative">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <Navbar />
            <Routes>
              <Route path="/" element={<TaskList tasks={tasks} setTasks={setTasks} />} />
              <Route path="/add" element={<AddTask setTasks={setTasks} />} />
              <Route path="/edit/:id" element={<EditTask tasks={tasks} setTasks={setTasks} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;