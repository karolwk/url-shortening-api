import { Container, Box, Typography, Button } from '@mui/material';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ShortUrlForm from '../../components/ShortUrlForm/ShortUrlForm';
import IconBrandRecognition from '../../assets/IconBrandRecognition';
import Card from '../../components/Card/Card';
import Divider from '../../components/Divider/Divider';
import Footer from '../../components/Footer/Footer';

type Props = {};

const MainView = (props: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Container maxWidth="xl" sx={{ padding: '24px' }}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: { xs: 'wrap-reverse', md: 'nowrap' },
            justifyContent: { xs: 'center', md: 'normal' },
            gap: '5rem',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'center',
              justifyContent: 'center',
              maxWidth: '600px',
              textAlign: 'center',
            }}
          >
            <Typography variant={!matches ? 'h2' : 'h4'}>
              More than just shorter links.
            </Typography>
            <Typography variant="subtitle2">
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </Typography>
            <Button variant="contained">Get Started</Button>
          </Box>
          <Box
            sx={{
              maxWidth: '600px',
              minWidth: '300px',

              objectFit: 'cover',
            }}
          >
            <img src="/images/illustration-working.svg" width="100%" />
            {/* {matches ? <WorkingSVG viewBox="0 0 1100 723" /> : <WorkingSVG />} */}
          </Box>
        </Box>
      </Container>
      <Container
        maxWidth="xl"
        sx={{ padding: '24px', backgroundColor: 'hsl(225, 33%, 95%)' }}
      >
        <ShortUrlForm />
        <Box>
          <Typography variant="h5">Advanced Statistics</Typography>
          <Typography>
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Card
            icon={<IconBrandRecognition iconVariant="brandRecognition" />}
            title="Brand Recognition"
            content="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content"
          />
          <Divider orientation="vertical" />
          <Card
            icon={<IconBrandRecognition iconVariant="detailedRecords" />}
            title="Detailed Records"
            content="Gain insights int who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />
          <Divider orientation="vertical" />
          <Card
            icon={
              <IconBrandRecognition
                iconVariant="fullyCustomizable"
                size="48px"
              />
            }
            title="Fully Customizable"
            content="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          />
        </Box>
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