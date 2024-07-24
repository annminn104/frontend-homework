'use client';

import { Box, styled } from '@mui/material';

export const ListWrap = styled(
  Box,
  {}
)(({ theme }) => ({ ...theme.functions.adjustFlex('flex', 'column', 'flex-start', 'initial'), rowGap: theme.spacing(2) }));

export const ListBox = styled(
  Box,
  {}
)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.common.white,
  borderRadius: theme.spacing(1),
  '.MuiTableContainer-root': { height: `calc(100vh - 364px)` }
}));
