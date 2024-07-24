import { Components, Theme } from '@mui/material/styles';

export default function SvgIcon(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiSvgIcon: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
