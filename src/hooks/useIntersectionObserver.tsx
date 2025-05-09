
import { useEffect, useState, RefObject } from 'react';

interface UseIntersectionObserverProps {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

export const useIntersectionObserver = <T extends Element>(
  ref: RefObject<T>,
  {
    root = null,
    rootMargin = '0px',
    threshold = 0.1,
    triggerOnce = true
  }: UseIntersectionObserverProps = {}
): boolean => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        
        setIsIntersecting(isElementIntersecting);
        
        // Unobserve after it has intersected if triggerOnce is true
        if (isElementIntersecting && triggerOnce && ref.current) {
          observer.unobserve(ref.current);
        }
      },
      { root, rootMargin, threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, root, rootMargin, threshold, triggerOnce]);

  return isIntersecting;
};
