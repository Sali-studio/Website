'use client';
import { Box, Container, Typography, Grid, Card, CardContent, Link as MuiLink } from '@mui/material';
import { motion } from 'framer-motion';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'; // ゲームアイコン
import PublicIcon from '@mui/icons-material/Public'; // サーバー状態アイコン (オンライン/IP)
import InfoIcon from '@mui/icons-material/Info'; // 情報アイコン

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ServersPage() {
  const servers = [
    {
      id: 1,
      game: 'Minecraft',
      version: '1.21.7 Vanilla',
      name: 'MC 1.21.7 Vanilla Server',
      description: 'Minecraft 1.21.7 Vanillaサーバー',
      status: 'Online',
      ip: 'play.example.com', // 仮のIPアドレス
      link: '#', // サーバー情報ページへのリンクがあればここに
    },
    {
      id: 2,
      game: 'Minecraft',
      version: '1.12.2 Forge',
      name: 'MC 1.12.2 Forge Server',
      description: 'Minecraft 1.12.2 Forgeサーバー',
      status: 'Online',
      ip: 'forge.example.com', // 仮のIPアドレス
      link: '#', // サーバー情報ページへのリンクがあればここに
    },
    {
      id: 3,
      game: 'Euro Truck Simulator 2',
      version: 'Multiplayer',
      name: 'さりさば ETS2 Server',
      description: 'Euro Truck Simulator 2のマルチプレイサーバーです',
      status: 'Online',
      ip: 'ets2.example.com', // 仮のIPアドレス
      link: '#', // サーバー情報ページへのリンクがあればここに
    },
    // 他のサーバーがあればここに追加してください
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
          Our Servers
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' }}
      >
        <Typography variant="h5" component="p" color="text.secondary" sx={{ mb: 4 }}>
          さりさばが運営するゲームサーバー
        </Typography>
      </motion.div>

      <Box sx={{ mt: 8, width: '100%' }}>
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
          {servers.map((server) => (
            <Grid item key={server.id} xs={12} sm={6} md={6}>
              <motion.div variants={itemVariants} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Card
                  sx={(theme) => ({
                    maxWidth: 345,
                    minHeight: 220, // カードの高さを調整
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
                    <MuiLink href={server.link} target="_blank" rel="noopener" sx={{ textDecoration: 'none', color: 'inherit' }}>
                      <Typography gutterBottom variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                        {server.name}
                      </Typography>
                    </MuiLink>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: 60, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {server.description}
                    </Typography>
                    <Box sx={(theme) => ({ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1, mt: 1.5 })}> 
                      <Box sx={(theme) => ({ display: 'flex', alignItems: 'center', p: 0.8, borderRadius: '8px', backgroundColor: theme.palette.action.hover })}> 
                        <SportsEsportsIcon sx={(theme) => ({ fontSize: 18, mr: 0.5, color: theme.palette.primary.main })} />
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{server.game}</Typography>
                      </Box>
                      <Box sx={(theme) => ({ display: 'flex', alignItems: 'center', p: 0.8, borderRadius: '8px', backgroundColor: theme.palette.action.hover })}> 
                        <InfoIcon sx={(theme) => ({ fontSize: 18, mr: 0.5, color: theme.palette.info.main })} />
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{server.version}</Typography>
                      </Box>
                      <Box sx={(theme) => ({ display: 'flex', alignItems: 'center', p: 0.8, borderRadius: '8px', backgroundColor: theme.palette.action.hover })}> 
                        <PublicIcon sx={(theme) => ({ fontSize: 18, mr: 0.5, color: server.status === 'Online' ? theme.palette.success.main : theme.palette.error.main })} />
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{server.status} ({server.ip})</Typography>
                      </Box>
                    </Box>
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
