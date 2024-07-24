'use client';

import { usePathname } from '@/navigation';
import { CircleOutlined } from '@mui/icons-material';
import { ListItemIcon, ListItemText, Typography } from '@mui/material';

import Link from 'next/link';
import React from 'react';
import { SidebarContext } from '..';
import * as S from './styled';

type SidebarMenuItemProps = {
  label: React.ReactNode | string;
  icon?: React.ReactNode;
  link?: string;
};

const SidebarMenuItem = React.forwardRef(function SidebarMenuItem(props: SidebarMenuItemProps, ref: React.Ref<HTMLDivElement>) {
  const { label, icon, link } = props;
  const pathname = usePathname();
  const customize = React.useContext(SidebarContext);

  return (
    <Link href={link ? link : '/'}>
      <S.ItemButton selected={pathname == link}>
        <ListItemIcon> {icon ? icon : <CircleOutlined />}</ListItemIcon>
        {!customize.isCollapse && (
          <ListItemText>
            <Typography variant='caption' color='primary' fontWeight={700}>
              {label}
            </Typography>
          </ListItemText>
        )}
      </S.ItemButton>
    </Link>
  );
});

export default SidebarMenuItem;
