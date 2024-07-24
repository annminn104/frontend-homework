'use client';

import { Box, styled } from '@mui/material';

export const CreateWrap = styled(
  'form',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'column', 'flex-start', 'initial'),
  rowGap: theme.spacing(2)
}));
export const CreateBox = styled(
  Box,
  {}
)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.common.white,
  borderRadius: theme.spacing(1)
}));
