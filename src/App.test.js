import { render, screen } from '@testing-library/react';
import App from './App';



test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('link-test');
  expect(linkElement).toBeInTheDocument();
});

test('is urk is correct', () => {
  render(<App />);
  const linkElement = screen.getByTestId('link-test');
  expect(linkElement.href).toContain('https://reactjs.org/');
});
