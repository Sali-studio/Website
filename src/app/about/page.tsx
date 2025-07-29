'use client';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  const theme = useTheme();
  const members = [
    {
      id: 1,
      name: '白熊',
      role: 'すみれさばスタッフ兼Sumire Labs代表',
      description: 'すみれさばの設立者の一人であり、Sumire Labsの代表を務めています。',
      avatar: '/images/profile/shirokumaicon.png',
    },
    {
      id: 2,
      name: 'Sumire',
      role: 'すみれさば鯖主',
      description: 'すみれさばの鯖主を務めています。',
      avatar: '/images/profile/sumireicon.png', // 仮のアイコンパス
    },
    // 他の主要メンバーがいればここに追加してください
  ];

  return (
    <Container
      component="main"
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
            background: 'linear-gradient(45deg, #0298f1 30%, #64B5F6 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: { xs: '3rem', sm: '4rem', md: '4.5rem' },
          }}
        >
          About Us
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' }}
      >
        <Typography variant="h5" component="p" color="text.secondary" sx={{ mb: 4 }}>
          すみれさばについて
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: 'easeInOut' }}
      >
        <Typography variant="body1" component="p" sx={{ mb: 8, maxWidth: 800, mx: 'auto' }}>
          さりさばは、様々なゲームのギルドを運営したり、様々なゲームのサーバーを建ててサーバー間の交流を楽しむことができるコミュニティです。
          Sumire Labsが様々なアプリケーション開発を行っています。
        </Typography>
      </motion.div>

      <Box sx={{ mt: 8, width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: 'easeInOut' }}
        >
          <Typography variant="h2" component="h2" textAlign="center" gutterBottom>
            Our Team
          </Typography>
        </motion.div>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          component={motion.div}
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          sx={{ mt: 4 }}
        >
          {members.map((member) => (
            <Grid
              item
              key={member.id}
              xs={12}
              sm={6}
              md={4}
              component={motion.div} // Grid item を motion.div にする
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Card
                sx={(theme) => ({
                  maxWidth: 345,
                  minHeight: 280, // カードの高さを調整
                  display: 'flex',
                  flexDirection: 'column',
                  background: theme.palette.surfaceContainerHigh, // テーマのサーフェスカラーを使用
                  boxShadow: theme.shadows[3],
                  borderRadius: '28px', // より柔らかな角丸
                  transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: theme.shadows[8], // ホバー時に影を強調
                    transform: 'translateY(-8px)', // ホバー時の浮き上がりを強調
                  },
                })}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Avatar
                    alt={member.name}
                    src={member.avatar}
                    sx={{
                      width: 96, // アバターサイズを少し大きく
                      height: 96, // アバターサイズを少し大きく
                      mx: 'auto',
                      mb: 2,
                      border: `4px solid ${theme.palette.primary.main}`, // プライマリカラーのリング
                      boxShadow: theme.shadows[3], // アバターにも影
                    }}
                  />
                  <Typography gutterBottom variant="h6" component="h3" sx={{ fontWeight: 'bold', color: theme.palette.text.primary }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {member.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ minHeight: 60, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {member.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
      </Box>
    </Container>
  );
}