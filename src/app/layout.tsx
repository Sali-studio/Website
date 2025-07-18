
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme/theme';

import Header from '@/components/Header';

import Footer from '@/components/Footer';

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <body style={{ background: 'linear-gradient(135deg, #E0F7FA 0%, #BBDEFB 100%)', backgroundAttachment: 'fixed' }}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            {props.children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
