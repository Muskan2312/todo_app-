import React from 'react';

function DisplayCompletedTodos({ completedTodos }) {
  if (!completedTodos) {
    return <p>No completed todos available.</p>;
  }

  return (
    <div className="completed-todos">
      <h2>Completed Todos</h2>
      {completedTodos.map((todo) => (
        <div key={todo.id} className="completed-todo">
          {/* Display completed todo content */}
          <p>{todo.title}</p>
        </div>
      ))}
    </div>
  );
}

export default DisplayCompletedTodos;
