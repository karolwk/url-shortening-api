import {
  Box,
  Button,
  TextField,
  Snackbar,
  Alert,
  CircularProgress,
  Container,
  Typography,
  Divider,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import LoadingButton from '@mui/lab/LoadingButton';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import React from 'react';
import { useState } from 'react';
import { useTypedSelector } from '../../hooks/store';
import { useGetShortedDataMutation } from '../../store/services/api';

type Props = {};

const ShortUrlForm = (props: Props) => {
  const [open, setOpen] = useState(true);
  const [clickedBtn, setClickedBtn] = useState(-1);
  const [validateError, setValidateError] = useState(false);
  const [inputState, setInputState] = useState('');
  const { domains } = useTypedSelector((state) => state.domains);

  const [shortDomain, { isLoading, error }] = useGetShortedDataMutation();

  const getData = async (url: string) => {
    try {
      await shortDomain(url);
      !open && setOpen(true);
      inputState && setInputState('');
    } catch {
      console.log(error);
    }
  };

  const validateInput = (inputTxt: string) => {
    !inputTxt ? setValidateError(true) : setValidateError(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Removing 'http/s://' from string before we send it to API

    inputState && getData(inputState.replace(/^https?:\/\//, ''));
    setClickedBtn(-1);
    validateInput(inputState);
    setInputState('');
  };

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(value);
  };

  const handleError = (err: FetchBaseQueryError | SerializedError) => {
    let errMsg;

    if ('status' in err) {
      //@ts-ignore
      errMsg = 'error' in err ? err.error : err.data.error;
    } else {
      errMsg = err.message;
    }

    return (
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="error" onClose={() => setOpen(false)}>
          {`Something went wrong! Error details: ${errMsg}`}
        </Alert>
      </Snackbar>
    );
  };

  const copyToClipboard = (
    e: React.MouseEvent<HTMLButtonElement>,
    url: string,
    index: number
  ) => {
    navigator.clipboard.writeText(url);
    setClickedBtn(index);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ backgroundColor: 'transparent' }}
    >
      {error && handleError(error)}
      <Box
        sx={{
          display: 'flex',
          borderRadius: '5px',
          flexDirection: { xs: 'column', md: 'row' },

          alignItems: ' stretch',
          backgroundColor: 'hsl(257, 27%, 26%)',
          backgroundImage: 'url(images/bg-shorten-mobile.svg)',
          backgroundPosition: 'right top',
          backgroundRepeat: 'no-repeat',
          padding: '1em',
          gap: '1em',
        }}
      >
        <TextField
          error={validateError}
          variant="outlined"
          placeholder="Shoren a link here..."
          disabled={isLoading}
          value={inputState}
          onChange={handleChange}
          helperText={validateError && 'Please add a link'}
          sx={{
            flexGrow: 2,

            '& .MuiOutlinedInput-root': {
              borderRadius: '15px',
              backgroundColor: 'white',
              height: '3em',
            },
            '& input:invalid': {
              borderWidth: 4,
            },
          }}
        />
        <LoadingButton
          variant="contained"
          type="submit"
          loading={isLoading}
          loadingPosition="end"
          sx={{
            flexGrow: 0.5,
            borderRadius: '5px',
            maxHeight: '3em',
          }}
        >
          {isLoading ? 'Loading...' : 'Shorten it!'}
        </LoadingButton>
      </Box>

      {domains.map((ele, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: '1em',
            padding: '1em',
          }}
        >
          <Typography
            sx={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
          >
            {ele.result.original_link}
          </Typography>
          <Divider sx={{ display: { xs: 'block', md: 'none' } }} />

          <Typography> {ele.result.full_short_link2}</Typography>
          {clickedBtn === index ? (
            <Button disabled sx={{ backgroundColor: 'purple !important' }}>
              Copied!
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={(e) =>
                copyToClipboard(e, ele.result.full_short_link2, index)
              }
            >
              Copy
            </Button>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default ShortUrlForm;
