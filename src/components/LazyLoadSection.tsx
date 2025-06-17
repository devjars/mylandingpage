import { useEffect, useRef, useState} from 'react';
import type { ReactNode } from 'react';
interface Props {
  children: ReactNode;
  rootMargin?: string;
  threshold?: number;
}

const LazyLoadSection = ({ children, rootMargin = '0px', threshold = 0.1 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return <div ref={ref}>{isVisible ? children : null}</div>;
};

export default LazyLoadSection;
