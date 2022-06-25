import { SxProps } from '@mui/material';

interface MainViewStyles {
  bannerContainer: SxProps;
  moreThenLinksContainer: SxProps;
  moreThenLinksBtn: SxProps;
  advancedStatContainer: SxProps;
  advencedStatHeader: SxProps;
  advencedStatSubtitle: SxProps;
  cardsContainer: SxProps;
  callToActionContainer: SxProps;
  callToActionBtn: SxProps;
}

export const mainViewStyles: MainViewStyles = {
  bannerContainer: {
    margin: '24px',
    display: 'flex',
    flexWrap: { xs: 'wrap-reverse', md: 'nowrap' },
    justifyContent: { xs: 'center', md: 'normal' },
    gap: '4rem',
  },
  moreThenLinksContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    maxWidth: '600px',
    textAlign: { xs: 'center', md: 'left' },
  },
  moreThenLinksBtn: {
    alignSelf: { md: 'flex-start' },
    padding: '0.5rem 2rem 0.5rem 2rem',
    borderRadius: '50px',
  },
  advancedStatContainer: {
    marginTop: '4rem',
    marginBottom: { xs: '11rem', md: '5rem' },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  advencedStatHeader: {
    fontSize: { xs: '2rem', md: '3rem' },
    textAlign: 'center',
  },
  advencedStatSubtitle: {
    maxWidth: '420px',
    textAlign: 'center',
    marginTop: '1rem',
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    justifyContent: 'center',
  },
  callToActionContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'hsl(257, 27%, 26%)',
    backgroundImage: 'url(images/bg-boost-mobile.svg)',
    backgroundPosition: 'right top',
    backgroundRepeat: 'no-repeat',

    minHeight: '200px',
  },
  callToActionBtn: {
    marginTop: '1rem',
    width: 'fit-content',
    padding: '10px 2em 10px 2em',
    borderRadius: '30px',
  },
};
