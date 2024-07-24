'use client';

import { ListItemButton, styled } from '@mui/material';

export const ItemButton = styled(
  ListItemButton,
  {}
)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  margin: theme.spacing(0.5),
  '&.Mui-selected': {
    backgroundColor: theme.palette.primary['main'],
    color: theme.palette.common.white,
    '.MuiSvgIcon-root, .MuiTypography-root': {
      color: theme.palette.common.white
    },
    '&:hover': {
      backgroundColor: theme.palette.primary['main']
    }
  },
  '.MuiSvgIcon-root, .MuiTypography-root': {
    color: theme.palette.primary['main']
  },
  '.MuiListItemIcon-root': {
    minWidth: '34px'
  }
}));
