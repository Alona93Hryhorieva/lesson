import Task from "../Task/Task";

export default function TasksList({ tasks, onDelete }) {
  // console.log("Tasks:", tasks);
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task data={task} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
