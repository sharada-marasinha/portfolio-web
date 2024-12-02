import React, { useState, useEffect, useCallback, memo } from 'react';

const AstronautCursor: React.FC = memo(() => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    requestAnimationFrame(() => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
    });
  }, []);

  const handleMouseStop = useCallback(() => {
    setIsMoving(false);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseenter', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseStop, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseStop);
    };
  }, [handleMouseMove, handleMouseStop]);

  return (
    <>
      <div 
        className={`cursor cursor-astronaut fixed pointer-events-none z-50 ${isMoving ? 'moving' : ''}`}
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px)`,
          willChange: 'transform'
        }} 
      />
      <div 
        className="cursor cursor-default fixed pointer-events-none z-50" 
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px)`,
          willChange: 'transform'
        }} 
      />
    </>
  );
});

AstronautCursor.displayName = 'AstronautCursor';
export default AstronautCursor;
