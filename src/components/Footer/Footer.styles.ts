import { SxProps } from '@mui/material';
import { theme } from '../../shared/globalTheme';

interface FooterStyles {
  wideContainer: SxProps;
  mainContainer: SxProps;
  logo: SxProps;
  socialsBox: SxProps;
  list: SxProps;
  listItem: SxProps;
}

export const footerStyles: FooterStyles = {
  wideContainer: {
    minHeight: '100px',
    backgroundColor: `${theme.footerBackground.primary}`,
  },
  mainContainer: {
    padding: '3em 2em 2em 2em',
    margin: 'auto',
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: { xs: 'center', md: 'normal' },
    alignItems: { xs: 'center', md: 'default' },
    gap: '5rem',
  },
  logo: {
    alignSelf: { md: 'start' },
    flex: { md: 1.5 },
  },
  socialsBox: {
    display: 'flex',
    gap: '1em',
    flexWrap: 'wrap',
    flex: 1,
  },
  list: {
    flex: 1,
    padding: 0,
    alignSelf: { md: 'start' },
    textAlign: { xs: 'center', md: 'unset' },
  },
  listItem: {
    paddingLeft: { md: 0 },
    textAlign: { xs: 'center', md: 'unset' },
  },
};
