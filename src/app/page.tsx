
'use client';
import { Box, Button, Container, Typography } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react'; // useState を追加
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'; // Discordアイコンの代替としてChatアイコンを追加

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yTitle = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);
  const yDescription = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleTitleClick = () => {
    setShowEasterEgg(true);
    setTimeout(() => {
      setShowEasterEgg(false);
    }, 2000); // 2秒後に消える
  };

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
            onClick={handleTitleClick} // クリックイベントを追加
            sx={{
              fontWeight: 'bold',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '3rem', sm: '4rem', md: '4.5rem' }, // レスポンシブなフォントサイズ
              cursor: 'pointer', // カーソルをポインターに変更
              '&:hover': { opacity: 0.8 }, // ホバーエフェクト
            }}
          >
            すみれさば
          </Typography>
          {showEasterEgg && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="caption" color="text.secondary" sx={{ mt: -2, display: 'block' }}>
                ああ、無駄に多い選択肢の世界。世界に選択肢があるのではなく、選択肢が世界なのだ。（意味分かる人教えて）。
              </Typography>
            </motion.div>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' }}
          style={{ y: yDescription }} // パララックス効果を適用
        >
          <Typography variant="h5" component="p" color="text.secondary" sx={{ mb: 2 }}>
            「すみれさば」公式サイト
            現在サーバー移行期間中
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeInOut' }}
        >
          <Typography variant="body1" component="p" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
            すみれさばは、白熊とSumireによって共同設立された、様々なゲームのギルドを運営したり、様々なゲームのサーバーを建ててサーバー間の交流を楽しむことができるコミュニティです。
            そして、すみれさばの管轄にあるSumire Labsで様々なアプリケーション開発を行っています。
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: 'easeInOut' }}
          sx={{ mt: 4 }} // 上部のマージンを追加
        >
          <Button
            variant="contained" // contained に変更
            size="large"
            color="primary"
            href="https://discord.gg/rgwF6Xv44m"
            target="_blank"
            startIcon={<ChatBubbleOutlineIcon />}
            sx={{
              borderRadius: '50px', // より丸みを帯びた形状
              px: 4, // 左右のパディングを増やす
              py: 1.5, // 上下のパディングを増やす
              fontWeight: 'bold',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // 影を追加
              transition: 'all 0.3s ease-in-out', // ホバーアニメーション
              '&:hover': {
                transform: 'translateY(-3px)', // ホバーで少し浮き上がる
                boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)', // ホバーで影を強調
              },
            }}
          >
            Discordに参加
          </Button>
        </motion.div>
      </Box>
    </Container>
  );
}
