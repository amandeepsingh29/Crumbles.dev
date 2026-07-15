'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const poseCount = 9;
const progressKey = 'crumbles-panther-progress';

const pageMessages: Record<string, string> = {
  '/': 'Panther is online.',
  '/products': 'Inspect the agent stack.',
  '/blogs': 'A new lab note is waiting.',
  '/team': 'Meet the builder behind Crumbles.',
  '/careers': 'Looking for builders?',
  '/contact': 'Talk to the team.',
};

function getPageMessage(pathname: string) {
  if (pageMessages[pathname]) return pageMessages[pathname];
  if (pathname.startsWith('/products/')) return 'Panther found a product system.';
  if (pathname.startsWith('/blogs/')) return 'Panther found a lab note.';
  return 'Panther is exploring.';
}

export default function PantherMascot() {
  const pathname = usePathname();
  const [pose, setPose] = useState(1);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [message, setMessage] = useState('Panther is online.');
  const [showBubble, setShowBubble] = useState(false);
  const [explored, setExplored] = useState(0);
  const hideBubbleTimer = useRef<number | null>(null);

  const revealMessage = (nextMessage: string, duration = 3500) => {
    setMessage(nextMessage);
    setShowBubble(true);
    if (hideBubbleTimer.current) window.clearTimeout(hideBubbleTimer.current);
    hideBubbleTimer.current = window.setTimeout(() => setShowBubble(false), duration);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener('change', updateMotionPreference);

    return () => mediaQuery.removeEventListener('change', updateMotionPreference);
  }, []);

  useEffect(() => {
    if (!pathname) return;
    const navigationTimer = window.setTimeout(() => {
      revealMessage(getPageMessage(pathname));

      try {
        const saved = JSON.parse(window.localStorage.getItem(progressKey) || '{"pages":[]}') as { pages?: string[] };
        const pages = new Set(saved.pages || []);
        pages.add(pathname);
        window.localStorage.setItem(progressKey, JSON.stringify({ pages: [...pages] }));
        setExplored(pages.size);

        if (pages.size === 3) revealMessage('Achievement unlocked: Explorer.', 5000);
        if (pathname.startsWith('/products/') && pages.size >= 7) revealMessage('Achievement unlocked: Stack explorer.', 5000);
      } catch {
        // Local progress is optional and should never affect navigation.
      }
    }, 0);

    return () => window.clearTimeout(navigationTimer);
  }, [pathname]);

  useEffect(() => () => {
    if (hideBubbleTimer.current) window.clearTimeout(hideBubbleTimer.current);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = window.setInterval(() => {
      setPose((current) => (current % poseCount) + 1);
    }, 700);

    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  const react = (nextPose: number, nextMessage: string) => {
    setPose(nextPose);
    revealMessage(nextMessage);
  };

  const handleClick = () => {
    const nextPose = Math.floor(Math.random() * poseCount) + 1;
    react(nextPose, 'Panther is ready for the next run.');
  };

  const handleDoubleClick = () => react(9, 'Achievement energy detected.');

  const posePath = `/mascot/pose-${String(pose).padStart(2, '0')}.png`;

  return (
    <div className="panther-mascot-wrap">
      {showBubble && (
        <div className="panther-mascot-bubble" role="status">
          {message}
          <span>{explored} systems explored</span>
        </div>
      )}
      <button
        type="button"
        className="panther-mascot"
        aria-label="Interact with the Crumbles robotic panther mascot"
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onMouseEnter={() => react(5, 'Panther is watching the system.')}
      >
        <Image src={posePath} alt="" width={220} height={220} priority className="h-full w-full object-contain" />
      </button>
    </div>
  );
}
