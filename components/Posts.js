import React from 'react';

const Posts = ({ posts }) => {
  return (
    <div>
      <h2>Список постів</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
