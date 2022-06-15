import { List, ListItem, ListItemText, SxProps } from '@mui/material';

type Props = {
  listItems: string[];
  sx?: SxProps;
  subheader?: JSX.Element | string;
  align?: 'center' | 'left';
};

const TextList = ({ listItems, subheader, sx, align }: Props) => {
  return (
    <List sx={sx} subheader={subheader}>
      {listItems.map((ele) => (
        <ListItem key={ele}>
          <ListItemText primary={ele} />
        </ListItem>
      ))}
    </List>
  );
};

export default TextList;
