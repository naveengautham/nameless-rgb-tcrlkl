import { useReducer, useState } from "react";
import AddList from "./AddList";
import Tasks from "./Tasks";

export default function TaskList() {
  const [details, dispatch] = useReducer(taskReducer, initialState);
  function handleAddTask(text) {
    dispatch({
      type: "add",
      id: nextId++,
      name: text,
    });
  }
  function handleModify(task) {
    dispatch({
      type: "modify",
      task: task,
    });
  }
  function handleDelete(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }
  return (
    <>
      <AddList addTask={handleAddTask} />
      <Tasks
        details={details}
        modifyTask={handleModify}
        deleteTask={handleDelete}
      />
    </>
  );
}
function taskReducer(details, action) {
  switch (action.type) {
    case "add": {
      return [
        ...details,
        {
          id: action.id,
          name: action.name,
          done: true,
        },
      ];
    }
    case "modify": {
      return details.map((ele) => {
        if (ele.id === action.task.id) {
          return action.task;
        } else {
          return ele;
        }
      });
    }
    case "deleted": {
      return details.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("unknown action:" + action.type);
    }
  }
}
let nextId = 100;
const initialState = [
  {
    id: 1,
    name: "Priya",
    done: false,
  },
  {
    id: 2,
    name: "Arjun",
    done: true,
  },
  {
    id: 3,
    name: "Siva",
    done: false,
  },
];
