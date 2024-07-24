import OutputIcon from '@mui/icons-material/Output';
import PortraitIcon from '@mui/icons-material/Portrait';

import React from 'react';

import { Typography } from '@mui/material';
import * as S from './styled';

type UserDropdownProps = {
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
};

const UserDropdown: React.FC<UserDropdownProps> = ({ anchorEl, open, onClose }) => {
  const handleClickLogout = () => {};

  return (
    <S.MenuWrap anchorEl={anchorEl} open={open} onClose={onClose} variant='menu'>
      <S.MenuItem>
        <PortraitIcon />
        <Typography variant='body1'>Profile</Typography>
      </S.MenuItem>
      <S.MenuItem onClick={handleClickLogout}>
        <OutputIcon color='error' />
        <Typography variant='body1' color='error'>
          Logout
        </Typography>
      </S.MenuItem>
    </S.MenuWrap>
  );
};

export default UserDropdown;
