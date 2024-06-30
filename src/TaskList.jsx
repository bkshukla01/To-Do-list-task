// TaskList.jsx
import React from 'react';
import './styling/TaskList.css';

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          {task.text}
          <button className="task-item-button" onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
