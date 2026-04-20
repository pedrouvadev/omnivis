import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  base: '/omnivis-code',
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
