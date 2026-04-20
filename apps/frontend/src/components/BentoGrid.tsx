/**
 * OMNIVIS Bento Grid - Componente com Glassmorphism e Neon
 * Layout em grid estilo Bento com cards interativos
 * Vanguarda 2026 - Efeito Tilt 3D com GSAP
 * Implementado com Tailwind CSS e CSS custom properties
 */

'use client';

import { ReactNode, useRef, useEffect } from 'react';
import gsap from 'gsap';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  span?: '1' | '2' | '3' | '4';
  variant?: 'default' | 'glass' | 'neon-primary' | 'neon-secondary' | 'neon-accent';
}

function BentoCard({ children, className = '', span = '1', variant = 'default' }: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -10; // Max 10 degrees
      const rotateY = ((x - centerX) / centerX) * 10; // Max 10 degrees

      gsap.to(card, {
        rotationX: rotateX,
        rotationY: rotateY,
        duration: 0.3,
        ease: 'power2.out',
        transformStyle: 'preserve-3d',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const spanClasses = {
    '1': 'col-span-1',
    '2': 'col-span-1 md:col-span-2',
    '3': 'col-span-1 md:col-span-3',
    '4': 'col-span-1 md:col-span-4',
  };

  const variantClasses = {
    default: 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-md',
    glass: 'glass',
    'neon-primary': 'glass neon-primary',
    'neon-secondary': 'glass neon-secondary',
    'neon-accent': 'glass neon-accent',
  };

  return (
    <div
      ref={cardRef}
      className={`
        ${spanClasses[span]}
        ${variantClasses[variant]}
        rounded-xl p-8
        transform-gpu
        transition-all duration-300 ease-out-expo
        hover:shadow-xl hover:shadow-blue-500/10
        card-hover
        ${className}
      `}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      {children}
    </div>
  );
}

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export default function BentoGrid({ children, className = '' }: BentoGridProps) {
  return (
    <div
      className={`
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6
        ${className}
      `}
    >
      {children}
    </div>
  );
}

BentoGrid.Card = BentoCard;
