/*
 * =====================================================
 * Desenvolvido por: Pedro Uva (Mr. Uva)
 * Full-Stack Engineer & AI Strategist | Estrategista Digital
 * 
 * Website: https://mruva.com.br/
 * LinkedIn: https://www.linkedin.com/in/mruva/
 * 
 * Copyright © 2026 Pedro Uva. Todos os direitos reservados.
 * 
 * Este repositório é público. Se você clonar, fizer fork ou utilizar
 * este código em seus projetos, por favor, mantenha este aviso de
 * créditos intacto no topo de cada arquivo.
 * 
 * Agradeço pelo respeito ao meu trabalho e à minha contribuição
 * para a comunidade open-source.
 * 
 * Excelência desde 1997 • +25 anos de experiência em Full-Stack,
 * Inteligência Artificial e estratégias digitais.
 * =====================================================
 */

/**
 * OMNIVIS Smooth Scroll - Scroll Cinematográfico com GSAP + Lenis
 * Scroll suave com damping, parallax e animações de revelação
 */

'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';

interface SmoothScrollProps {
  children: React.ReactNode;
  className?: string;
}

export default function SmoothScroll({ children, className = '' }: SmoothScrollProps) {
  useEffect(() => {
    // Inicializar Lenis para scroll suave com configurações cinematográficas
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Integrar com GSAP ScrollTrigger
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className={className}>
      {children}
    </div>
  );
}

// Hook para animações de scroll com GSAP
export function useScrollAnimation() {
  useEffect(() => {
    // Animar elementos com classe .animate-on-scroll
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Animar elementos com classe .fade-in
    const fadeElements = document.querySelectorAll('.fade-in');
    
    fadeElements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Animar elementos com classe .scale-in
    const scaleElements = document.querySelectorAll('.scale-in');
    
    scaleElements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);
}
