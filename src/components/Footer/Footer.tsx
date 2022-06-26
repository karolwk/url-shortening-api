import { Box, Container, Typography } from '@mui/material';
import IconFacebook from '../../assets/IconFacebook';
import IconInstagram from '../../assets/IconInstagram';
import IconPinterest from '../../assets/IconPinterest';
import IconTwitter from '../../assets/IconTwitter';
import Logo from '../../assets/Logo';
import TextList from '../common/TextList/TextList';
import { footerStyles } from './Footer.styles';

const Footer = () => {
  const links = {
    features: ['Link Shortening', 'Branded Links', 'Analytics'],
    resources: ['Blog', 'Developers', 'Support'],
    company: ['About', 'Our Team', 'Careers', 'Contact'],
  };

  const generateFooterColumns = (obj: any) => {
    return Object.keys(obj).map((ele) => (
      <TextList
        key={ele}
        sx={footerStyles.list}
        listItemSx={footerStyles.listItem}
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
      sx={footerStyles.wideContainer}
    >
      <Box maxWidth="xl" sx={footerStyles.mainContainer}>
        <Logo htmlColor="white" sx={footerStyles.logo} />

        {generateFooterColumns(links)}
        <Box sx={footerStyles.socialsBox}>
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
