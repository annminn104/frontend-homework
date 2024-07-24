import { PaletteMode, PaletteOptions } from '@mui/material';

export default function palette(themeMode: PaletteMode) {
  const lightMode: PaletteOptions = {
    mode: 'light'
  };

  const darkMode: PaletteOptions = { mode: 'dark' };

  const paletteMode: Record<PaletteMode, PaletteOptions> = {
    light: lightMode,
    dark: darkMode
  };

  return paletteMode[themeMode];
}
