import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../components/App'; // Путь к вашему компоненту

test('renders Eco-Blog title', () => {
  render(<App />);
  expect(screen.getByText('Eco-Blog')).toBeInTheDocument();
});
