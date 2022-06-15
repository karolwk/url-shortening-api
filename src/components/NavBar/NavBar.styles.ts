import { SxProps } from '@mui/material';
import { theme } from '../../shared/globalTheme';

interface NavStyles {
  popmenu: SxProps;
  authMenu: {
    signUp: SxProps;
  };
}

export const navBarStyles: NavStyles = {
  popmenu: {
    display: { xs: 'block', md: 'none' },
    '& .MuiPaper-root': {
      backgroundColor: theme.palette.secondary.main,
      color: 'white',
      width: '95%',
    },
    '& .MuiMenuItem-root': {
      justifyContent: 'center',
    },
  },
  authMenu: {
    signUp: {
      fontWeight: 700,
    },
  },
};
