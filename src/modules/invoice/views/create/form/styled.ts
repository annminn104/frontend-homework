'use client';

import { Box, styled } from '@mui/material';

export const CreateFormWrap = styled(
  Box,
  {}
)(({ theme }) => ({
  '.MuiTableCell-root.MuiTableCell-head': {
    padding: theme.spacing(1),
    color: theme.palette.primary['main'],
    fontWeight: 700
  },
  '.MuiTableCell-root.MuiTableCell-body': {
    padding: theme.spacing(1),
    '.MuiInputBase-input.MuiOutlinedInput-input': {
      padding: '7.5px 8px'
    }
  }
}));
