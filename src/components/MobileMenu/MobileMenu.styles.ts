import { SxProps } from '@mui/material';

interface MobileMenuStyles {
  authMenu: {
    box: SxProps;
    login: SxProps;
    signUp: SxProps;
  };
}

export const mobileMenuStyles: MobileMenuStyles = {
  authMenu: {
    box: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    login: {
      color: 'white',
    },
    signUp: {
      width: '60%',
      fontWeight: 700,
    },
  },
};
