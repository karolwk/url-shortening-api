import { Box, Typography } from '@mui/material';
import { ReactElement } from 'react';
import { cardStyles } from './Card.styles';

type Props = {
  icon: ReactElement;
  title: string;
  content: string;
  marginTop?: string;
};

const Card = ({ icon, title, content, marginTop }: Props) => {
  return (
    <Box sx={{ ...cardStyles.cardBox, marginTop: marginTop }}>
      <Box sx={cardStyles.iconBox}>{icon}</Box>
      <Typography variant="h5" sx={cardStyles.title}>
        {title}
      </Typography>
      <Typography fontWeight="500" sx={cardStyles.content}>
        {content}
      </Typography>
    </Box>
  );
};

export default Card;
