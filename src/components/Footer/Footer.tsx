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
        sx={{ padding: 0, textAlign: 'center' }}
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
        <Logo color="white" />
        {generateList(links)}
      </Box>
    </Container>
  );
};

export default Footer;
