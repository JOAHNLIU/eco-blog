// @ts-nocheck
import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import App from '../components/App';
import { fetchUsers, fetchPosts, fetchComments } from '../api';

jest.mock('../api');

test('fetches and displays data correctly', async () => {
  const usersMock = [{ id: 1, name: 'User 1' }];
  const postsMock = [{ id: 1, title: 'Post 1', content: 'Content 1' }];
  const commentsMock = [{ id: 1, postId: 1, comment: 'Comment 1' }];

  fetchUsers.mockResolvedValueOnce({ data: usersMock });
  fetchPosts.mockResolvedValueOnce({ data: postsMock });
  fetchComments.mockResolvedValueOnce({ data: commentsMock });

  render(<App />);

  await waitFor(() => {
    expect(screen.getByText('User 1')).toBeInTheDocument();
    expect(screen.getByText('Post 1')).toBeInTheDocument();
    expect(screen.getByText('Comment 1')).toBeInTheDocument();
  });
});

test('displays loading state initially', () => {
  render(<App />);
  expect(screen.getByText('Loading...')).toBeInTheDocument();
});
