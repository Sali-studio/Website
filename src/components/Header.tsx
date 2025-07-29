
'use client';
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Box, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image'; // Image コンポーネントをインポート
import HomeIcon from '@mui/icons-material/Home'; // HomeIcon をインポート
import InfoIcon from '@mui/icons-material/Info'; // InfoIcon をインポート
import ScienceIcon from '@mui/icons-material/Science'; // ScienceIcon をインポート
import LinkIcon from '@mui/icons-material/Link'; // LinkIcon をインポート

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
    { name: 'Home', href: '/', icon: <HomeIcon /> },
    { name: 'About Us', href: '/about', icon: <InfoIcon /> },
    { name: 'Sumire Labs', href: '/sali-studio', icon: <ScienceIcon /> },
    { name: 'Other Links', href: '/other-links', icon: <LinkIcon /> },
  ];

  const drawer = (
    <Box sx={{ textAlign: 'center', pt: 2 }}>
      <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Image
          src="/images/profile/sumire_server_icon.png"
          alt="Sumire Server Icon"
          width={60} // アイコンのサイズを調整
          height={60} // アイコンのサイズを調整
          style={{ borderRadius: '50%', marginBottom: theme.spacing(2) }} // 丸いアイコンにする
        />
      </Link>
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
        backgroundColor: scrolled ? theme.palette.background.paper + 'E6' : 'transparent', // スクロールでテーマの背景色に
        boxShadow: scrolled ? theme.shadows[8] : 0, // スクロールで影を追加
        transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out', // アニメーション
        backdropFilter: scrolled ? 'blur(10px) saturate(180%) contrast(120%)' : 'none', // スクロールで液体ガラス効果
        color: scrolled ? theme.palette.text.primary : 'inherit', // スクロールでテキスト色をテーマのprimary text色に変更
        borderRadius: scrolled ? '0 0 24px 24px' : '0', // スクロール時に下部を丸くする
      }}
    >
      <Toolbar>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
          <Image
            src="/images/profile/sumire_server_icon.png"
            alt="Sumire Server Icon"
            width={40} // アイコンのサイズを調整
            height={40} // アイコンのサイズを調整
            style={{ borderRadius: '50%', marginRight: theme.spacing(1) }} // 丸いアイコンにする
          />
          
        </Link>
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
          <Box sx={{ display: 'flex', gap: 2 }}> {/* ボタン間のスペースを調整 */}
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.1 }}>
                <Button
                  color="inherit"
                  component={Link}
                  href={item.href}
                  startIcon={item.icon} // アイコンを追加
                  sx={{
                    borderRadius: '50px', // より丸いピル型
                    px: 3, // 左右のパディングを調整
                    py: 1.2, // 上下のパディングを調整
                    fontWeight: 'bold',
                    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', // 影を追加
                    transition: 'all 0.3s ease-in-out', // ホバーアニメーション
                    '&:hover': {
                      backgroundColor: 'rgba(2, 152, 241, 0.15)', // ホバー時の背景色を少し濃く
                      transform: 'translateY(-2px)', // ホバーで少し浮き上がる
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // ホバーで影を強調
                    },
                    '& .MuiButton-startIcon': {
                      marginRight: '8px', // アイコンとテキストの間のスペース
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
