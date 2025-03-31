'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CustomCursorProps {
  // Optional color prop to customize cursor color
  color?: string;
}

export default function CustomCursor({ color = '#FF0000' }: CustomCursorProps) {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add initial delay to ensure cursor shows after page loads properly
    const showTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handlePointerElement = () => {
      const hoveredElement = document.querySelectorAll('a, button, [role="button"], input, select, textarea');
      
      const checkIfPointer = (e: MouseEvent) => {
        const element = document.elementFromPoint(e.clientX, e.clientY);
        let isPointerElement = false;
        
        hoveredElement.forEach(el => {
          if (el.contains(element)) {
            isPointerElement = true;
          }
        });
        
        setIsPointer(isPointerElement);
      };
      
      document.addEventListener('mousemove', checkIfPointer);
      
      return () => {
        document.removeEventListener('mousemove', checkIfPointer);
      };
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    
    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const pointerDetection = handlePointerElement();
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      clearTimeout(showTimeout);
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      pointerDetection();
    };
  }, []);

  // Применяем стили ко всем интерактивным элементам
  useEffect(() => {
    // Добавляем CSS для всех интерактивных элементов
    const style = document.createElement('style');
    style.innerHTML = `
      a, button, [role="button"], input, select, textarea {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Hide regular cursor with CSS
  useEffect(() => {
    if (isVisible) {
      document.body.style.cursor = 'none';
    } else {
      document.body.style.cursor = 'auto';
    }
    
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          backgroundColor: color,
          boxShadow: `0 0 20px ${color}`,
        }}
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: isClicking ? 0.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          mass: 0.1,
          stiffness: 800,
          damping: 30,
          duration: 0.1,
        }}
      />
      
      {/* Secondary cursor ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border-2 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          borderColor: color,
        }}
        animate={{
          x: position.x - 24,
          y: position.y - 24,
          width: isPointer ? 60 : 40,
          height: isPointer ? 60 : 40,
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.8 : 1,
          rotate: isPointer ? 45 : 0,
          borderWidth: isPointer ? '3px' : '2px',
          borderRadius: isPointer ? '20%' : '100%',
        }}
        transition={{
          type: 'spring',
          mass: 0.3,
          stiffness: 200,
          damping: 20,
          duration: 0.2,
        }}
      />
      
      {/* Special pointer indicator - fixed positioning */}
      {isPointer && (
        <motion.div
          className="fixed pointer-events-none z-[9999]"
          style={{
            top: position.y - 5,
            left: position.x - 5,
            width: 10,
            height: 10,
            backgroundColor: color,
            borderRadius: '50%',
          }}
          animate={{
            scale: isClicking ? 1.5 : [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      )}
    </>
  );
} 