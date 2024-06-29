import { useState } from "react";
import TasksList from "../TasksList/TasksList";
import InitialTasks from "../../InitialTasks.json";
import Form from "../Form/Form";
import Filter from "../Filter/Filter";

export default function App() {
  const [tasks, setTasks] = useState(InitialTasks);
  const [filter, setFilter] = useState("");

  const addTask = (newTask) => {
    // console.log("New Task:", newTask);

    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };

  const visibleTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteTask = (taskId) => {
    console.log(taskId);
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };

  return (
    <div>
      {/* <p>{filter}</p> */}
      <Form onAdd={addTask} />
      <Filter value={filter} onFilter={setFilter} />
      <TasksList tasks={visibleTasks} onDelete={deleteTask} />
    </div>
  );
}
