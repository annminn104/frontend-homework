'use client';

import { styled } from '@mui/material';

export const LogoWrap = styled('div', {})(({ theme }) => ({ ...theme.functions.adjustFlex('flex', 'row', 'start', 'center'), columnGap: '8px' }));
