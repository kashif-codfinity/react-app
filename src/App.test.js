import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello, CI/CD!', () => {
  render(<App />);
  const headingElement = screen.getByText(/Hello, CI\/CD!/i); 
  expect(headingElement).toBeInTheDocument(); 
});