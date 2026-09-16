import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Northstar homepage', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /make room for what’s next/i })).toBeInTheDocument();
});
