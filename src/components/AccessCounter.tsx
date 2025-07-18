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

        // アクセス時にカウンターをインクリメント
        await fetch('/api/counter', {
          method: 'POST',
        });
      } catch (error) {
        console.error('Failed to fetch or increment counter:', error);
        setCount(0); // エラー時は0を表示
      }
    };

    fetchCount();
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
