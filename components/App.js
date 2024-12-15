import React from 'react';
import Posts from './Posts';
import { posts, comments, users } from '../data';

function App() {
  return (
    <div>
      <h1>Eco-Blog</h1>
      <Posts posts={posts} comments={comments} users={users} />
    </div>
  );
}

export default App;
