import { useEffect, useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

 return (
  <div className="app-wrapper">
    <div className="app-card">
      <h1>Task Manager</h1>

      <TaskInput addTask={addTask} />

      {tasks.length === 0 ? (
        <p className="empty">No tasks yet. Add your first task.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span
                onClick={() => toggleComplete(task.id)}
                className={task.completed ? "completed" : ""}
              >
                {task.text}
              </span>

              <button onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);
}

export default App;