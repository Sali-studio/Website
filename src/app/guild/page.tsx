'use client';
import { Box, Container, Typography, Grid, Card, CardContent, Link as MuiLink } from '@mui/material';
import { motion } from 'framer-motion';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'; // ゲームアイコン
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'; // 日付アイコン

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function GuildPage() {
  const guilds = [
    {
      id: 1,
      game: 'War Thunder',
      name: '=SaliS= (Sali Sakura Wings Squad)',
      description: '2025年1月26日に設立されたWar Thunderのクランです。金土日曜日には部隊戦を23:30から部隊戦をしています。',
      established: '2025/01/26',
      link: '#', // ギルドの外部サイトや情報ページへのリンクがあればここに
    },
    {
      id: 2,
      game: 'Blue Archive',
      name: '大天使AC',
      description: 'Blue Archiveのサークル、「大天使AC」です。IDは「127182」です。',
      established: '不明', // 設立日が不明な場合
      link: '#', // サークルの外部サイトや情報ページへのリンクがあればここに
    },
    // 他のギルドがあればここに追加してください
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
            background: 'linear-gradient(45deg, #0298f1 30%, #64B5F6 90%)', // タイトルグラデーションを調整
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: { xs: '3rem', sm: '4rem', md: '4.5rem' },
          }}
        >
          Our Guilds
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' }}
      >
        <Typography variant="h5" component="p" color="text.secondary" sx={{ mb: 4 }}>
          さりさばが運営するゲームギルド・サークル
        </Typography>
      </motion.div>

      <Box sx={{ mt: 8, width: '100%' }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <Grid
            container
            spacing={4}
            justifyContent="center"
            sx={{ mt: 4 }}
          >
            {guilds.map((guild) => (
              <Grid item key={guild.id} xs={12} sm={6} md={6}>
                <motion.div variants={itemVariants} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Card
                    sx={(theme) => ({
                      maxWidth: 345,
                      minHeight: 220, // カードの高さを調整
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'linear-gradient(135deg, #B3E5FC 0%, #90CAF9 100%)', // 中間の濃さに調整
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
                      <MuiLink href={guild.link} target="_blank" rel="noopener" sx={{ textDecoration: 'none', color: 'inherit' }}>
                        <Typography gutterBottom variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                          {guild.name}
                        </Typography>
                      </MuiLink>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: 60, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {guild.description}
                    </Typography>
                      <Box sx={(theme) => ({ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1, mt: 1.5 })}> 
                        <Box sx={(theme) => ({ display: 'flex', alignItems: 'center', p: 0.8, borderRadius: '8px', backgroundColor: theme.palette.action.hover })}> 
                          <SportsEsportsIcon sx={(theme) => ({ fontSize: 18, mr: 0.5, color: theme.palette.primary.main })} />
                          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{guild.game}</Typography>
                        </Box>
                        <Box sx={(theme) => ({ display: 'flex', alignItems: 'center', p: 0.8, borderRadius: '8px', backgroundColor: theme.palette.action.hover })}> 
                          <CalendarMonthIcon sx={(theme) => ({ fontSize: 18, mr: 0.5, color: theme.palette.info.main })} />
                          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{guild.established}</Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </Container>
  );
}
