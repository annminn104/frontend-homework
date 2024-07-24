'use client';

import UserAvatar from './user-avatar';
import UserDropdown from './user-dropdown';

import { useState } from 'react';

const UserControl = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleShowMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <UserAvatar onShowMenu={handleShowMenu} />
      <UserDropdown anchorEl={anchorEl} open={open} onClose={handleCloseMenu} />
    </div>
  );
};

export default UserControl;
