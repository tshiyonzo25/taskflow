import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleComplete, deleteTask }) {
  if (tasks.length === 0) {
    return <p className="empty">No tasks found.</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;