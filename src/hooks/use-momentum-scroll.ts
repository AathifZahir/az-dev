import { useRef, useState, useEffect, RefObject } from "react";

interface MomentumScrollOptions {
  damping?: number; // Deceleration factor (0-1, higher = longer momentum)
  velocityMultiplier?: number; // How much to amplify the velocity
  minVelocity?: number; // Minimum velocity before stopping
}

export const useMomentumScroll = (
  options: MomentumScrollOptions = {}
): {
  scrollRef: RefObject<HTMLDivElement>;
  handleMouseDown: (e: React.MouseEvent) => void;
  handleMouseMove: (e: React.MouseEvent) => void;
  handleMouseUp: () => void;
  handleMouseLeave: () => void;
  handleTouchStart: (e: React.TouchEvent) => void;
  handleTouchMove: (e: React.TouchEvent) => void;
  handleTouchEnd: () => void;
  isDragging: boolean;
} => {
  const {
    damping = 0.95,
    velocityMultiplier = 20,
    minVelocity = 0.1,
  } = options;

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(Date.now());
  const lastPositionRef = useRef<number>(0);

  // Smooth momentum scrolling with easing
  useEffect(() => {
    if (!isDragging && Math.abs(velocity) > minVelocity && scrollRef.current) {
      const animate = () => {
        if (!scrollRef.current) return;

        const newVelocity = velocity * damping;

        if (Math.abs(newVelocity) < minVelocity) {
          setVelocity(0);
          animationRef.current = null;
          return;
        }

        scrollRef.current.scrollLeft -= newVelocity;
        setVelocity(newVelocity);
        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [velocity, isDragging, damping, minVelocity]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;

    setIsDragging(true);
    setVelocity(0);
    setStartX(e.pageX);
    setScrollLeft(scrollRef.current.scrollLeft);
    lastTimeRef.current = Date.now();
    lastPositionRef.current = e.pageX;

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    scrollRef.current.style.scrollBehavior = "auto";
    document.body.style.cursor = "grabbing";
    document.body.style.userSelect = "none";
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.cursor = "default";
    document.body.style.userSelect = "auto";

    if (scrollRef.current) {
      scrollRef.current.style.scrollBehavior = "smooth";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;

    e.preventDefault();
    const x = e.pageX;
    const currentTime = Date.now();
    const timeDelta = currentTime - lastTimeRef.current;

    const walk = x - startX;
    const distance = x - lastPositionRef.current;
    const newScrollLeft = scrollLeft - walk;

    scrollRef.current.scrollLeft = newScrollLeft;

    if (timeDelta > 0) {
      const calculatedVelocity = (distance / timeDelta) * velocityMultiplier;
      setVelocity(calculatedVelocity);
    }

    lastTimeRef.current = currentTime;
    lastPositionRef.current = x;
    setStartX(x);
    setScrollLeft(newScrollLeft);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      document.body.style.cursor = "default";
      document.body.style.userSelect = "auto";

      if (scrollRef.current) {
        scrollRef.current.style.scrollBehavior = "smooth";
      }
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;

    setIsDragging(true);
    setVelocity(0);
    setStartX(e.touches[0].pageX);
    setScrollLeft(scrollRef.current.scrollLeft);
    lastTimeRef.current = Date.now();
    lastPositionRef.current = e.touches[0].pageX;

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    scrollRef.current.style.scrollBehavior = "auto";
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;

    const x = e.touches[0].pageX;
    const currentTime = Date.now();
    const timeDelta = currentTime - lastTimeRef.current;

    const walk = x - startX;
    const distance = x - lastPositionRef.current;
    const newScrollLeft = scrollLeft - walk;

    scrollRef.current.scrollLeft = newScrollLeft;

    if (timeDelta > 0) {
      const calculatedVelocity = (distance / timeDelta) * velocityMultiplier;
      setVelocity(calculatedVelocity);
    }

    lastTimeRef.current = currentTime;
    lastPositionRef.current = x;
    setStartX(x);
    setScrollLeft(newScrollLeft);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);

    if (scrollRef.current) {
      scrollRef.current.style.scrollBehavior = "smooth";
    }
  };

  return {
    scrollRef,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    isDragging,
  };
};

