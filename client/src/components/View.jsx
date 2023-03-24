import React, { useState, useEffect } from 'react';
import '../css/View.css';

function View({ userId }) {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetch(`/users/${userId}/todos`)
      .then(response => response.json())
      .then(data => {
        if (data.data) {
          setTodos(data.data);
        } else {
          setMessage(data.message);
        }
      });
  }, [userId]);

  return (
    <div className="todo-list">
      {message && <p className="message">{message}</p>}
      {todos.map(todo => (
        <div key={todo.id} className="todo">
          <h2 className="title">{todo.title}</h2>
          <p className="description">{todo.description}</p>
        </div>
      ))}
    </div>
  );
}

export default View;
