import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e53935',
    },
    secondary: {
      main: '#ff6f60',
    },
    background: {
      inactive: 'rgb(238, 238, 238)',
    },
    divider: 'rgb(208, 208, 208)',
  },
});

declare module '@mui/material/styles' {
  interface TypeBackground {
    inactive: string;
  }
}

export default theme;
