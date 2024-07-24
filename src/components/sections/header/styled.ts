'use client';

import { HEADER_HEIGHT } from '@/common/mocks/layout';
import { AppBar, Box, styled } from '@mui/material';

export const HeaderWrap = styled(
  AppBar,
  {}
)(({ theme }) => ({
  '.MuiToolbar-root': {
    height: HEADER_HEIGHT
  }
}));

export const HeaderLogo = styled(Box, {})(({ theme }) => ({}));

export const HeaderBreadcrumb = styled(Box, {})(({ theme }) => ({ flexGrow: 1 }));

export const HeaderTool = styled(Box, {})(({ theme }) => ({ ...theme.functions.adjustFlex('flex', 'row', 'space-between', 'center') }));
