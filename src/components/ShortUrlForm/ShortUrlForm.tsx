import {
  Box,
  Button,
  TextField,
  Snackbar,
  Alert,
  Typography,
  Divider,
  Link,
} from '@mui/material';

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
      sx={{ backgroundColor: 'transparent', marginTop: '-90px' }}
    >
      {error && handleError(error)}
      <Box
        sx={{
          display: 'flex',
          borderRadius: '10px',
          flexDirection: { xs: 'column', md: 'row' },

          alignItems: ' stretch',
          backgroundColor: 'hsl(257, 27%, 26%)',
          backgroundImage: {
            xs: 'url(images/bg-shorten-mobile.svg)',
            md: 'url(images/bg-shorten-desktop.svg)',
          },
          backgroundPosition: 'right top',
          backgroundRepeat: 'no-repeat',
          padding: { xs: '1.5em', md: '3em' },
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
              borderRadius: '5px',

              backgroundColor: 'white',
              color: 'black',
            },

            '& .MuiOutlinedInput-root.Mui-error': {
              color: 'red',
            },
          }}
        />
        <LoadingButton
          variant="contained"
          type="submit"
          loading={isLoading}
          sx={{
            width: { xs: '100%', md: '20%' },
            borderRadius: '5px',
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
            alignItems: { xs: 'unset', md: 'center' },
            justifyContent: { xs: 'unset', md: 'space-between' },
            gap: '1em',
            padding: '1em',
            backgroundColor: 'white',
            marginTop: '1em',
            borderRadius: '5px',
          }}
        >
          <Typography
            sx={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',

              color: 'black',
            }}
          >
            {ele.result.original_link}
          </Typography>
          <Divider sx={{ display: { xs: 'block', md: 'none' } }} />
          <Box
            sx={{
              display: 'flex',
              gap: '1em',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'unset', md: 'center' },
            }}
          >
            <Typography sx={{ justifySelf: 'flex-end' }}>
              <Link
                underline="hover"
                href={ele.result.full_short_link2 as string}
              >
                {ele.result.full_short_link2}
              </Link>
            </Typography>

            {clickedBtn === index ? (
              <Button
                disabled
                sx={{
                  backgroundColor: 'hsl(260, 8%, 14%) !important',
                  width: { xs: '100%', md: '150px' },
                  borderRadius: '5px',
                }}
              >
                Copied!
              </Button>
            ) : (
              <Button
                variant="contained"
                sx={{
                  width: { xs: '100%', md: '150px' },
                  borderRadius: '5px',
                }}
                onClick={(e) =>
                  copyToClipboard(e, ele.result.full_short_link2, index)
                }
              >
                Copy
              </Button>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ShortUrlForm;
