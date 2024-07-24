import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

import { Typography } from '@mui/material';
import * as S from './styled';

const Logo = () => {
  return (
    <S.LogoWrap>
      <RequestQuoteIcon color='primary' />
      <Typography variant='h6' color='primary'>
        Microinvoice
      </Typography>
    </S.LogoWrap>
  );
};

export default Logo;
