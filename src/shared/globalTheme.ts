import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };

    footerBackground: {
      primary: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
    footerBackground?: {
      primary?: string;
    };
  }
}

const colors = {
  header: 'hsl(255, 11%, 22%)',
};

export const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },

  palette: {
    primary: {
      main: 'hsl(180, 66%, 49%)',
    },
    secondary: {
      main: 'hsl(257, 27%, 26%)',
    },
    text: {
      primary: 'hsl(0, 0%, 75%)',
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        h2: {
          color: 'hsl(255, 11%, 22%)',
          fontWeight: 'bold',
        },
        h4: {
          color: 'white',
          fontWeight: 'bold',
        },
        h5: {
          color: 'black',
          fontWeight: 'bold',
        },
        subtitle2: {
          fontWeight: '500',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          overflowX: 'hidden',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          fontWeight: 500,
          borderRadius: '17px',
          boxShadow: 'none',
          textTransform: 'capitalize',
          '&:disabled': {
            color: 'white',
            backgroundColor: 'hsl(180, 66%, 70%)',
          },
          width: 'fit-content',
        },

        contained: {
          color: 'white',
        },

        text: {
          color: 'hsl(0, 0%, 75%)',
        },
      },
    },
  },
  footerBackground: {
    primary: 'hsl(260, 8%, 14%)',
  },
  status: {
    danger: 'orange',
  },
});
