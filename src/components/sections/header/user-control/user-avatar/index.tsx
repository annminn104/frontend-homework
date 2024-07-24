import { Avatar, IconButton, Tooltip } from '@mui/material';
import React from 'react';

type UserAvatarProps = {
  onShowMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const UserAvatar: React.FC<UserAvatarProps> = ({ onShowMenu }) => {
  return (
    <Tooltip title='User settings'>
      <IconButton onClick={onShowMenu}>
        <Avatar alt='Avatar User' src='https://images.unsplash.com/photo-1639628735078-ed2f038a193e?q=100&w=100' />
      </IconButton>
    </Tooltip>
  );
};

export default UserAvatar;
