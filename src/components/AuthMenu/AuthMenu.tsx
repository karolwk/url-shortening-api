import { Button, Box, SxProps } from '@mui/material';
import React from 'react';

type Props = {
  onLoginBtnClick?(e?: any): void;
  onSignBtnClick?(e?: any): void;
  styles?: {
    box?: SxProps;
    login?: SxProps;
    signUp?: SxProps;
  };
};

const AuthMenu: React.FC<Props> = ({
  styles,
  onLoginBtnClick,
  onSignBtnClick,
}) => {
  return (
    <Box sx={styles?.box}>
      <Button sx={styles?.login} onClick={onLoginBtnClick}>
        Login
      </Button>
      <Button sx={styles?.signUp} onClick={onSignBtnClick} variant="contained">
        Sign Up
      </Button>
    </Box>
  );
};

export default AuthMenu;
