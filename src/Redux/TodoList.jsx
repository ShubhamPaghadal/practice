import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletData, editData } from "../Redux/Slice";
import "./TodoList.css";

export default function TodoList() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo === "") {
      alert("Enter todo");
    } else {
      const newTodoItem = { id: Date.now(), text: newTodo };
      dispatch(editData([...todos, newTodoItem]));
    }
  };

  const handleDelete = (id) => {
    dispatch(deletData({ id }));
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
