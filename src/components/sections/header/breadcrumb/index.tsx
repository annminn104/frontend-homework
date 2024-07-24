import React from 'react';

import * as S from './styled';

type BreadcrumbProps = {
  title: string;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title }) => {
  return (
    <S.BreadcrumbWrap>
      <S.BreadcrumbTitle>{title}</S.BreadcrumbTitle>
    </S.BreadcrumbWrap>
  );
};

export default Breadcrumb;
