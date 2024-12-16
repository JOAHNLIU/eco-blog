// @ts-nocheck
import axios from 'axios';
import { users, posts, comments } from './data';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: users });
    }, 1000);
  });
};

export const fetchPosts = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: posts });
    }, 1000);
  });
};

export const fetchComments = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: comments });
    }, 1000);
  });
};
