import React, { useState } from 'react';
import './TodoList.css'; // Create this file for styling

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const task = {
        id: new Date().getTime(),
        text: newTask,
      };
      setTasks([task, ...tasks]); // Prepend new task to tasks array
      setNewTask('');
    }
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list">
      <h1>To-Do List</h1>
      <div className="task-input">
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleChange}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul className="tasks">
        {tasks.map(task => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;