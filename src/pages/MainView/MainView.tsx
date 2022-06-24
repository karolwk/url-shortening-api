import { Container, Box, Typography, Button } from '@mui/material';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ShortUrlForm from '../../components/ShortUrlForm/ShortUrlForm';
import CardIcons from '../../assets/CardIcons';
import Card from '../../components/Card/Card';
import Divider from '../../components/Divider/Divider';
import Footer from '../../components/Footer/Footer';

type Props = {};

const MainView = (props: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Container maxWidth="xl" sx={{ padding: '24px', marginBottom: '5rem' }}>
        <Box
          sx={{
            margin: '24px',
            display: 'flex',
            flexWrap: { xs: 'wrap-reverse', md: 'nowrap' },
            justifyContent: { xs: 'center', md: 'normal' },
            gap: '4rem',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              maxWidth: '600px',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
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
            <Button
              variant="contained"
              sx={{
                alignSelf: { md: 'flex-start' },
                padding: '0.5rem 2rem 0.5rem 2rem',
                borderRadius: '50px',
              }}
            >
              Get Started
            </Button>
          </Box>
          <Box
            sx={{
              maxWidth: { xs: '550px', md: '750px' },
              minWidth: { xs: '320px', md: '550px' },

              //backgroundSize: 'cover',

              // '& > img': { marginLeft: '100px' },
            }}
          >
            <img src="/images/illustration-working.svg" width="100%" />
            {/* {matches ? <WorkingSVG viewBox="0 0 1100 723" /> : <WorkingSVG />} */}
          </Box>
        </Box>
      </Container>
      <Container
        maxWidth={false}
        sx={{ padding: '24px', backgroundColor: 'hsl(225, 33%, 95%)' }}
      >
        <Container maxWidth="xl">
          <ShortUrlForm />
          <Box
            sx={{
              marginTop: '4rem',
              marginBottom: { xs: '11rem', md: '5rem' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="h5" textAlign="center">
              Advanced Statistics
            </Typography>
            <Typography
              sx={{ maxWidth: '420px', textAlign: 'center', marginTop: '1rem' }}
            >
              Track how your links are performing across the web with our
              advanced statistics dashboard
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
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
      <Container
        maxWidth={false}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'hsl(257, 27%, 26%)',
          backgroundImage: 'url(images/bg-boost-mobile.svg)',
          backgroundPosition: 'right top',
          backgroundRepeat: 'no-repeat',

          minHeight: '200px',
        }}
      >
        <Typography variant="h5" color="white">
          Boost your links today
        </Typography>
        <Button
          variant="contained"
          sx={{
            marginTop: '1rem',
            width: 'fit-content',
            padding: '10px 2em 10px 2em',
            borderRadius: '30px',
          }}
        >
          Get Started
        </Button>
      </Container>
      <Footer />
    </>
  );
};

export default MainView;
