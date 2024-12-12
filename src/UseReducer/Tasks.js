import { useState } from "react";

export default function Tasks({ details, modifyTask, deleteTask }) {
  return (
    <div>
      <p>Task List</p>
      <ul>
        {details.map((ele) => (
          <li key={ele.id}>
            <TaskModification
              task={ele}
              onModify={modifyTask}
              onDelete={deleteTask}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
function TaskModification({ task, onModify, onDelete }) {
  const [edit, setEdit] = useState(false);
  let taskStatus;
  if (edit) {
    taskStatus = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) => {
            onModify({
              ...task,
              name: e.target.value,
            });
          }}
        />
        <button onClick={() => setEdit(false)}>Save</button>
      </>
    );
  } else {
    taskStatus = (
      <>
        {task.name}
        <button onClick={() => setEdit(true)}>Edit</button>
      </>
    );
  }
  console.log(task);
  return (
    <>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onModify({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskStatus}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </>
  );
}
