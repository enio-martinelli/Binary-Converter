import { render, screen } from '@testing-library/react';
import App from './App';
import { btd } from './App';

/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

test('binary to decimal conversion', () => {
  // Caso de teste 1
  expect(btd(101)).toBe(5);

  // Caso de teste 2
  expect(btd(1101)).toBe(13);

  // Caso de teste 2
  expect(btd(110010100110)).toBe(3238);

  // Adicione mais casos de teste conforme necessário
});