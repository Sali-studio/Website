'use client';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const NewsList = dynamic(() => import('@/components/NewsList'), { ssr: false });

export default function NewsPage() {
  return (
    <Container
      component="main"
      maxWidth="md" // maxWidth を追加
      sx={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        py: 8,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #FFC107 30%, #FFEB3B 90%)', // ニュースタブ用のグラデーション
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: { xs: '3rem', sm: '4rem', md: '4.5rem' },
          }}
        >
          News
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' }}
      >
        <Typography variant="h5" component="p" color="text.secondary" sx={{ mb: 4 }}>
          最新情報をお届けします
        </Typography>
      </motion.div>

      <NewsList />
    </Container>
  );
}