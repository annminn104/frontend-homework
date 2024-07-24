import { CircularProgress } from '@mui/material';

import * as S from './styled';

type LoadingSectionProps = {
  isPending: boolean;
  children?: React.ReactNode;
};

const LoadingSection: React.FC<LoadingSectionProps> = ({ isPending, children }) => {
  return (
    <>
      <S.LoadingWrap open={isPending}>
        <CircularProgress color='inherit' />
      </S.LoadingWrap>
      {children}
    </>
  );
};

export default LoadingSection;
