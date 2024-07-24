'use client';

import Logo from '@/components/elements/logo';
import Breadcrumb from './breadcrumb';
import UserControl from './user-control';

import { Toolbar } from '@mui/material';
import * as S from './styled';

type HeaderProps = {
  logoWidth: string;
};

const Header: React.FC<HeaderProps> = ({ logoWidth }) => {
  return (
    <S.HeaderWrap as='header' position='static'>
      <Toolbar>
        <S.HeaderLogo width={logoWidth}>
          <Logo />
        </S.HeaderLogo>
        <S.HeaderBreadcrumb>
          <Breadcrumb title='' />
        </S.HeaderBreadcrumb>
        <S.HeaderTool>
          <UserControl />
        </S.HeaderTool>
      </Toolbar>
    </S.HeaderWrap>
  );
};

export default Header;
