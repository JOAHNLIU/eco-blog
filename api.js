// api.js
import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com'; 

export const fetchUsers = () => {
  return axios.get(`${BASE_URL}/users`);
};

export const fetchPosts = () => {
  return axios.get(`${BASE_URL}/posts`);
};

export const fetchComments = () => {
  return axios.get(`${BASE_URL}/comments`);
};
