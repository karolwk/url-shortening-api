import { Box, SxProps, Typography } from '@mui/material';
import React, { ReactElement } from 'react';

type Props = {
  icon: ReactElement;
  title: string;
  content: string;
};

const Card = ({ icon, title, content }: Props) => {
  return (
    <Box
      sx={{
        maxWidth: '300px',
        backgroundColor: ' white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <Box
        sx={{
          height: '80px',
          width: '80px',

          borderRadius: '50%',
          backgroundColor: 'hsl(257, 27%, 26%)',
          marginTop: '-60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="h5"
        textAlign="center"
        color="black"
        fontWeight="700"
        margin="15px"
      >
        {title}
      </Typography>
      <Typography textAlign="center" fontWeight="500">
        {content}
      </Typography>
    </Box>
  );
};

export default Card;
