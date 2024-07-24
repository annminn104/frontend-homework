'use client';

import { Box, List } from '@mui/material';
import React from 'react';
import { SidebarContext } from '..';
import * as S from './styled';

type SidebarMenuListProps = {
  children: React.ReactNode;
  subHeading?: string;
};

const SidebarMenuList = React.forwardRef(function SidebarMenuList(props: SidebarMenuListProps, ref: React.Ref<HTMLDivElement>) {
  const { children, subHeading = 'menu' } = props;

  const customize = React.useContext(SidebarContext);

  return (
    <Box>
      <List ref={ref} component='nav' subheader={<S.SubHeading color='primary'>{subHeading}</S.SubHeading>}>
        {children}
      </List>
    </Box>
  );
});

export default SidebarMenuList;
