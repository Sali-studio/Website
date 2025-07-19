
'use client';
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Box, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // md以下のブレークポイントでモバイルと判断

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // 50pxスクロールしたら変更
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Sali Studio', href: '/sali-studio' },
    { name: 'Guild', href: '/guild' },
    { name: 'Servers', href: '/servers' },
    { name: 'News', href: '/news' },
    { name: 'Other Links', href: '/other-links' },
  ];

  const drawer = (
    <Box sx={{ textAlign: 'center', pt: 2 }}>
      <Typography
        variant="h6"
        component="div"
        sx={{
          my: 2,
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #0298f1 30%, #86ecff 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Salientten.jp
      </Typography>
      <List sx={{ px: 2 }}> {/* リスト全体に左右パディングを追加 */}
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding sx={{ mb: 1 }}> {/* 各アイテムの下にマージンを追加 */}
            <ListItemButton
              component={Link}
              href={item.href}
              onClick={handleDrawerToggle}
              sx={{
                textAlign: 'center',
                py: 1.5,
                borderRadius: theme.shape.borderRadius * 2, // 角丸を適用
                backgroundColor: theme.palette.background.paper + '1A', // 透明度のある背景色
                boxShadow: theme.shadows[0], // 影なし
                transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: theme.palette.primary.main + '1A', // ホバー時に青系の透明な背景色
                  boxShadow: theme.shadows[1], // ホバー時にわずかな影
                  transform: 'translateY(-2px)', // ホバー時の浮き上がり
                },
              }}
            >
              <ListItemText primary={item.name} primaryTypographyProps={{ variant: 'body1', fontWeight: 'medium', color: theme.palette.text.primary }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed" // fixed に変更
      sx={{
        sx={{
        backgroundColor: scrolled ? 'rgba(173, 216, 230, 0.3)' : 'transparent', // スクロールで水色系の透明な背景色に
        boxShadow: scrolled ? 3 : 0, // スクロールで影を追加
        transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out', // アニメーション
        backdropFilter: scrolled ? 'blur(10px) saturate(180%) contrast(120%)' : 'none', // スクロールで液体ガラス効果
        color: scrolled ? theme.palette.text.primary : 'inherit', // スクロールでテキスト色をテーマのprimary text色に変更
      }}
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            fontSize: '1.5rem',
            background: 'linear-gradient(45deg, #0298f1 30%, #86ecff 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Salientten.jp
          </Link>
        </Typography>
        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ ml: 2 }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex' }}>
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.1 }}>
                <Button
                  color="inherit"
                  component={Link}
                  href={item.href}
                  sx={{
                    borderRadius: '20px',
                    px: 2,
                    py: 1,
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: 'rgba(2, 152, 241, 0.1)',
                    },
                  }}
                >
                  {item.name}
                </Button>
              </motion.div>
            ))}
          </Box>
        )}
      </Toolbar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(255, 255, 255, 0.1)', // さらに透明度を下げた白
            boxShadow: theme.shadows[8], // Material 3のElevationを意識した影
            borderRadius: '16px 0 0 16px', // 右側だけ角丸
            backdropFilter: 'blur(10px) saturate(180%) contrast(120%)', // ガラス・アクリル効果を強化
          },
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;
