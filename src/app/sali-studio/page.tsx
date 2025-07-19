'use client';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const SaliStudioRepos = dynamic(() => import('@/components/SaliStudioRepos'), { ssr: false });

export default function SaliStudioPage() {
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
            background: 'linear-gradient(45deg, #0298f1 30%, #64B5F6 90%)', // タイトルグラデーションを調整
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: { xs: '3rem', sm: '4rem', md: '4.5rem' },
          }}
        >
          Sali Studio
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' }}
      >
        <Typography variant="h5" component="p" color="text.secondary" sx={{ mb: 4 }}>
          さりさば内の開発チーム
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: 'easeInOut' }}
      >
        <Typography variant="body1" component="p" sx={{ mb: 4 }}>
          Sali Studioは、さりさば内で様々なプロジェクトを手掛ける開発チームです。
          ゲーム開発、ウェブサイト制作、ツール開発など、幅広い分野で活動しています。
          詳細については、今後の更新にご期待ください！
        </Typography>
      </motion.div>

      <SaliStudioRepos />
    </Container>
  );
}