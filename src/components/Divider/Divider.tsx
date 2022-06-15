import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
type Props = {
  orientation: 'vertical' | 'horizontal';
};

const Divider = ({ orientation }: Props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        borderLeft: '9px solid',
        height: '100px',
        borderColor: `${theme.palette.primary.main}`,
      }}
    />
  );
};

export default Divider;
