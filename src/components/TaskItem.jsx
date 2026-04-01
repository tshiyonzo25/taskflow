function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        borderBottom: "1px solid #ccc",
      }}
    >
      {/* LEFT: Task text */}
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.text}
      </span>

      {/* RIGHT: Buttons */}
      <div>
        <button onClick={() => toggleComplete(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          style={{ marginLeft: "10px" }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;