import React, { useEffect, useState } from 'react';
import Posts from './components/Posts';
import { fetchUsers, fetchPosts, fetchComments } from './api';

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchUsers().then(response => setUsers(response.data));
    fetchPosts().then(response => setPosts(response.data));
    fetchComments().then(response => setComments(response.data));
  }, []);

  return (
    <div>
      <h1>Eco-Blog</h1>
      <Posts posts={posts} comments={comments} users={users} />
    </div>
  );
}

export default App;
