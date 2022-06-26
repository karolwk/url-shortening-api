import { SxProps } from '@mui/material';
import { theme } from '../../shared/globalTheme';

interface NavStyles {
  popmenu: SxProps;
  authMenu: {
    signUp: SxProps;
  };
  navMenuBtn: SxProps;
  mobileMenu: SxProps;
  desktopLinks: SxProps;
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
  navMenuBtn: {
    my: 2,
    color: 'secondary',
    display: 'block',
    textTransform: 'capitalize',
    '&:hover': { color: 'black' },
  },
  mobileMenu: {
    flexGrow: 1,
    display: { xs: 'flex', md: 'none' },
    justifyContent: 'end',
  },
  desktopLinks: {
    flexGrow: { xs: 0, md: 1 },
    display: { xs: 'none', md: 'flex' },
  },
};
