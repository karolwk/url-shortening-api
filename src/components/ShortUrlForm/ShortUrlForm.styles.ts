import { SxProps } from '@mui/material';

interface ShortFormStyles {
  formContainer: SxProps;
  textInput: SxProps;
  submitButton: SxProps;
  resultsContainer: SxProps;
  oryginalLink: SxProps;
  shortLinkContainer: SxProps;
  disabledCopyButton: SxProps;
  copyButton: SxProps;
}

export const shortUrlFormStyles: ShortFormStyles = {
  formContainer: {
    display: 'flex',
    borderRadius: '10px',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: ' stretch',
    backgroundColor: 'hsl(257, 27%, 26%)',
    backgroundImage: {
      xs: 'url(images/bg-shorten-mobile.svg)',
      md: 'url(images/bg-shorten-desktop.svg)',
    },
    backgroundPosition: 'right top',
    backgroundRepeat: 'no-repeat',
    padding: { xs: '1.5em', md: '3em' },
    gap: '1em',
  },

  textInput: {
    flexGrow: 2,

    '& .MuiOutlinedInput-root': {
      borderRadius: '5px',
      backgroundColor: 'white',
      color: 'black',
    },

    '& .MuiOutlinedInput-root.Mui-error': {
      color: 'red',
    },
  },
  submitButton: { width: { xs: '100%', md: '20%' }, borderRadius: '5px' },
  resultsContainer: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: { xs: 'unset', md: 'center' },
    justifyContent: { xs: 'unset', md: 'space-between' },
    gap: '1em',
    padding: '1em',
    backgroundColor: 'white',
    marginTop: '1em',
    borderRadius: '5px',
  },
  oryginalLink: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    color: 'black',
  },
  shortLinkContainer: {
    display: 'flex',
    gap: '1em',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: { xs: 'unset', md: 'center' },
  },

  copyButton: {
    width: { xs: '100%', md: '150px' },
    borderRadius: '5px',
  },
  disabledCopyButton: {
    backgroundColor: 'hsl(260, 8%, 14%) !important',
    width: { xs: '100%', md: '150px' },
    borderRadius: '5px',
  },
};
