import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { navBarStyles } from './NavBar.styles';
import MobileMenu from '../MobileMenu/MobileMenu';
import AuthMenu from '../AuthMenu/AuthMenu';
import Logo from '../../assets/Logo';
import { IconButton } from '@mui/material';

type Props = {};

const pages = ['Products', 'Pricing', 'Blog'];

const NavBar = (props: Props) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton>
            <Logo htmlColor="black" />
          </IconButton>
          <Box sx={navBarStyles.mobileMenu}>
            <MobileMenu
              pages={pages}
              sx={navBarStyles.popmenu}
              anchorEl={anchorElNav}
              onOpen={handleOpenNavMenu}
              onClose={handleCloseNavMenu}
            ></MobileMenu>
          </Box>

          <Box sx={navBarStyles.desktopLinks}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={navBarStyles.navMenuBtn}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <AuthMenu styles={navBarStyles.authMenu} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
