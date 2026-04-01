import { useState } from "react";

function TaskInput({ addTask, tasks }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedInput = input.trim();

    if (!trimmedInput) return;

    const isDuplicate = tasks.some(
      (task) => task.text.toLowerCase() === trimmedInput.toLowerCase()
    );

    if (isDuplicate) {
      alert("Task already exists.");
      return;
    }

    addTask(trimmedInput);
    setInput("");
  };

  return (
    <form className="task-input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskInput;