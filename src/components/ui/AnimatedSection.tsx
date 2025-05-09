
import React, { useRef, ReactNode } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { cn } from '../../lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in-up' | 'fade-in' | 'soft-scale';
  delay?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className,
  animation = 'fade-in-up',
  delay = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { 
    threshold: 0.15,
    triggerOnce: true 
  });

  return (
    <div 
      ref={ref}
      className={cn(
        'transition-all duration-1000 opacity-0 translate-y-10',
        isInView && 'opacity-100 translate-y-0',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
