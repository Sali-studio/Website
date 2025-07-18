'use client';
import { Box, Container, Typography, Grid, Card, CardContent, Link as MuiLink, CircularProgress, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import GavelIcon from '@mui/icons-material/Gavel'; // ライセンスアイコンを追加
import { useEffect, useState } from 'react';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SaliStudioPage() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const repoNames = [
          { owner: 'Sali-studio', repo: 'Luna' },
          { owner: 'Sali-studio', repo: 'Relauncher-Unofficial' },
          // 他に表示したいリポジトリがあればここに追加してください
          // 例: { owner: 'your-github-username', repo: 'your-repo-name' },
        ];

        const fetchedRepos = await Promise.all(
          repoNames.map(async ({ owner, repo }) => {
            const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
            if (!response.ok) {
              throw new Error(`GitHub API error: ${response.statusText}`);
            }
            const data = await response.json();
            return {
              id: data.id,
              name: data.name,
              description: data.description || 'No description provided.',
              stars: data.stargazers_count,
              forks: data.forks_count,
              language: data.language || 'Unknown',
              url: data.html_url,
              license: data.license ? data.license.spdx_id : 'No license', // ここを追加
            };
          })
        );
        setRepos(fetchedRepos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

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

      <Box sx={{ mt: 8, width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: 'easeInOut' }}
        >
          <Typography variant="h2" component="h2" textAlign="center" gutterBottom>
            Our GitHub Repositories
          </Typography>
        </motion.div>
        {loading && <CircularProgress sx={{ mt: 4 }} />}
        {error && <Typography color="error" sx={{ mt: 4 }}>Error: {error}</Typography>}
        {!loading && !error && repos.length === 0 && (
          <Typography sx={{ mt: 4 }}>No repositories found.</Typography>
        )}
        {!loading && !error && repos.length > 0 && (
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
            {repos.map((repo) => (
              <Grid item key={repo.id} xs={12} sm={6} md={6}> {/* mdを6に変更 */}
                <motion.div variants={itemVariants} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}> {/* アニメーション微調整 */}
                  <Card
                    sx={(theme) => ({
                      maxWidth: 345, // カードの最大幅を設定
                      minHeight: 180, // 最小の高さを調整
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'linear-gradient(135deg, #B3E5FC 0%, #90CAF9 100%)', // 中間の濃さに調整
                      boxShadow: theme.shadows[3], // Material 3 Elevationを意識したシャドウ
                      borderRadius: theme.shape.borderRadius * 2, // Material 3の角丸
                      transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
                      '&:hover': {
                        boxShadow: theme.shadows[6], // ホバー時のシャドウ
                        transform: 'translateY(-5px)', // ホバー時の浮き上がり
                      },
                    })}
                  >
                    <CardContent sx={{ flexGrow: 1, p: 3 }}> {/* パディング調整 */}
                      <MuiLink href={repo.url} target="_blank" rel="noopener" sx={{ textDecoration: 'none', color: 'inherit' }}>
                        <Typography gutterBottom variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 1 }}> {/* variantをh6に、mbを調整 */}
                          {repo.name}
                        </Typography>
                      </MuiLink>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: 60, overflow: 'hidden', textOverflow: 'ellipsis' }}> {/* 説明文のスタイル調整 */}
                        {repo.description}
                      </Typography>
                      <Divider sx={{ my: 1.5 }} /> {/* 区切り線マージン調整 */}
                      <Box sx={(theme) => ({ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1, mt: 1.5 })}> {/* マージン調整 */}
                        <Box sx={(theme) => ({ display: 'flex', alignItems: 'center', p: 0.8, borderRadius: '8px', backgroundColor: theme.palette.action.hover })}> {/* 背景色をテーマに合わせる */}
                          <StarIcon sx={(theme) => ({ fontSize: 18, mr: 0.5, color: theme.palette.warning.main })} /> {/* アイコンサイズ、色調整 */}
                          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{repo.stars}</Typography> {/* variantをbody2に */}
                        </Box>
                        <Box sx={(theme) => ({ display: 'flex', alignItems: 'center', p: 0.8, borderRadius: '8px', backgroundColor: theme.palette.action.hover })}> {/* 背景色をテーマに合わせる */}
                          <ForkRightIcon sx={(theme) => ({ fontSize: 18, mr: 0.5, color: theme.palette.success.main })} /> {/* アイコンサイズ、色調整 */}
                          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{repo.forks}</Typography> {/* variantをbody2に */}
                        </Box>
                        <Box sx={(theme) => ({ display: 'flex', alignItems: 'center', p: 0.8, borderRadius: '8px', backgroundColor: theme.palette.action.hover })}> {/* 背景色をテーマに合わせる */}
                          <Typography variant="body2" sx={{ fontStyle: 'italic', fontWeight: 'bold' }}>{repo.language}</Typography> {/* variantをbody2に */}
                        </Box>
                        {repo.license && repo.license !== 'No license' && (
                          <Box sx={(theme) => ({ display: 'flex', alignItems: 'center', p: 0.8, borderRadius: '8px', backgroundColor: theme.palette.action.hover })}> {/* 背景色をテーマに合わせる */}
                            <GavelIcon sx={(theme) => ({ fontSize: 18, mr: 0.5, color: theme.palette.text.secondary })} /> {/* ライセンスアイコンと色 */}
                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{repo.license}</Typography> {/* variantをbody2に */}
                          </Box>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
}