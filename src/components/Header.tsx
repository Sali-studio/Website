
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
                display: 'flex', // アイコンとテキストを中央揃え
                alignItems: 'center', // アイコンとテキストを中央揃え
                py: 1.5,
                borderRadius: '28px', // より丸い形状
                backgroundColor: theme.palette.background.paper + '1A', // 透明度のある背景色
                boxShadow: theme.shadows[0], // 影なし
                transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: theme.palette.primary.main + '2A', // ホバー時に青系の透明な背景色を少し濃く
                  boxShadow: theme.shadows[3], // ホバー時に影を強調
                  transform: 'translateY(-3px)', // ホバー時の浮き上がりを強調
                },
              }}
            >
              {item.icon} {/* アイコンを追加 */}
              <ListItemText primary={item.name} primaryTypographyProps={{ variant: 'body1', fontWeight: 'medium', color: theme.palette.text.primary }} sx={{ ml: 2 }} /> {/* アイコンとテキストの間にスペース */}
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
        backgroundColor: 'transparent', // 常に透明
        boxShadow: 0, // 常に影なし
        transition: 'none', // トランジションなし
        backdropFilter: 'none', // 常にフィルターなし
        color: 'inherit', // 常にinherit
        borderRadius: '0', // 常に角丸なし
      }}
    >
      <Toolbar>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
          {/* アイコンを削除 */}
        </Link>
        <Button
          color="primary" // プライマリカラーを使用
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          sx={{
            ml: 'auto', // 右寄せにする
            minWidth: '56px', // ボタンの最小幅
            height: '56px', // ボタンの高さ
            borderRadius: '50%', // 円形にする
            boxShadow: theme.shadows[4], // 影を追加
            transition: 'all 0.3s ease-in-out', // ホバーアニメーション
            backgroundColor: theme.palette.primary.main, // 背景色
            color: theme.palette.primary.contrastText, // アイコンの色
            '&:hover': {
              backgroundColor: theme.palette.primary.dark, // ホバー時に濃くする
              boxShadow: theme.shadows[8], // ホバー時に影を強調
              transform: 'scale(1.05)', // ホバー時に少し拡大
            },
          }}
        >
          <MenuIcon />
        </Button>
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
            backgroundColor: theme.palette.surface.main + 'F2', // さらに不透明度を上げた白
            boxShadow: theme.shadows[12], // Material 3のElevationを意識した影
            borderRadius: '24px 0 0 24px', // 右側だけ角丸を強調
            backdropFilter: 'blur(16px) saturate(200%) contrast(120%)', // ガラス・アクリル効果を強化
          },
        }}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;
