'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const poseCount = 9;

export default function PantherMascot() {
  const [pose, setPose] = useState(1);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener('change', updateMotionPreference);

    return () => mediaQuery.removeEventListener('change', updateMotionPreference);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = window.setInterval(() => {
      setPose((current) => (current % poseCount) + 1);
    }, 700);

    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  const posePath = `/mascot/pose-${String(pose).padStart(2, '0')}.png`;

  return (
    <div className="panther-mascot" aria-label="Crumbles robotic panther mascot" role="img">
      <Image src={posePath} alt="" width={220} height={220} priority className="h-full w-full object-contain" />
      <span className="sr-only">Crumbles robotic panther mascot</span>
    </div>
  );
}
