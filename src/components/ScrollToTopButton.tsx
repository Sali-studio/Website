'use client';
import React, { useState, useEffect } from 'react';
import { Fab, Zoom, useScrollTrigger } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTopButton: React.FC = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100, // 100pxスクロールしたら表示
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" style={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000 }}>
        <Fab
          color="primary"
          size="medium" // medium に変更
          aria-label="scroll back to top"
          sx={(theme) => ({
            boxShadow: theme.shadows[6], // デフォルトの影を少し強調
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              boxShadow: theme.shadows[12], // ホバー時に影を強調
              transform: 'translateY(-4px)', // ホバー時に浮き上がりを強調
            },
          })}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </div>
    </Zoom>
  );
};

export default ScrollToTopButton;
