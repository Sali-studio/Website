'use client';
import { Box, Container, Typography, Grid, Card, CardContent, Link as MuiLink } from '@mui/material';
import { motion } from 'framer-motion';
import LinkIcon from '@mui/icons-material/Link'; // リンクアイコン
import DiscordIcon from '@mui/icons-material/Discord'; // Discordアイコン
import TwitterIcon from '@mui/icons-material/Twitter'; // Twitterアイコン
import GitHubIcon from '@mui/icons-material/GitHub'; // GitHubアイコン

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function OtherLinksPage() {
  const links = [
    {
      id: 1,
      name: 'さりさば Discord',
      description: 'さりさばの公式Discordサーバーです。',
      url: 'https://discord.gg/rgwF6Xv44m',
    },
    {
      id: 2,
      name: 'SalientTen X',
      description: 'さりさばの最新情報はこちらでチェック！',
      url: 'https://x.com/SalientTen',
    },
    {
      id: 3,
      name: 'Sali Studio GitHub',
      description: 'Sali StudioのGithubリポジトリです。開発中のプロジェクトなどを見れます。',
      url: 'https://github.com/Sali-studio',
    },
    // 他のリンクがあればここに追加してください
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
          Other Links
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' }}
      >
        <Typography variant="h5" component="p" color="text.secondary" sx={{ mb: 4 }}>
          すみれさば関連の便利なリンク集
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
          {links.map((link) => (
            <Grid item key={link.id} xs={12} sm={6} md={6}>
              <motion.div variants={itemVariants} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <MuiLink href={link.url} target="_blank" rel="noopener" sx={{ textDecoration: 'none', color: 'inherit' }}>
                  <Card
                    sx={(theme) => ({
                      maxWidth: 345,
                      minHeight: 180, // カードの高さを調整
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
                      <Typography gutterBottom variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                        {link.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: 60, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {link.description}
                    </Typography>
                      <Box sx={(theme) => ({
                        display: 'flex', alignItems: 'center', p: 0.8, borderRadius: '16px', // チップのような形状
                        backgroundColor: theme.palette.surfaceContainerLow, // 低いElevationのサーフェスカラー
                        boxShadow: theme.shadows[1],
                      })}> 
                        {link.icon} {/* アイコンを表示 */}
                        <Typography variant="body2" sx={{ fontWeight: 'bold', ml: 0.5 }}>{link.name}</Typography> 
                      </Box>
                    </CardContent>
                  </Card>
                </MuiLink>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
