import React, { useState } from 'react';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import DisplayCompletedTodos from './DisplayCompletedTodos'; // Import the component for displaying completed todos

function TodoApp() {
  // State to manage the todo list
  const [todos, setTodos] = useState([]);

  // Function to toggle the completed status of a todo
  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <Link to="/completed">
        <button className="button-link">Show Completed Todos</button>
      </Link>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
              />
              {todo.title}
            </label>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <Switch>
        <Route path="/completed" component={DisplayCompletedTodos} />
      </Switch>
    </div>
  );
}

export default TodoApp;
