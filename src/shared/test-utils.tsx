import React, { ReactElement } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { rest } from 'msw';

import { persistor, store as mainStore } from '../store';
import { ThemeProvider } from '@mui/material/styles';
import { PersistGate } from 'redux-persist/integration/react';

import { theme } from '../shared/globalTheme';
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
    store = { mainStore },
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }: WrapperProps) {
    return (
      <Provider store={mainStore}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// Mock JSON API response

export const jsonResponse = {
  ip: '127.0.0.1',
  location: {
    country: 'Good Response',
    region: '',
    city: '',
    lat: 0,
    lng: 0,
    postalCode: '',
    timezone: '',
  },
  isp: 'SUPERISP (RFC1122, Section 3.2.1.3)',
};

// Custom handlers for API requests that will be used in tests

export const handlers = [
  // Provide request handlers

  rest.get('https://api.ipify.org', (req, res, ctx) => {
    const param = req.url.searchParams;

    if (param.get('format') === 'text') {
      return res(ctx.body('127.0.0.1'));
    }
    return res(ctx.status(400));
  }),
];

export * from '@testing-library/react';
export { render };
