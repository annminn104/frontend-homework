'use client';

import { CircleOutlined, ExpandLess, ExpandMore } from '@mui/icons-material';
import { Box, List, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React, { useState } from 'react';
import { SidebarContext } from '..';
import * as S from './styled';

type SidebarSubmenuProps = {
  children: React.ReactNode | string;
  icon?: React.ReactNode;
  title: string;
};

const SidebarSubmenu = React.forwardRef(function SidebarSubmenu(props: SidebarSubmenuProps, ref: React.Ref<HTMLDivElement>) {
  const { children, title, icon } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const customize = React.useContext(SidebarContext);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box>
      <S.CollapseButton onClick={handleClick}>
        <ListItemIcon>{icon ? icon : <CircleOutlined />}</ListItemIcon>
        {!customize.isCollapse && (
          <>
            <ListItemText>
              <Typography variant='caption' fontWeight={700}>
                {title}
              </Typography>
            </ListItemText>
            {isOpen ? <ExpandLess /> : <ExpandMore />}
          </>
        )}
      </S.CollapseButton>
      <S.CollapseContent in={isOpen} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          {children}
        </List>
      </S.CollapseContent>
    </Box>
  );
});

export default SidebarSubmenu;
