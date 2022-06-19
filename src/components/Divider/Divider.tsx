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
        borderLeft: `${
          orientation === 'horizontal' ? '9px solid' : '50px solid'
        }`,
        height: `${orientation === 'horizontal' ? '100px' : '10px'}`,
        borderColor: `${theme.palette.primary.main}`,
      }}
    />
  );
};

export default Divider;
