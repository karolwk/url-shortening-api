import React, { ReactElement } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { rest } from 'msw';

import { persistor, store as mainStore } from '../store';
import { ThemeProvider } from '@mui/material/styles';
import { PersistGate } from 'redux-persist/integration/react';

import { theme } from '../shared/globalTheme';
import { ShortCodeURL } from './types';

interface WrapperProps {
  children: React.ReactElement;
}

// We're using our own custom render function and not RTL's render.
// Our custom utils also re-export everything from RTL
// so we can import fireEvent and screen from here as well

function render(
  ui: ReactElement,
  {
    //@ts-ignore
    preloadedState,
    store = mainStore,
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }: WrapperProps) {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// Mock JSON API response

export const jsonResponse: ShortCodeURL = {
  ok: true,
  result: {
    code: 'TEST1',
    short_link: 'http:/test.net/short_link',
    short_link2: 'http:/test.net/short_link2',
    full_short_link2: 'http:/test.net/full_short_link2',
    share_link: 'http:/test.net/share_link',
    full_share_link: 'http:/test.net/full_share_link',
    original_link: 'http:/test.net/original_link',
  },
};

// Custom handlers for API requests that will be used in tests

export const handlers = [
  // Provide request handlers

  rest.get('https://api.shrtco.de/v2/shorten', (req, res, ctx) => {
    const param = req.url.searchParams;
    console.log(param + 'dupa');

    if (param.get('url') === 'test.pl/test/') {
      return res(ctx.body(JSON.stringify(jsonResponse)), ctx.status(200));
    }
    return res(ctx.status(400));
  }),
];

// Custom icon for testing

export const TestIcon = () => {
  return (
    <svg height="100" width="100" aria-label="test-icon">
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="black"
        strokeWidth="3"
        fill="red"
      />
      Sorry, your browser does not support inline SVG.
    </svg>
  );
};

export * from '@testing-library/react';
export { render };
