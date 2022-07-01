import { render, screen, handlers } from '../../shared/test-utils';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

test('should render properly', () => {
  render(<Footer />);

  expect(screen.getByText(/Link Shortening/)).toBeInTheDocument();
  expect(screen.getByText(/Blog/)).toBeInTheDocument();
  expect(screen.getByText(/About/)).toBeInTheDocument();
});
