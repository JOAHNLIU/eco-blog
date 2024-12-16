const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

exports.fetchUsers = async () => {
  const response = await axios.get(`${BASE_URL}/users`);
  return response.data;
};

exports.fetchPosts = async () => {
  const response = await axios.get(`${BASE_URL}/posts`);
  return response.data;
};

exports.fetchComments = async () => {
  const response = await axios.get(`${BASE_URL}/comments`);
  return response.data;
};
