// @ts-nocheck
import React, { useEffect, useState } from 'react';
import Posts from './Posts';
import { fetchUsers, fetchPosts, fetchComments } from '../api';

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      const usersResponse = await fetchUsers();
      const postsResponse = await fetchPosts();
      const commentsResponse = await fetchComments();

      if (isMounted) {
        setUsers(usersResponse.data);
        setPosts(postsResponse.data);
        setComments(commentsResponse.data);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <h1>Eco-Blog</h1>
      <Posts posts={posts} comments={comments} users={users} />
    </div>
  );
}

export default App;
