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

import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  base: '/omnivis',
  viewTransitions: {
    // Configurações de View Transitions nativos do Astro
    prefetch: 'all',
    defaultStrategy: 'fade',
  },
  integrations: [
    react({
      // Configuração do React Islands
      experimentalReact: true,
    }),
    tailwind({
      // Configuração do Tailwind CSS
      applyBaseStyles: true,
    }),
  ],
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // Chunking estratégico para performance
            'react-vendor': ['react', 'react-dom'],
            'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
            'animation-vendor': ['gsap', 'lenis', 'framer-motion'],
          },
        },
      },
    },
    // Otimizações para Three.js
    optimizeDeps: {
      include: ['three', '@react-three/fiber', '@react-three/drei'],
    },
  },
  // Compressão e otimização
  compressHTML: true,
});
