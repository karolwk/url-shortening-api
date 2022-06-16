import { List, ListItem, ListItemText, SxProps } from '@mui/material';

type Props = {
  listItems: string[];
  sx?: SxProps;
  listItemSx?: SxProps;
  subheader?: JSX.Element | string;
};

const TextList = ({ listItems, subheader, sx, listItemSx }: Props) => {
  return (
    <List sx={sx} subheader={subheader}>
      {listItems.map((ele) => (
        <ListItem key={ele}>
          <ListItemText sx={listItemSx} primary={ele} />
        </ListItem>
      ))}
    </List>
  );
};

export default TextList;
