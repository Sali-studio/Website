'use client';

import dynamic from 'next/dynamic';

const AccessCounter = dynamic(() => import('@/components/AccessCounter'), { ssr: false });
const KonamiCodeHandler = dynamic(() => import('@/components/KonamiCodeHandler'), { ssr: false });

export default function ClientSideComponents() {
  return (
    <>
      <AccessCounter />
      <KonamiCodeHandler />
    </>
  );
}
