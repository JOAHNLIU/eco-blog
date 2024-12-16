// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import Posts from '../components/Posts';

test('renders posts', () => {
  const posts = [{ id: 1, title: 'Post 1', content: 'This is a post.' }];
  const { getByText } = render(<Posts posts={posts} />);

  expect(getByText('Post 1')).toBeInTheDocument();
  expect(getByText('This is a post.')).toBeInTheDocument();
});
