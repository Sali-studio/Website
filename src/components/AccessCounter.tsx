'use client';
import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';

const AccessCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        // カウンターの現在の値を取得
        const getResponse = await fetch('/api/counter');
        const getData = await getResponse.json();
        setCount(getData.count);

        // localStorage を使用して、ユーザーが既にカウントされたかどうかを判断
        const hasCounted = localStorage.getItem('hasCounted');
        if (!hasCounted) {
          // 初回アクセス時のみカウンターをインクリメント
          await fetch('/api/counter', {
            method: 'POST',
          });
          localStorage.setItem('hasCounted', 'true');
        }
      } catch (error) {
        console.error('Failed to fetch or increment counter:', error);
        setCount(0); // エラー時は0を表示
      }
    };

    fetchCount();

    // クリーンアップ関数で、コンポーネントがアンマウントされる際に localStorage のフラグをリセット
    return () => {
      localStorage.removeItem('hasCounted');
    };
  }, []);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
      <PeopleIcon sx={{ fontSize: 18 }} />
      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
        アクセス数: {count !== null ? count : '---'}
      </Typography>
    </Box>
  );
};

export default AccessCounter;
