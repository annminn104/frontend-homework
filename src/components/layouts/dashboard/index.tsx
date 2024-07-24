import { SIDEBAR_MENU, SIDEBAR_WIDTH } from '@/common/mocks/layout';
import Header from '@/sections/header';
import Sidebar from '@/sections/sidebar';
import SidebarMenuItem from '@/sections/sidebar/menu-item';
import SidebarMenuList from '@/sections/sidebar/menu-list';
import SidebarSubmenu from '@/sections/sidebar/submenu';
import React from 'react';
import * as S from './styled';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <S.LayoutWrap>
      <Header logoWidth={SIDEBAR_WIDTH} />
      <S.LayoutContainer>
        <Sidebar width={SIDEBAR_WIDTH}>
          {SIDEBAR_MENU.map((menu) => (
            <SidebarMenuList subHeading={menu.subHeading} key={menu.key}>
              {menu.items.map((item) => (
                <React.Fragment key={item.key}>
                  {item?.collapse ? (
                    <SidebarSubmenu title={item.label} {...item}>
                      {item?.collapse.map((collapse) => <SidebarMenuItem {...collapse} key={collapse.key} />)}
                    </SidebarSubmenu>
                  ) : (
                    <SidebarMenuItem {...item} key={item.key} />
                  )}
                </React.Fragment>
              ))}
            </SidebarMenuList>
          ))}
        </Sidebar>
        <S.LayoutContent as='main'>{children}</S.LayoutContent>
      </S.LayoutContainer>
    </S.LayoutWrap>
  );
};

export default DashboardLayout;
