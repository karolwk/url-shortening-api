import { IconButton, Menu, SxProps, MenuItem, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import AuthMenu from '../AuthMenu/AuthMenu';
import React from 'react';
import { theme } from '../../shared/globalTheme';
import { mobileMenuStyles } from './MobileMenu.styles';

type Props = {
  pages: string[];
  sx?: SxProps;
  anchorEl: HTMLElement | null;
  onOpen(event: React.MouseEvent<HTMLElement>): void;
  onClose(event: React.MouseEvent<HTMLElement>): void;
};

const MobileMenu: React.FC<Props> = ({
  pages,
  sx,
  anchorEl,
  onClose,
  onOpen,
}) => {
  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={onOpen}
        color="primary"
      >
        <MenuIcon fontSize="large" sx={{ color: theme.palette.text.primary }} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorEl)}
        onClose={onClose}
        sx={sx}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={onClose}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
        <Divider
          sx={{
            backgroundColor: theme.palette.text.primary,
            maxWidth: '70%',
            margin: 'auto',
          }}
        />
        <AuthMenu
          styles={mobileMenuStyles.authMenu}
          onLoginBtnClick={onClose}
          onSignBtnClick={onClose}
        />
      </Menu>
    </>
  );
};

export default MobileMenu;
