
'use client';
import React from 'react';
import { Box, Container, Typography, BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AccessCounter from './AccessCounter'; // AccessCounterコンポーネントをインポート

const Footer = () => {
  const pathname = usePathname();
  const [value, setValue] = React.useState(pathname);

  React.useEffect(() => {
    setValue(pathname);
  }, [pathname]);

  return (
    <Box sx={{ width: '100%', mt: 'auto' }}>
      <Container maxWidth="lg" sx={{ py: 3, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          © 2025 Sali Studio. All rights reserved.
        </Typography>
        <AccessCounter /> {/* アクセスカウンターを追加 */}
      </Container>

      {/* Mobile Bottom Navigation */}
      {/* <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: { xs: 'block', md: 'none' } }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} component={Link} href="/" />
        </BottomNavigation>
      </Paper> */}
    </Box>
  );
};

export default Footer;
