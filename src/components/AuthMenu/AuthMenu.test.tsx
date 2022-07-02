import { render, screen } from '../../shared/test-utils';
import '@testing-library/jest-dom/extend-expect';
import AuthMenu from './AuthMenu';

test('should render properly', () => {
  render(<AuthMenu />);

  expect(screen.getByText(/Login/)).toBeInTheDocument();
  expect(screen.getByText(/Sign Up/)).toBeInTheDocument();
});
