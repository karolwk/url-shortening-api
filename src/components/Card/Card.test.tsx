import { render, screen, TestIcon } from '../../shared/test-utils';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';

test('should render properly', () => {
  render(
    <Card icon={<TestIcon />} title="Test Title" content="Test Content" />
  );

  expect(screen.getByText(/Test Title/)).toBeInTheDocument();
  expect(screen.getByText(/Test Content/)).toBeInTheDocument();
  expect(screen.getByLabelText('test-icon')).toBeInTheDocument();
});
