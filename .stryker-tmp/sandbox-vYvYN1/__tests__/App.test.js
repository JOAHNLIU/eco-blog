// @ts-nocheck
import React from 'react';
import { render, act } from '@testing-library/react';
import App from '../components/App';

test('renders Eco-Blog title', async () => {
  await act(async () => {
    const { getByText } = render(<App />);
    const titleElement = getByText(/Eco-Blog/i);
    expect(titleElement).toBeInTheDocument();
  });
});
