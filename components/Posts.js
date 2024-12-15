// components/Posts.js
import React from 'react';
import Comments from './Comments';

function Posts({ posts, comments, users }) {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <h3>Comments:</h3>
          <Comments comments={comments.filter(comment => comment.postId === post.id)} users={users} />
        </div>
      ))}
    </div>
  );
}

export default Posts;
