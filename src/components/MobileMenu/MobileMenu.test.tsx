import { render, screen } from '../../shared/test-utils';
import '@testing-library/jest-dom/extend-expect';
import MobileMenu from './MobileMenu';

test('should render properly', () => {
  const pages = ['Test1', 'Test2', 'Test3'];

  render(
    <MobileMenu
      pages={pages}
      anchorEl={null}
      onClose={() => {}}
      onOpen={() => {}}
    />
  );

  expect(screen.getByText(/Test1/)).toBeInTheDocument();
  expect(screen.getByText(/Test2/)).toBeInTheDocument();
  expect(screen.getByText(/Test3/)).toBeInTheDocument();
  expect(screen.getByText(/Sign Up/)).toBeInTheDocument();
  expect(screen.getByText(/Login/)).toBeInTheDocument();
});
