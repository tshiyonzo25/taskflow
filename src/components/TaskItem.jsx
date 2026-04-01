function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <li>
      <span className={task.completed ? "completed" : ""}>{task.text}</span>

      <div className="task-actions">
        <button onClick={() => toggleComplete(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </li>
  );
}

export default TaskItem;