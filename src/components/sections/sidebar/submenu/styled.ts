'use client';

import { Collapse, ListItemButton, styled } from '@mui/material';

export const CollapseButton = styled(
  ListItemButton,
  {}
)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  '.MuiSvgIcon-root, .MuiTypography-root': {
    color: theme.palette.primary['main']
  },
  '.MuiListItemIcon-root': {
    minWidth: '34px'
  }
}));

export const CollapseContent = styled(
  Collapse,
  {}
)(({ theme }) => ({
  '.MuiButtonBase-root': {
    paddingLeft: theme.spacing(4)
  }
}));
