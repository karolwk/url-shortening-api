import {
  render,
  screen,
  handlers,
  fireEvent,
  waitFor,
} from '../../shared/test-utils';
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
test('user should get three results of shortening API', async () => {
  render(<ShortUrlForm />);
  const input = screen.getByRole('textbox');
  const button = screen.getByRole('button', { name: /Shorten it!/ });

  fireEvent.input(input, { target: { value: 'test.pl/test/' } });
  fireEvent.click(button);
  await waitFor(() => screen.findByText(/Copy/));
  //@ts-ignore
  screen.debug();
});
