'use client';

import React, { useState } from 'react';

import * as S from './styled';

export const SidebarContext = React.createContext({
  width: '270px',
  collapseWidth: '80px',
  textColor: '#8D939D',
  isCollapse: false
});

type SidebarProps = {
  children: React.ReactNode;
  isCollapse?: boolean;
  collapseWidth?: string;
  width?: string;
  textColor?: string;
};

const Sidebar: React.FC<SidebarProps> = ({ children, isCollapse = false, collapseWidth = '80px', width = '260px', textColor = '#2b2b2b' }) => {
  const [isSidebarHover, setIsSidebarHover] = useState<boolean>(false);
  const toggleWidth = isCollapse && !isSidebarHover ? collapseWidth : width;
  return (
    <S.SideWrap sx={{ width: toggleWidth }} component='aside'>
      <SidebarContext.Provider value={{ textColor, isCollapse, width, collapseWidth }}>{children}</SidebarContext.Provider>
    </S.SideWrap>
  );
};

export default Sidebar;
