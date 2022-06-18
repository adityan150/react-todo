import AddItem from "./AddItem";
import TodoList from "./TodoList";
import "./Todo.css";

function Todo() {
  return (
    <div className="todo">
      <h1>ToDo</h1>
      <AddItem />
      <TodoList />
    </div>
  );
}

export default Todo;
