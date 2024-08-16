import { useState } from "react";
import { useTodos } from "../../Contexts/TodoContext";
import "../../index.css";
function AddTodo() {
  const [text, setText] = useState("");
  const { addTodo } = useTodos();
  const SubmitHandler = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };
  return (
    <div>
      <form
        onSubmit={SubmitHandler}
        className=" form bg-slate-300 shadow-orange-950"
      >
        <input
          type="text"
          value={text}
          placeholder="Add new todo"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodo;
