'use client';

import { Box, styled } from '@mui/material';

export const PaginationWrap = styled(
  Box,
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'row', 'space-between', 'center'),
  width: '100%',
  '.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input': {
    padding: '4.5px 20px'
  },
  '.MuiSvgIcon-root.MuiSelect-iconOutlined': {
    display: 'none'
  }
}));

export const PaginationChangeSize = styled(
  Box,
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'row', 'space-between', 'center'),
  columnGap: '8px'
}));
