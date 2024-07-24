'use client';

import { Backdrop, styled } from '@mui/material';

export const LoadingWrap = styled(
  Backdrop,
  {}
)(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'absolute',
  borderTopLeftRadius: theme.spacing(3),
  backgroundColor: 'rgba(0, 0, 0, 0.1) !important'
}));
