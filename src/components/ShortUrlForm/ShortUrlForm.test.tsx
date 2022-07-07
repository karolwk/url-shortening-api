import { render, screen, handlers } from '../../shared/test-utils';
import '@testing-library/jest-dom/extend-expect';
import { setupServer } from 'msw/node';
import ShortUrlForm from './ShortUrlForm';

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test('should render properly', () => {
  render(<ShortUrlForm />);
  expect(screen.getByText(/Shorten it!/)).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
});
