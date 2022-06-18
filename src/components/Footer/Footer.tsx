import { Box, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import IconFacebook from '../../assets/IconFacebook';
import IconInstagram from '../../assets/IconInstagram';
import IconPinterest from '../../assets/IconPinterest';
import IconTwitter from '../../assets/IconTwitter';
import Logo from '../../assets/Logo';
import TextList from '../common/TextList/TextList';

type Props = {};

const Footer = (props: Props) => {
  const theme = useTheme();
  const links = {
    features: ['Link Shortening', 'Branded Links', 'Analytics'],
    resources: ['Blog', 'Developers', 'Support'],
    company: ['About', 'Our Team', 'Careers', 'Contact'],
  };

  const generateFooterColumns = (obj: any) => {
    return Object.keys(obj).map((ele) => (
      <TextList
        key={ele}
        sx={{
          flex: 1,
          padding: 0,
          alignSelf: { md: 'start' },
          textAlign: { xs: 'center', md: 'unset' },
        }}
        listItemSx={{
          paddingLeft: { md: 0 },
          textAlign: { xs: 'center', md: 'unset' },
        }}
        subheader={
          <Typography variant="h5" color="white" sx={{ marginBottom: '10px' }}>
            {ele[0].toUpperCase() + ele.slice(1).toLowerCase()}
          </Typography>
        }
        listItems={obj[ele]}
      />
    ));
  };

  return (
    <Container
      component="footer"
      maxWidth={false}
      sx={{
        minHeight: '100px',
        backgroundColor: `${theme.footerBackground.primary}`,
      }}
    >
      <Box
        maxWidth="xl"
        sx={{
          padding: '3em 2em 2em 2em',
          margin: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: { xs: 'center', md: 'normal' },
          alignItems: { xs: 'center', md: 'default' },
          gap: '5rem',
        }}
      >
        <Logo
          htmlColor="white"
          sx={{ alignSelf: { md: 'start' }, flex: { md: 1.5 } }}
        />

        {generateFooterColumns(links)}
        <Box sx={{ display: 'flex', gap: '1em', flexWrap: 'wrap', flex: 1 }}>
          <IconFacebook />
          <IconTwitter />
          <IconPinterest />
          <IconInstagram />
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
