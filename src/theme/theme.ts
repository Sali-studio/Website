'use client';
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0298f1', // さりさばの青
      light: '#64B5F6', // 少し明るい青
      dark: '#0069C0', // 少し暗い青
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#86ecff', // さりさばの明るい青
      light: '#B3E5FC', // さらに明るい青
      dark: '#00B0FF', // 少し暗い青
      contrastText: '#000000',
    },
    tertiary: {
      main: '#BBDEFB', // カードのグラデーション終点の色
      light: '#E3F2FD',
      dark: '#64B5F6',
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
      paper: '#FFFFFF', // Surface color (白)
    },
    text: {
      primary: '#1C1B1F',
      secondary: '#49454F',
    },
    // Material 3 の Elevation に対応する色を定義
    surface: {
      main: '#FFFFFF',
      variant: '#F0F0F0',
    },
    outline: {
      main: '#79747E',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Noto Sans JP", "Helvetica", "Arial", sans-serif', // Noto Sans JP を追加
    h1: {
      fontWeight: 900,
      fontSize: '4.5rem',
      letterSpacing: '-0.01562em',
      lineHeight: 1.1,
    },
    h2: {
      fontWeight: 800,
      fontSize: '3.5rem',
      letterSpacing: '-0.00833em',
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.6,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.4,
    },
    overline: {
      fontSize: '0.625rem',
      lineHeight: 1.2,
      textTransform: 'uppercase',
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
    MuiButton: {
      styleOverrides: {
        root: ({
          ownerState,
          theme
        }) => ({
          borderRadius: theme.shape.borderRadius * 2, // より柔らかな角丸
          fontWeight: 600,
          ...(ownerState.variant === 'contained' && {
            boxShadow: theme.shadows[2],
            '&:hover': {
              boxShadow: theme.shadows[4],
            },
          }),
          ...(ownerState.variant === 'outlined' && {
            borderColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
              borderColor: theme.palette.primary.dark,
            },
          }),
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({
          theme
        }) => ({
          borderRadius: theme.shape.borderRadius * 2, // より柔らかな角丸
          boxShadow: theme.shadows[3],
          transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
          '&:hover': {
            boxShadow: theme.shadows[6],
            transform: 'translateY(-5px)',
          },
        }),
      },
    },
  },
});


export default theme;