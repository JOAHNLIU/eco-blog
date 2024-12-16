import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from './Posts';
import Comments from './Comments';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('http://localhost:3000/api/posts');
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Eco-Blog</h1>
      <Posts posts={posts} />
      <Comments />
    </div>
  );
};

export default App;
