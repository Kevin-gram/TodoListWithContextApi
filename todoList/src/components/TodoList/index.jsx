import { useState } from "react";
import { useTodos } from "../../Contexts/TodoContext";
function TodoList() {
  const { todos, toggleTodo } = useTodos();

  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => {
              toggleTodo(index);
            }}
          />
          <label> {todo.text}</label>
          {todo.completed && todo.completedAt && (
            <span>
              {" "}
              completed At:{new Date(todo.completedAt).toLocaleString()}
            </span>
          )}
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
