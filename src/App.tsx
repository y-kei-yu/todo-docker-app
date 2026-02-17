import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, title: 'Todo 1', completed: false },
    { id: 2, title: 'Todo 2', completed: true },
    { id: 3, title: 'Todo 3', completed: false },
  ]);
  const handleAddTodo = () => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title,
        completed: false,
      },
    ]);
    setTitle("");
  }

  return (
    <>
      <div className="font-bold text-2xl mb-4">Todo List
        {todos.map((todo) => (
          <div key={todo.id}>{todo.title}</div>
        ))}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)} placeholder="Add a todo"
        />

        <button onClick={handleAddTodo}>Add</button>
        <div>{title}</div>
      </div >


    </>
  )
}
export default App
