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
 * OMNIVIS Design Tokens - Tailwind CSS Configuration
 * Integração de Design Tokens com Tailwind CSS
 * Baseado em Proporção Áurea (φ = 1.618)
 */

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      // === Espaçamentos (Base × φ^n) ===
      spacing: {
        '0': '0px',
        '1': '8px',    // φ^0
        '2': '12px',   // φ^1 ≈ 12.92px
        '3': '20px',   // φ^2 ≈ 20.94px
        '4': '32px',   // φ^3 ≈ 33.89px
        '5': '56px',   // φ^4 ≈ 54.83px
        '6': '88px',   // φ^5 ≈ 88.72px
        '7': '144px',  // φ^6 ≈ 143.5px
        '8': '232px',  // φ^7 ≈ 232.2px
        '9': '376px',  // φ^8 ≈ 376px
        // Vanguarda 2026 - φ-based spacing
        'phi-sm': '1.618rem',  // ~26px
        'phi-md': '2.618rem',  // ~42px
        'phi-lg': '4.236rem',  // ~68px
        'phi-xl': '6.854rem',  // ~110px
      },

      // === Font Families (OMNIVIS Dossiê de Identidade Visual) ===
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },

      // === Font Sizes (Vanguarda 2026 - φ-based scale) ===
      fontSize: {
        // Geist Sans/Inter scale based on φ
        'hero': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.05em', fontWeight: '800' }],
        'xs': ['12px', { lineHeight: '20px', letterSpacing: '0.025em' }],
        'sm': ['14px', { lineHeight: '24px', letterSpacing: '0' }],
        'base': ['16px', { lineHeight: '24px', letterSpacing: '0' }],
        'lg': ['18px', { lineHeight: '28px', letterSpacing: '0' }], // 1.125rem - Legibilidade sob estresse
        'xl': ['20px', { lineHeight: '32px', letterSpacing: '-0.025em' }],
        '2xl': ['24px', { lineHeight: '32px', letterSpacing: '-0.025em' }],
        '3xl': ['30px', { lineHeight: '40px', letterSpacing: '-0.05em' }],
        '4xl': ['36px', { lineHeight: '48px', letterSpacing: '-0.05em' }],
        '5xl': ['48px', { lineHeight: '56px', letterSpacing: '-0.05em' }],
        '6xl': ['60px', { lineHeight: '64px', letterSpacing: '-0.05em' }],
        '7xl': ['72px', { lineHeight: '80px', letterSpacing: '-0.05em' }],
      },

      // === Fluid Typography ===
      fontSize: {
        'fluid-xs': ['clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)', { lineHeight: '20px' }],
        'fluid-sm': ['clamp(0.875rem, 0.8rem + 0.375vw, 1rem)', { lineHeight: '24px' }],
        'fluid-base': ['clamp(1rem, 0.9rem + 0.5vw, 1.125rem)', { lineHeight: '28px' }],
        'fluid-lg': ['clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)', { lineHeight: '32px' }],
        'fluid-xl': ['clamp(1.5625rem, 1.3rem + 1.25vw, 2rem)', { lineHeight: '40px' }],
        'fluid-2xl': ['clamp(1.953rem, 1.5rem + 2.25vw, 3rem)', { lineHeight: '48px' }],
        'fluid-3xl': ['clamp(2.441rem, 1.8rem + 3.25vw, 4rem)', { lineHeight: '56px' }],
        'fluid-4xl': ['clamp(3.052rem, 2.2rem + 4.25vw, 5rem)', { lineHeight: '64px' }],
        'fluid-5xl': ['clamp(3.815rem, 2.8rem + 5.25vw, 6rem)', { lineHeight: '72px' }],
        'fluid-6xl': ['clamp(4.768rem, 3.5rem + 6.25vw, 7.5rem)', { lineHeight: '80px' }],
      },

      // === Font Weights ===
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
      },

      // === Line Heights (Vanguarda 2026 - otimizados para leitura rápida) ===
      lineHeight: {
        'none': '1',
        'tight': '1.25',
        'snug': '1.375',
        'normal': '1.6',  // Otimizado para leitura rápida sob estresse
        'relaxed': '1.75',
        'loose': '2',
      },

      // === Letter Spacing ===
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },

      // === Border Radius (Vanguarda 2026) ===
      borderRadius: {
        'none': '0px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',  // Cards - especificado no dossiê
        '2xl': '24px',
        'full': '9999px',
      },

      // === Touch Targets (Mínimo 48x48dp) ===
      touch: {
        'sm': '48px',
        'md': '56px',
        'lg': '64px',
      },

      // === Colors - Primary Palette ===
      colors: {
        // OMNIVIS Dossiê de Identidade Visual
        omnivis: {
          primary: '#0F172A',      // Azul Profundo - Fundos principais, áreas de alto contraste
          secondary: '#06B6D4',    // Ciano Conectivo - Destaques, links, botões secundários
          action: '#F97316',       // Solidariedade Laranja - CTA principal, botões de ação
          alert: '#EF4444',        // Emergência Vermelho - Alertas críticos, notificações
          success: '#10B981',      // Sucesso Verde - Confirmações, status resolvido
          warning: '#F59E0B',      // Aviso Amarelo - Alertas moderados, precaução
          glass: 'rgba(15, 23, 42, 0.7)',  // Superfície Escura - Glassmorphism
          border: 'rgba(255, 255, 255, 0.1)',  // Borda Sutil
          text: '#F8FAFC',         // Texto Primário
          textSecondary: '#94A3B8', // Texto Secundário
        },
        // Vanguarda 2026 - Neon Colors
        neon: {
          cyan: '#00F2FF',      // Primary - Conexões Ativas
          blue: '#00A8FF',      // Secondary
          alert: '#FF3B30',     // Alert/Crisis - 80% ocupação
          warning: '#FF9500',   // Warning
          success: '#34C759',   // Success
        },
        // Base Colors (Dark Mode First)
        bg: {
          base: '#0A0A0B',      // Jet Black profundo
          secondary: '#0F0F11',
          tertiary: '#141416',
        },
        // Surface - Glassmorphism
        surface: {
          glass: 'rgba(255, 255, 255, 0.03)',
          glassHover: 'rgba(255, 255, 255, 0.05)',
          glassActive: 'rgba(255, 255, 255, 0.08)',
        },
        // Border - Glassmorphism
        border: {
          glass: 'rgba(255, 255, 255, 0.1)',
          glassHover: 'rgba(255, 255, 255, 0.15)',
        },
        // Text - WCAG AAA (7:1 contrast)
        text: {
          primary: '#FFFFFF',
          secondary: 'rgba(255, 255, 255, 0.85)',
          tertiary: 'rgba(255, 255, 255, 0.6)',
          muted: 'rgba(255, 255, 255, 0.4)',
        },
        // Legacy palettes (mantidos para compatibilidade)
        primary: {
          50: '#e0f2fe',
          100: '#bae6fd',
          200: '#7dd3fc',
          300: '#38bdf8',
          400: '#0ea5e9',
          500: '#0284c7',
          600: '#0369a1',
          700: '#075985',
          800: '#0c4a6e',
          900: '#082f49',
          950: '#020617',
        },
        // Secondary Palette (Emerald - Hope)
        secondary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        // Accent Palette (Amber - Urgency)
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        // Danger Palette (Red - Emergency)
        danger: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        // Neutral Palette
        neutral: {
          0: '#ffffff',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },

      // === Shadows (Vanguarda 2026) ===
      boxShadow: {
        'xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'sm': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        // Neon glows (Vanguarda 2026)
        'glow-neon': '0 0 20px rgba(0, 242, 255, 0.3)',
        'glow-alert': '0 0 20px rgba(255, 59, 48, 0.3)',
        'glow-success': '0 0 20px rgba(52, 199, 89, 0.3)',
      },

      // === Gradients (Vanguarda 2026) ===
      backgroundImage: {
        'hero': 'linear-gradient(135deg, #00F2FF 0%, #00A8FF 50%, #0066FF 100%)',
        'alert': 'linear-gradient(135deg, #FF3B30 0%, #FF6B6B 100%)',
        'success': 'linear-gradient(135deg, #34C759 0%, #30D158 100%)',
        'surface': 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
      },

      // === Animation Duration ===
      transitionDuration: {
        'instant': '100ms',
        'fast': '150ms',
        'normal': '200ms',
        'slow': '300ms',
        'slower': '500ms',
        'slowest': '700ms',
      },

      // === Custom Easing Curves (Vanguarda 2026) ===
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'cubic-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'back-out': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'elastic': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },

      // === Blur Levels (Glassmorphism) ===
      backdropBlur: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },

      // === Z-Index Scale ===
      zIndex: {
        'dropdown': 1000,
        'sticky': 1020,
        'fixed': 1030,
        'modal-backdrop': 1040,
        'modal': 1050,
        'popover': 1060,
        'tooltip': 1070,
        'toast': 1080,
      },

      // === Max Widths for readability ===
      maxWidth: {
        'measure-narrow': '45ch',
        'measure-normal': '65ch',
        'measure-wide': '80ch',
        'measure-full': '100%',
      },

      // === Container ===
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [
    // Adicione plugins conforme necessário
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
  ],
};
