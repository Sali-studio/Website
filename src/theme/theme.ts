
'use client';
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0298f1', // Primary color (さりさばの青)
      light: '#86ecff', // グラデーションのもう一方の青
      dark: '#0069C0',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#E8DEF8', // Secondary color
      light: '#F0E8FF',
      dark: '#B8A8C8',
      contrastText: '#000000',
    },
    error: {
      main: '#B00020', // Error color
      light: '#CF6679',
      dark: '#880E4F',
      contrastText: '#FFFFFF',
    },
    background: {
      default: 'transparent', // CssBaseline の背景色を透明に設定
      paper: '#FFFBFE', // Surface color
    },
    text: {
      primary: '#1C1B1F',
      secondary: '#49454F',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 900,
      fontSize: '4.5rem',
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontWeight: 800,
      fontSize: '3.5rem',
      letterSpacing: '-0.00833em',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6, // 読みやすさ向上のため行間を広げる
    },
    button: {
      textTransform: 'none', // ボタンのテキストを大文字にしない
      fontWeight: 600,
    },
  },
components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: 'transparent', // CssBaseline が body の背景を上書きしないように透明に設定
        },
      },
    },
  },
});


export default theme;
