import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';


function CompletedTodos() {
  const history = useHistory();
  const location = useLocation();
  const { completedTodos = [] } = location.state || {}; // Provide a default value for completedTodos

  const handleShowCompletedTodos = () => {
    history.push({
      pathname: '/display-completed',
      state: { completedTodos }, // Pass completedTodos to the new page
    });
  };

  return (
    <div className="completed-todos">
      <h2>Completed Todos</h2>
      {completedTodos.map((todo) => (
        <div key={todo.id} className="completed-todo">
          {/* Display completed todo content */}
          <p>{todo.title}</p>
        </div>
      ))}
      <button onClick={handleShowCompletedTodos}>Show Completed Todos</button>
    </div>
  );
}

export default CompletedTodos;
