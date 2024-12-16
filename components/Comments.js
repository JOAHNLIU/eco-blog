import React, { useState } from 'react';

const Comments = () => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ваш коментар:', comment);
    setComment('');
  };

  return (
    <div>
      <h2>Додати коментар</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Введіть ваш коментар"
          rows="4"
        ></textarea>
        <br />
        <button type="submit">Надіслати</button>
      </form>
    </div>
  );
};

export default Comments;
