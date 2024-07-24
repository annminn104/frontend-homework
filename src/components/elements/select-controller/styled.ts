'use client';

import { FormControl, styled } from '@mui/material';

export const FormControlWrap = styled(
  FormControl,
  {}
)(({ theme }) => ({
  '.MuiInputBase-root': {
    height: '40px'
  },
  '.MuiSelect-select': {
    padding: '12.5px'
  },
  '.MuiFormLabel-root': {
    top: '-4px',
    lineHeight: 1
  }
}));
