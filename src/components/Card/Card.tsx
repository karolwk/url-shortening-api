import { Box, SxProps, Typography } from '@mui/material';
import React, { ReactElement } from 'react';

type Props = {
  icon: ReactElement;
  title: string;
  content: string;
  marginTop?: string;
};

const Card = ({ icon, title, content, marginTop }: Props) => {
  return (
    <Box
      sx={{
        maxWidth: '500px',
        width: { xs: '100%', md: '100%' },
        marginTop: marginTop,
        minHeight: '300px',
        backgroundColor: ' white',
        display: 'flex',
        flexDirection: 'column',

        alignItems: { xs: 'center', md: 'flex-start' },
        justifyContent: 'center',
        position: 'relative',
        padding: '20px',
      }}
    >
      <Box
        sx={{
          height: '80px',
          width: '80px',
          position: 'absolute',
          top: -40,
          borderRadius: '50%',
          backgroundColor: 'hsl(257, 27%, 26%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="h5"
        color="black"
        fontWeight="700"
        margin="15px 0 15px 0"
        sx={{ textAlign: { xs: 'center', md: 'left' } }}
      >
        {title}
      </Typography>
      <Typography
        fontWeight="500"
        sx={{ textAlign: { xs: 'center', md: 'left' } }}
      >
        {content}
      </Typography>
    </Box>
  );
};

export default Card;
