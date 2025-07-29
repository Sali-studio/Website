
'use client';
import React, { useState } from 'react'; // useState を追加
import { Box, Container, Typography, BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  const [value, setValue] = React.useState(pathname);
  const [showHiddenMessage, setShowHiddenMessage] = useState(false);

  const handleHiddenClick = () => {
    setShowHiddenMessage(true);
    setTimeout(() => {
      setShowHiddenMessage(false);
    }, 3000); // 3秒後に消える
  };

  React.useEffect(() => {
    setValue(pathname);
  }, [pathname]);

  return (
    <Box sx={{ width: '100%', mt: 'auto' }}>
      <Container maxWidth="lg" sx={{ py: 3, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          © 2025 Sumire Labs. All rights reserved.
        </Typography>
        {/* <AccessCounter /> */}
        <Box
          sx={{
            width: '20px',
            height: '20px',
            position: 'absolute',
            bottom: 0,
            right: 0,
            cursor: 'pointer',
            // backgroundColor: 'rgba(255,0,0,0.1)', // デバッグ用
          }}
          onClick={handleHiddenClick}
        />
        {showHiddenMessage && (
          <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
            サーモンを持たない不審な行動は果たして許可されるのだろうか
          </Typography>
        )}
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
