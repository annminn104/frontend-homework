'use client';

import { Menu, MenuItem as MuiMenuItem, styled } from '@mui/material';

export const MenuWrap = styled(
  Menu,
  {}
)(({ theme }) => ({ '.MuiPaper-root': { boxShadow: theme.shadows[1], minWidth: '160px' }, '.MuiList-root': { padding: '4px' } }));

export const MenuItem = styled(MuiMenuItem, {})(({ theme }) => ({ columnGap: '8px' }));
