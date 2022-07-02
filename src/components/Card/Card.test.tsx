import { render, screen } from '../../shared/test-utils';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';

test('should render properly', () => {
  const pages = ['Test1', 'Test2', 'Test3'];

  render(<Card icon={<></>} title="Test Title" content="Test Content" />);

  expect(screen.getByText(/Test Title/)).toBeInTheDocument();
  expect(screen.getByText(/Test Content/)).toBeInTheDocument();
});
