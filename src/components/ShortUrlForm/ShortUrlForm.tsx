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
import { shortUrlFormStyles } from './ShortUrlForm.styles';

const ShortUrlForm = () => {
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
      <Box sx={shortUrlFormStyles.formContainer}>
        <TextField
          error={validateError}
          variant="outlined"
          placeholder="Shoren a link here..."
          disabled={isLoading}
          value={inputState}
          onChange={handleChange}
          helperText={validateError && 'Please add a link'}
          sx={shortUrlFormStyles.textInput}
        />
        <LoadingButton
          variant="contained"
          type="submit"
          loading={isLoading}
          sx={shortUrlFormStyles.submitButton}
        >
          {isLoading ? 'Loading...' : 'Shorten it!'}
        </LoadingButton>
      </Box>

      {domains.map((ele, index) => (
        <Box key={index} sx={shortUrlFormStyles.resultsContainer}>
          <Typography sx={shortUrlFormStyles.oryginalLink}>
            {ele.result.original_link}
          </Typography>
          <Divider sx={{ display: { xs: 'block', md: 'none' } }} />
          <Box sx={shortUrlFormStyles.shortLinkContainer}>
            <Typography sx={{ justifySelf: 'flex-end' }}>
              <Link
                underline="hover"
                href={ele.result.full_short_link2 as string}
              >
                {ele.result.full_short_link2}
              </Link>
            </Typography>

            {clickedBtn === index ? (
              <Button disabled sx={shortUrlFormStyles.disabledCopyButton}>
                Copied!
              </Button>
            ) : (
              <Button
                variant="contained"
                sx={shortUrlFormStyles.copyButton}
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
