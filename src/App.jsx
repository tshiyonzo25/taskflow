import { useEffect, useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState("all");

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

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const getButtonStyle = (buttonFilter) => ({
    marginRight: "10px",
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: filter === buttonFilter ? "#333" : "#ddd",
    color: filter === buttonFilter ? "#fff" : "#000",
  });

  return (
    <div className="App">
      <h1>Task Tracker</h1>

      <TaskInput addTask={addTask} />

      <div style={{ marginBottom: "20px" }}>
        <button style={getButtonStyle("all")} onClick={() => setFilter("all")}>
          All
        </button>

        <button
          style={getButtonStyle("active")}
          onClick={() => setFilter("active")}
        >
          Active
        </button>

        <button
          style={getButtonStyle("completed")}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>

      <TaskList
        tasks={filteredTasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
      <div style={{ marginTop: "20px" }}>
  <button style={getButtonStyle("all")} onClick={() => setFilter("all")}>
    All
  </button>

  <button
    style={getButtonStyle("active")}
    onClick={() => setFilter("active")}
  >
    Active
  </button>

  <button
    style={getButtonStyle("completed")}
    onClick={() => setFilter("completed")}
  >
    Completed
  </button>
</div>
    </div>  
  );
}

export default App;