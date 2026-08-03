import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setnewtodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setnewtodo("");
  };
  let updateTodoValue = (event) => {
    setnewtodo(event.target.value);
  };
  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };
  let markAsDoneAll = () => {
    setTodos((prevtodos) => {
      return prevtodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      });
    });
  };
  let markAsDone = (id) => {
    setTodos((prevtodos) => {
      return prevtodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      });
    });
  };
  return (
    <>
      <input
        placeholder="add a tasks"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br />
      <button onClick={addNewTask}>add task</button>

      <h4>Tasks Todo</h4>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span
                style={todo.isDone ? { textDecoration: "line-through" } : {}}
              >
                {todo.task}
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button className="btn" onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button
                className="btn"
                onClick={() => {
                  markAsDone(todo.id);
                }}
              >
                Mark as done
              </button>
            </li>
          );
        })}
      </ul>
      <button
        onClick={markAsDoneAll}
        style={todos.isDone ? { textDecoration: "line-through" } : {}}
      >
        Mark all as done
      </button>
    </>
  );
}
