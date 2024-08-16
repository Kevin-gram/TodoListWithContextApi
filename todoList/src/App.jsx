import TodoList from "./components/TodoList";
import AddTodo from "./components/addTodo";
function App() {
  return (
    <div>
      <h1> TodoList</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
