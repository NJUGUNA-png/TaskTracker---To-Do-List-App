import React, { useState } from 'react';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';
import './App.css';

const App = () => {
  const defaultTasks = [
    { 
      id: 1, 
      title: 'Fix UI bug in login form (e.g., button alignment)', 
      dueDate: '2025-04-25',
      priority: 'low' 
    },
    { 
      id: 2, 
      title: 'Write unit tests for utility function (e.g., date formatter)', 
      dueDate: '2025-04-26',
      priority: 'medium' 
    },
    { 
      id: 3, 
      title: 'Update API documentation in Swagger/OpenAPI', 
      dueDate: '2025-04-27',
      priority: 'low' 
    },
    { 
      id: 4, 
      title: 'Refactor legacy component (e.g., class to functional React)', 
      dueDate: '2025-04-28',
      priority: 'high' 
    },
    { 
      id: 5, 
      title: 'Review PRs (pull requests) from teammates', 
      dueDate: '2025-04-29',
      priority: 'medium' 
    }
];

  const [tasks, setTasks] = useState(defaultTasks);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  return (
    <div className="app-container">
      <div className="header-container">
        <h1>TaskTrackr - To-Do List App</h1>
      </div>

      <div className="tasks-container">
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
      </div>
    </div>
  );
};

export default App;