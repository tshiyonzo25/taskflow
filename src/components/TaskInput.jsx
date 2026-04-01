import { useState } from "react";

function TaskInput({ addTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    addTask(input);
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskInput;