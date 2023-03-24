import React, { useState } from 'react';

function Delete({ userId, todoId }) {
  const [message, setMessage] = useState(null);

  const handleDelete = async () => {
    const response = await fetch(`/users/${userId}/todos/${todoId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      setMessage('Deleted todo successfully');
    } else {
      const data = await response.json();
      setMessage(data.data.info);
    }
  }

  return (
    <div>
      <button type="button" onClick={handleDelete}>Delete Todo</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Delete;
