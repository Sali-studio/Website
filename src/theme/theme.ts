'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    // Material 3 Expressive のカラーパレットを意識した色
    primary: {
      main: '#007BFF', // A vibrant blue
      light: '#63A4FF',
      dark: '#0056B3',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#625B71', // Muted Grey-Purple
      light: '#7A7289',
      dark: '#4A4458',
      contrastText: '#FFFFFF',
    },
    tertiary: {
      main: '#7D5260', // Warm Rose
      light: '#98697A',
      dark: '#633B48',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#B3261E', // Standard Material 3 Error
      light: '#E46962',
      dark: '#8C0001',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFBFE', // Light background
      paper: '#FFFBFE', // Surface color for cards, etc.
    },
    text: {
      primary: '#1C1B1F', // Dark text
      secondary: '#49454F', // Muted text
    },
    // Material 3 の Elevation に対応する色を定義
    surface: {
      main: '#FFFBFE', // Base surface
      variant: '#E7E0EC', // Slightly elevated surface
    },
    outline: {
      main: '#79747E', // Outline color
    },
    // Additional Material 3 colors
    surfaceVariant: {
      main: '#E7E0EC',
    },
    onSurfaceVariant: {
      main: '#49454F',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Noto Sans JP", "Helvetica", "Arial", sans-serif', // Noto Sans JP を追加
    h1: {
      fontWeight: 700,
      fontSize: '4rem', // Material 3 の Display Large に近いサイズ
      letterSpacing: '-0.01562em',
      lineHeight: 1.1,
    },
    h2: {
      fontWeight: 600,
      fontSize: '3rem', // Material 3 の Display Medium に近いサイズ
      letterSpacing: '-0.00833em',
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 500,
      fontSize: '2.5rem', // Material 3 の Headline Large に近いサイズ
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 500,
      fontSize: '2rem', // Material 3 の Headline Medium に近いサイズ
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.75rem', // Material 3 の Headline Small に近いサイズ
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.5rem', // Material 3 の Title Large に近いサイズ
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
          borderRadius: '28px', // Material 3 の角丸
          fontWeight: 600,
          transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out, color 0.3s ease-in-out, transform 0.3s ease-in-out',
          ...(ownerState.variant === 'contained' && {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            boxShadow: theme.shadows[2],
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
              boxShadow: theme.shadows[4],
              transform: 'translateY(-2px)',
            },
          }),
          ...(ownerState.variant === 'outlined' && {
            borderColor: theme.palette.outline.main,
            color: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
              borderColor: theme.palette.primary.dark,
              color: theme.palette.primary.contrastText,
              transform: 'translateY(-2px)',
            },
          }),
          ...(ownerState.variant === 'text' && {
            color: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              transform: 'translateY(-2px)',
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
          borderRadius: '28px', // Material 3 の角丸
          boxShadow: theme.shadows[1], // Material 3のElevation 1を意識
          transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
          '&:hover': {
            boxShadow: theme.shadows[3], // ホバー時のElevation 3を意識
            transform: 'translateY(-4px)', // ホバー時の浮き上がりを強調
          },
        }),
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({
          theme
        }) => ({
          transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-radius 0.3s ease-in-out',
        }),
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: ({
          theme
        }) => ({
          backgroundColor: theme.palette.surface.main + 'E6', // Drawer の背景色を Material 3 の Surface に合わせる
          boxShadow: theme.shadows[8],
          borderRadius: '16px 0 0 16px',
          backdropFilter: 'blur(10px) saturate(180%) contrast(120%)',
        }),
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: ({
          theme
        }) => ({
          borderRadius: '16px',
          '&:hover': {
            backgroundColor: theme.palette.primary.main + '1A',
            boxShadow: theme.shadows[1],
            transform: 'translateY(-2px)',
          },
        }),
      },
    },
  },
});

export default theme;