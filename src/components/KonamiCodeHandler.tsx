'use client';
import { useEffect, useState } from 'react';

export default function KonamiCodeHandler() {
  const [konamiActivated, setKonamiActivated] = useState(false);

  useEffect(() => {
    const konamiCode = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'
    ];
    let konamiCodePosition = 0;

    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;
      if (key === konamiCode[konamiCodePosition]) {
        konamiCodePosition++;
        if (konamiCodePosition === konamiCode.length) {
          setKonamiActivated(true);
          console.log('コナミコマンド発動！');
          // ここにコナミコマンド発動時の効果を追加
          // 例: alert('コナミコマンド発動！');
          // 一定時間後に効果を解除する場合
          setTimeout(() => {
            setKonamiActivated(false);
          }, 3000);
          konamiCodePosition = 0; // リセット
        }
      } else {
        konamiCodePosition = 0; // リセット
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // コナミコマンド発動時のスタイルを適用
  useEffect(() => {
    if (konamiActivated) {
      document.body.style.background = 'linear-gradient(45deg, #FFD700 0%, #FFA07A 100%)';
      document.body.style.backgroundAttachment = 'fixed';
    } else {
      document.body.style.background = 'linear-gradient(135deg, #E0F7FA 0%, #BBDEFB 100%)';
      document.body.style.backgroundAttachment = 'fixed';
    }
  }, [konamiActivated]);

  return null; // このコンポーネントはUIをレンダリングしない
}
