import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () =>
{
  render(<App />);
  const linkElement = screen.getByText(/Learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders 3 list items', () =>
{
  render(<App />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems.length).toEqual(5);
});
