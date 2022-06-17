import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import React from 'react';
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

  const generateList = (obj: any) => {
    return Object.keys(obj).map((ele) => (
      <TextList
        key={ele}
        subheader={<Typography variant="h5">{ele}</Typography>}
        listItems={obj[ele]}
        sx={{ padding: 0, textAlign: { xs: 'center', md: 'unset' } }}
        listItemSx={{ textAlign: { xs: 'center', md: 'unset' } }}
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
          padding: '20px',
          margin: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: { xs: 'center', md: 'normal' },
          alignItems: { xs: 'center', md: 'default' },
          gap: '5rem',
        }}
      >
        <Logo htmlColor="white" />
        {generateList(links)}
        <Box sx={{ display: 'flex', gap: '1em', flexWrap: 'wrap' }}>
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
