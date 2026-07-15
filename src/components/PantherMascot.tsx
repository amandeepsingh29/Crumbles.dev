'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

const progressKey = 'crumbles-panther-progress';

type MascotMode =
  | 'standing'
  | 'working'
  | 'sitting'
  | 'stretching'
  | 'watching'
  | 'celebrating'
  | 'crouching';

const poseForMode: Record<MascotMode, number> = {
  standing: 1,
  working: 2,
  sitting: 4,
  stretching: 5,
  watching: 6,
  celebrating: 9,
  crouching: 8,
};

const idleDurations: Partial<Record<MascotMode, number>> = {
  standing: 12000,
  sitting: 7000,
  stretching: 2500,
};

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
  const [mode, setMode] = useState<MascotMode>('standing');
  const [reducedMotion, setReducedMotion] = useState(false);
  const [message, setMessage] = useState('Panther is online.');
  const [showBubble, setShowBubble] = useState(false);
  const [explored, setExplored] = useState(0);
  const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number } | null>(null);
  const modeRef = useRef<MascotMode>('standing');
  const previousModeRef = useRef<MascotMode>('standing');
  const cursorTargetRef = useRef({ x: 20, y: 0 });
  const cursorPositionRef = useRef({ x: 20, y: 0 });
  const cursorHistoryRef = useRef<Array<{ x: number; y: number; time: number }>>([]);
  const cursorFrameRef = useRef<number | null>(null);
  const cursorIdleTimer = useRef<number | null>(null);
  const hideBubbleTimer = useRef<number | null>(null);
  const actionTimer = useRef<number | null>(null);

  const revealMessage = useCallback((nextMessage: string, duration = 3500) => {
    setMessage(nextMessage);
    setShowBubble(true);
    if (hideBubbleTimer.current) window.clearTimeout(hideBubbleTimer.current);
    hideBubbleTimer.current = window.setTimeout(() => setShowBubble(false), duration);
  }, []);

  const changeMode = useCallback(
    (nextMode: MascotMode, nextMessage?: string, duration?: number) => {
      modeRef.current = nextMode;
      setMode(nextMode);
      if (actionTimer.current) window.clearTimeout(actionTimer.current);
      if (nextMessage) revealMessage(nextMessage, duration);

      if (duration) {
        actionTimer.current = window.setTimeout(() => {
          modeRef.current = 'standing';
          setMode('standing');
        }, duration);
      }
    },
    [revealMessage],
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener('change', updateMotionPreference);

    return () => mediaQuery.removeEventListener('change', updateMotionPreference);
  }, []);

  // The idle loop is a small deterministic life cycle, not a random animation.
  // The panther stands, rests, stretches, and returns to standing indefinitely.
  useEffect(() => {
    if (reducedMotion) return;
    const duration = idleDurations[mode];
    if (!duration) return;

    const nextMode: MascotMode =
      mode === 'standing' ? 'sitting' : mode === 'sitting' ? 'stretching' : 'standing';
    const timer = window.setTimeout(() => changeMode(nextMode), duration);
    return () => window.clearTimeout(timer);
  }, [changeMode, mode, reducedMotion]);

  // Follow the mouse with a delayed position so the panther visibly chases the
  // cursor instead of staying attached to it at a fixed offset.
  useEffect(() => {
    const animateBehindCursor = () => {
      const delayedTime = performance.now() - 220;
      const history = cursorHistoryRef.current;
      let delayedPoint = history[0];
      for (const point of history) {
        if (point.time > delayedTime) break;
        delayedPoint = point;
      }
      if (delayedPoint) cursorTargetRef.current = delayedPoint;

      const current = cursorPositionRef.current;
      const target = cursorTargetRef.current;
      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;
      setCursorPosition({ x: current.x, y: current.y });

      if (Math.abs(target.x - current.x) > 0.5 || Math.abs(target.y - current.y) > 0.5) {
        cursorFrameRef.current = window.requestAnimationFrame(animateBehindCursor);
      } else {
        cursorFrameRef.current = null;
      }
    };

    const followMouse = (event: MouseEvent) => {
      const mascotSize = 110;
      const nextTarget = {
        x: Math.min(Math.max(event.clientX - 75, 20), window.innerWidth - mascotSize),
        y: Math.min(Math.max(event.clientY - 35, 20), window.innerHeight - mascotSize),
      };
      cursorHistoryRef.current.push({ ...nextTarget, time: performance.now() });
      if (cursorHistoryRef.current.length > 40) cursorHistoryRef.current.shift();

      if (['standing', 'sitting', 'stretching'].includes(modeRef.current)) {
        modeRef.current = 'working';
        setMode('working');
      }
      if (cursorIdleTimer.current) window.clearTimeout(cursorIdleTimer.current);
      cursorIdleTimer.current = window.setTimeout(() => {
        if (modeRef.current === 'working') {
          modeRef.current = 'standing';
          setMode('standing');
        }
      }, 900);

      if (cursorFrameRef.current === null) cursorFrameRef.current = window.requestAnimationFrame(animateBehindCursor);
    };

    window.addEventListener('mousemove', followMouse, { passive: true });
    return () => {
      window.removeEventListener('mousemove', followMouse);
      if (cursorFrameRef.current) window.cancelAnimationFrame(cursorFrameRef.current);
      if (cursorIdleTimer.current) window.clearTimeout(cursorIdleTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!pathname) return;
    const navigationTimer = window.setTimeout(() => {
      changeMode('working', getPageMessage(pathname), 2800);

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
  }, [changeMode, pathname, revealMessage]);

  useEffect(() => () => {
    if (hideBubbleTimer.current) window.clearTimeout(hideBubbleTimer.current);
    if (actionTimer.current) window.clearTimeout(actionTimer.current);
  }, []);

  const handleClick = () => {
    changeMode('crouching', 'Panther is ready for the next run.', 2600);
  };

  const handleDoubleClick = () => {
    changeMode('celebrating', 'Achievement energy detected.', 4200);
  };

  const handleMouseEnter = () => {
    if (!['standing', 'sitting', 'stretching'].includes(modeRef.current)) return;
    previousModeRef.current = modeRef.current;
    changeMode('watching', 'Panther is watching the system.');
  };

  const handleMouseLeave = () => {
    if (modeRef.current === 'watching') changeMode(previousModeRef.current);
  };

  const posePath = `/mascot/pose-${String(poseForMode[mode]).padStart(2, '0')}.png`;
  const imagePath = mode === 'working' ? '/mascot/run.gif' : posePath;

  return (
    <div
      className={`panther-mascot-wrap${cursorPosition ? ' panther-mascot-wrap--cursor' : ''}`}
      style={cursorPosition ? { transform: `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0)` } : undefined}
    >
      {showBubble && (
        <div className="panther-mascot-bubble" role="status">
          {message}
          <span>{explored} systems explored</span>
        </div>
      )}
      <button
        type="button"
        className={`panther-mascot panther-mascot--${mode}`}
        aria-label="Interact with the Crumbles robotic panther mascot"
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={imagePath}
          alt=""
          width={160}
          height={160}
          priority
          unoptimized={mode === 'working'}
          className="h-full w-full object-contain"
        />
      </button>
    </div>
  );
}
