import { SxProps } from '@mui/material';

interface CardStyles {
  cardBox: SxProps;
  iconBox: SxProps;
  title: SxProps;
  content: SxProps;
}

export const cardStyles: CardStyles = {
  cardBox: {
    maxWidth: '500px',
    width: { xs: '100%', md: '100%' },

    minHeight: '300px',
    backgroundColor: ' white',
    display: 'flex',
    flexDirection: 'column',

    alignItems: { xs: 'center', md: 'flex-start' },
    justifyContent: 'center',
    position: 'relative',
    padding: '20px',
  },

  iconBox: {
    height: '80px',
    width: '80px',
    position: 'absolute',
    top: -40,
    borderRadius: '50%',
    backgroundColor: 'hsl(257, 27%, 26%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    textAlign: {
      xs: 'center',
      md: 'left',
      color: 'black',
      fontWeight: '700',
      margin: '15px 0 15px 0',
    },
  },

  content: { textAlign: { xs: 'center', md: 'left' } },
};
