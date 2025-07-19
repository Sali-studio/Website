'use client';
import React from 'react';
import { Box, Skeleton, Card } from '@mui/material';

interface SkeletonLoaderProps {
  type: 'card' | 'text';
  count?: number;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ type, count = 1 }) => {
  if (type === 'card') {
    return (
      <Box sx={{ width: '100%', maxWidth: 800, mx: 'auto' }}>
        {Array.from(new Array(count)).map((_, index) => (
          <Card key={index} sx={{ mb: 3, p: 3, borderRadius: 2, boxShadow: 1 }}>
            <Skeleton variant="text" width="60%" height={20} sx={{ mb: 1 }} />
            <Skeleton variant="rectangular" height={100} sx={{ borderRadius: 1 }} />
            <Skeleton variant="text" width="80%" height={20} sx={{ mt: 1 }} />
          </Card>
        ))}
      </Box>
    );
  } else if (type === 'text') {
    return (
      <Box sx={{ width: '100%', maxWidth: 800, mx: 'auto' }}>
        {Array.from(new Array(count)).map((_, index) => (
          <Skeleton key={index} variant="text" width="100%" height={20} sx={{ mb: 1 }} />
        ))}
      </Box>
    );
  }
  return null;
};

export default SkeletonLoader;
