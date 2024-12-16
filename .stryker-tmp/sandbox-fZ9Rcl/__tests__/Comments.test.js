// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import Comments from '../components/Comments';

test('renders comments', () => {
  const comments = [{ id: 1, postId: 1, comment: 'Great post!' }];
  const { getByText } = render(<Comments comments={comments} />);

  expect(getByText('Great post!')).toBeInTheDocument();
});
