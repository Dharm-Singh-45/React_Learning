import React, { useState, useEffect } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    const tasks = storedTasks ? JSON.parse(storedTasks) : [];
    setTasks(tasks);
  }, []);

  useEffect(() => {
    const tasksJSON = JSON.stringify(tasks);
    localStorage.setItem('tasks', tasksJSON);
  }, [tasks]);

  const addTask = (evt) => {
    evt.preventDefault();
    const newTask = {
      id: Date.now(),
      title: inputVal,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setInputVal('');
  };

  const editTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setInputVal(taskToEdit.title);
    setEditingTaskId(id);
  };

  const saveTask = (event) => {
    event.preventDefault();
    const updatedTasks = tasks.map((task) =>
      task.id === editingTaskId ? { ...task, title: inputVal } : task
    );
    setTasks(updatedTasks);
    setInputVal('');
    setEditingTaskId(null);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <form onSubmit={editingTaskId ? saveTask : addTask}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={inputVal}
          onChange={(event) => setInputVal(event.target.value)}
        />
        <button type="submit">
          {editingTaskId ? 'Save Task' : 'Add Task'}
        </button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompletion(task.id)}
            />
            {task.completed ? (
              <strike>{task.title}</strike>
            ) : (
              <span>{task.title}</span>
            )}
            <button onClick={() => editTask(task.id)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;