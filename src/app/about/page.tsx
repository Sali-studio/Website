'use client';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  const members = [
    {
      id: 1,
      name: '白熊',
      role: '共同設立者 / Sali Studio代表',
      description: 'さりさばの設立者の一人であり、Sali Studioの代表を務めています。',
      avatar: '/images/bear_avatar.png', // 仮の画像パス
    },
    {
      id: 2,
      name: 'SalientTen',
      role: '共同設立者 / さりさば代表 / Sali Studioメンバー',
      description: '元のさりさばのリーダーでもあり、現在のさりさばの代表を務めています。様々なギルドの代表も務めています。',
      avatar: '/images/salientten_avatar.png', // 仮の画像パス
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
          さりさばについて
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: 'easeInOut' }}
      >
        <Typography variant="body1" component="p" sx={{ mb: 8, maxWidth: 800, mx: 'auto' }}>
          さりさばは、様々なゲームのギルドを運営したり、様々なゲームのサーバーを建ててサーバー間の交流を楽しむことができるコミュニティです。
          Sali Studioが様々なアプリケーション開発を行っています。
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
            <Grid item key={member.id} xs={12} sm={6} md={4}>
              <motion.div variants={itemVariants} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Card
                  sx={(theme) => ({
                    maxWidth: 345,
                    minHeight: 280, // カードの高さを調整
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'linear-gradient(135deg, #B3E5FC 0%, #90CAF9 100%)',
                    boxShadow: theme.shadows[3],
                    borderRadius: theme.shape.borderRadius * 2,
                    transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
                    '&:hover': {
                      boxShadow: theme.shadows[6],
                      transform: 'translateY(-5px)',
                    },
                  })}
                >
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Avatar alt={member.name} src={member.avatar} sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }} />
                    <Typography gutterBottom variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
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
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}