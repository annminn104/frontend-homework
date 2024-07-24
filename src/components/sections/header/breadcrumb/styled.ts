'use client';

import { styled } from '@mui/material';

export const BreadcrumbWrap = styled(
  'div',
  {}
)(({ theme }) => ({ ...theme.functions.adjustFlex('flex', 'row', 'start', 'center'), columnGap: '8px' }));

export const BreadcrumbTitle = styled('div', {})(({ theme }) => ({}));
