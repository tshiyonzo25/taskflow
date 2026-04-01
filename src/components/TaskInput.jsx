import { useState } from "react";

function TaskInput({ onAddTask }) {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (!title.trim()) return;
    onAddTask(title);
    setTitle("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}

export default TaskInput;