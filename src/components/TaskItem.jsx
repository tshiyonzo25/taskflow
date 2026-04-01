function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <li>
      <span
        onClick={() => toggleComplete(task.id)}
        className={task.completed ? "completed" : ""}
        style={{ cursor: "pointer" }}
      >
        {task.text}
      </span>

      <button onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;