import { useEffect, useRef, useState } from 'react';

/**
 * Sets `true` when the element intersects the viewport (for scroll-in animations).
 */
export function useInViewReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { rootMargin = '0px 0px -6% 0px', threshold = 0.08, once = true } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold, once]);

  return [ref, isVisible];
}
