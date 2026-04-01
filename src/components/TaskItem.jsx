function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <li className="task-item">
      <span
        onClick={() => toggleComplete(task.id)}
        className={task.completed ? "task-text completed" : "task-text"}
      >
        {task.text}
      </span>

      <button onClick={() => deleteTask(task.id)} className="delete-btn">
        Delete
      </button>
    </li>
  );
}

export default TaskItem;