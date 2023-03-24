import React, { useState } from 'react';
import './Update.css';

function Update({ userId, todoId }) {
  const [todo, setTodo] = useState(null);
  const [message, setMessage] = useState(null);

  const handleUpdate = async () => {
    const response = await fetch(`/users/${userId}/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    });

    if (response.ok) {
      const data = await response.json();
      setMessage(data.info);
    } else {
      const data = await response.json();
      setMessage(data.data.info);
    }
  }

  const handleChange = (event) => {
    setTodo({
      ...todo,
      [event.target.name]: event.target.value
    });
  }

  return (
    <div className="todo-update">
      {message && <p className="message">{message}</p>}
      {todo && (
        <form>
          <label htmlFor="title" className="label">Title:</label>
          <input type="text" name="title" value={todo.title} onChange={handleChange} className="input" />
          <label htmlFor="description" className="label">Description:</label>
          <textarea name="description" value={todo.description} onChange={handleChange} className="textarea" />
          <button type="button" onClick={handleUpdate} className="button">Update Todo</button>
        </form>
      )}
    </div>
  );
}

export default Update;
