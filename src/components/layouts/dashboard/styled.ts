'use client';

import { HEADER_HEIGHT, SIDEBAR_WIDTH } from '@/common/mocks/layout';
import { Box, styled } from '@mui/material';

export const LayoutWrap = styled('div', {})(({ theme }) => ({ ...theme.functions.adjustFlex('flex', 'column', 'flex-start', 'initial') }));

export const LayoutContainer = styled(
  Box,
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'row', 'flex-start', 'initial'),
  'aside, main': { minHeight: `calc(100vh - ${HEADER_HEIGHT})` },
  aside: {
    minWidth: SIDEBAR_WIDTH
  }
}));

export const LayoutContent = styled(
  Box,
  {}
)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  backgroundColor: theme.palette.grey[200],
  borderTopLeftRadius: theme.spacing(3),
  position: 'relative'
}));
