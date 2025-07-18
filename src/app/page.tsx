
'use client';
import { Box, Button, Container, Typography } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'; // Discordアイコンの代替としてChatアイコンを追加

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yTitle = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);
  const yDescription = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

  return (
    <Container
      component="main"
      ref={ref}
      sx={{
        minHeight: 'calc(100vh - 64px)', // height を minHeight に変更
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Box>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          style={{ y: yTitle }} // パララックス効果を適用
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
              fontSize: { xs: '3rem', sm: '4rem', md: '4.5rem' }, // レスポンシブなフォントサイズ
            }}
          >
            さりさば
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' }}
          style={{ y: yDescription }} // パララックス効果を適用
        >
          <Typography variant="h5" component="p" color="text.secondary" sx={{ mb: 2 }}>
            「さりさば」公式サイト
            現在サーバー移行期間中
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeInOut' }}
        >
          <Typography variant="body1" component="p" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
            さりさばは、白熊とSalientTenによって共同設立された、様々なゲームのギルドを運営したり、様々なゲームのサーバーを建ててサーバー間の交流を楽しむことができるコミュニティです。
            そして、さりさばの管轄にあるSali Studioで様々なアプリケーション開発を行っています。
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: 'easeInOut' }}
        >
          <Button variant="outlined" size="large" color="primary" href="https://discord.gg/rgwF6Xv44m" target="_blank" startIcon={<ChatBubbleOutlineIcon />}> {/* variantをoutlinedに、Chatアイコンを追加 */}
            Discordに参加
          </Button>
        </motion.div>
      </Box>
    </Container>
  );
}
