
'use client';
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <AppBar
      position="fixed" // fixed に変更
      sx={{
        backgroundColor: scrolled ? 'rgba(33, 33, 33, 0.7)' : 'transparent', // スクロールで背景色を濃いグレーに変更
        boxShadow: scrolled ? 3 : 0, // スクロールで影を追加
        transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out', // アニメーション
        backdropFilter: scrolled ? 'blur(8px)' : 'none', // スクロールでぼかし効果
        color: scrolled ? 'white' : 'inherit', // スクロールでテキスト色を白に変更
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
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button
            color="inherit"
            component={Link}
            href="/"
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
            Home
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button
            color="inherit"
            component={Link}
            href="/about"
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
            About Us
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button
            color="inherit"
            component={Link}
            href="/sali-studio"
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
            Sali Studio
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button
            color="inherit"
            component={Link}
            href="/guild"
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
            Guild
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button
            color="inherit"
            component={Link}
            href="/servers"
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
            Servers
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button
            color="inherit"
            component={Link}
            href="/other-links"
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
            Other Links
          </Button>
        </motion.div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
