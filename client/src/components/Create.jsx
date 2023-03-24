import React, { useState } from 'react';
import '../css/Create.css';

function Create({ userId, onSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`/users/${userId}/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        status,
        priority,
      }),
    })
      .then(response => response.json())
      .then(data => {
        onSubmit(data);
        setTitle('');
        setDescription('');
        setStatus('');
        setPriority('');
      });
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Create a new todo:</h2>
      <div className="form-group">
        <label htmlFor="title" className="form-label">Title:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={event => setTitle(event.target.value)}
          className="form-input"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description" className="form-label">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={event => setDescription(event.target.value)}
          className="form-input"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="status" className="form-label">Status:</label>
        <select
          id="status"
          value={status}
          onChange={event => setStatus(event.target.value)}
          className="form-input"
          required
        >
          <option value="">Select status</option>
          <option value="incomplete">Incomplete</option>
          <option value="complete">Complete</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="priority" className="form-label">Priority:</label>
        <select
          id="priority"
          value={priority}
          onChange={event => setPriority(event.target.value)}
          className="form-input"
          required
        >
          <option value="">Select priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <button type="submit" className="form-button">Create Todo</button>
    </form>
  );
}

export default Create;
