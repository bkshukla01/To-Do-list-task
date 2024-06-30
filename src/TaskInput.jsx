// TaskInput.jsx
import React, { useState } from 'react';
import './styling/TaskInput.css';

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') return; // Prevent adding empty tasks
    addTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className="task-input-field"
      />
      <button type="submit" className="task-input-button">
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;
