'use client';
import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress, Card, CardContent, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import SkeletonLoader from '@/components/SkeletonLoader';

interface NewsItem {
  id: string;
  date: string;
  time: string;
  content: string;
}

const NewsList: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: NewsItem[] = await response.json();
        setNews(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <Box sx={{ mt: 8, width: '100%' }}>
      {loading && <SkeletonLoader type="card" count={3} />}
      {error && <Typography color="error" sx={{ mt: 4 }}>Error: {error}</Typography>}
      {!loading && !error && news.length === 0 && (
        <Typography sx={{ mt: 4 }}>ニュース記事がありません。</Typography>
      )}
      {!loading && !error && news.length > 0 && (
        <Box sx={{ width: '100%', maxWidth: 800, mx: 'auto' }}>
          {news.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.01 }} // ホバー時のアニメーションを微調整
              whileTap={{ scale: 0.99 }} // タップ時のアニメーションを微調整
            >
              <Card
                sx={(theme) => ({
                  mb: 3, // マージンを微調整
                  textAlign: 'left',
                  backgroundColor: theme.palette.background.paper, // Material 3の背景色を意識
                  boxShadow: theme.shadows[1], // Material 3のElevation 1を意識
                  borderRadius: theme.shape.borderRadius * 2, // Material 3の角丸
                  transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: theme.shadows[3], // ホバー時のElevation 3を意識
                  },
                })}
              >
                <CardContent sx={{ p: 3 }}> {/* パディングを調整 */}
                  <Typography variant="body2" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                    {item.date} {item.time}
                  </Typography>
                  <Divider sx={{ my: 1.5 }} /> {/* 区切り線のマージンを調整 */}
                  <Typography variant="body1" component="p" sx={{ mt: 1.5, lineHeight: 1.6 }}> {/* 行の高さを調整 */}
                    {item.content}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default NewsList;
