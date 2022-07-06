import { Container, Box, Typography, Button } from '@mui/material';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ShortUrlForm from '../../components/ShortUrlForm/ShortUrlForm';
import CardIcons from '../../assets/CardIcons';
import Card from '../../components/Card/Card';
import Divider from '../../components/Divider/Divider';
import { mainViewStyles } from './MainView.styles';

const MainView = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Container maxWidth="xl" sx={{ padding: '24px', marginBottom: '5rem' }}>
        <Box sx={mainViewStyles.bannerContainer}>
          <Box sx={mainViewStyles.moreThenLinksContainer}>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: '2rem', md: '4rem' } }}
            >
              More than just shorter links.
            </Typography>
            <Typography
              variant="subtitle2"
              fontSize={{ xs: '1rem', md: '1.3rem' }}
            >
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </Typography>
            <Button variant="contained" sx={mainViewStyles.moreThenLinksBtn}>
              Get Started
            </Button>
          </Box>
          <Box
            sx={{
              maxWidth: { xs: '550px', md: '750px' },
              minWidth: { xs: '320px', md: '400px' },
            }}
          >
            <img
              src="url-shortening-api/images/illustration-working.svg"
              alt="ilustration of person working"
              width="100%"
            />
          </Box>
        </Box>
      </Container>
      <Container
        maxWidth={false}
        sx={{ padding: '24px', backgroundColor: 'hsl(225, 33%, 95%)' }}
      >
        <Container maxWidth="xl">
          <ShortUrlForm />
          <Box sx={mainViewStyles.advancedStatContainer}>
            <Typography variant="h2" sx={mainViewStyles.advencedStatHeader}>
              Advanced Statistics
            </Typography>
            <Typography sx={mainViewStyles.advencedStatSubtitle}>
              Track how your links are performing across the web with our
              advanced statistics dashboard
            </Typography>
          </Box>
          <Box sx={mainViewStyles.cardsContainer}>
            <Card
              icon={<CardIcons iconVariant="brandRecognition" />}
              marginTop="-100px"
              title="Brand Recognition"
              content="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content"
            />
            <Divider orientation={!matches ? 'vertical' : 'horizontal'} />
            <Card
              icon={<CardIcons iconVariant="detailedRecords" />}
              title="Detailed Records"
              content="Gain insights int who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            />
            <Divider orientation={!matches ? 'vertical' : 'horizontal'} />
            <Card
              icon={<CardIcons iconVariant="fullyCustomizable" size="48px" />}
              title="Fully Customizable"
              marginTop={!matches ? '100px' : '0'}
              content="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            />
          </Box>
        </Container>
      </Container>
      <Container maxWidth={false} sx={mainViewStyles.callToActionContainer}>
        <Typography variant="h5" color="white">
          Boost your links today
        </Typography>
        <Button variant="contained" sx={mainViewStyles.callToActionBtn}>
          Get Started
        </Button>
      </Container>
    </>
  );
};

export default MainView;
