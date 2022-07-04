import { render, screen } from '../../shared/test-utils';
import '@testing-library/jest-dom/extend-expect';
import NavBar from './NavBar';

test('should render properly', () => {
  render(<NavBar />);

  screen.getAllByText(/Products/);
  screen.getAllByText(/Pricing/);
  screen.getAllByText(/Blog/);
  screen.getAllByText(/Login/);
  screen.getAllByText(/Sign Up/);
  expect(screen.getByTitle(/Logo/)).toBeInTheDocument();
});
