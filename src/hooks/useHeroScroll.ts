import { type RefObject, useEffect, useState } from 'react';

export function useHeroScroll(ref: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const update = () => {
      const rect = node.getBoundingClientRect();
      const height = node.offsetHeight || 1;
      const scrolled = Math.max(0, -rect.top);
      setProgress(Math.min(scrolled / height, 1));
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [ref]);

  return progress;
}
