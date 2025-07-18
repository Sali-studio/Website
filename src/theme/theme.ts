'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    // Material 3 のカラーパレットを意識した青を基調とした色
    primary: {
      main: '#0066CC', // Core blue
      light: '#42A5F5', // Lighter shade
      dark: '#003366', // Darker shade
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#66BB6A', // Complementary green
      light: '#81C784',
      dark: '#388E3C',
      contrastText: '#FFFFFF',
    },
    tertiary: {
      main: '#FFB74D', // Accent orange
      light: '#FFCC80',
      dark: '#FB8C00',
      contrastText: '#000000',
    },
    error: {
      main: '#B00020', // Material 3 Error color
      light: '#CF6679',
      dark: '#880E4F',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F5F5F5', // Light gray background for overall page
      paper: '#FFFFFF', // White for surfaces like cards
    },
    text: {
      primary: '#1C1B1F', // Dark gray for primary text
      secondary: '#49454F', // Medium gray for secondary text
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
      fontWeight: 700,
      fontSize: '3.5rem',
      letterSpacing: '-0.01562em',
      lineHeight: 1.1,
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      letterSpacing: '-0.00833em',
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 500,
      fontSize: '2rem',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.75rem',
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
          boxShadow: theme.shadows[1], // Material 3のElevation 1を意識
          transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
          '&:hover': {
            boxShadow: theme.shadows[3], // ホバー時のElevation 3を意識
            transform: 'translateY(-2px)', // ホバー時の浮き上がりを微調整
          },
        }),
      },
    },
  },
});

export default theme;