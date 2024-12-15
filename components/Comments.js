import React from 'react';

function Comments({ comments, users }) {
  return (
    <div>
      {comments.map(comment => (
        <div key={comment.id}>
          <p>{comment.content}</p>
          <p><strong>{users.find(user => user.id === comment.userId)?.name}</strong></p>
        </div>
      ))}
    </div>
  );
}

export default Comments;
