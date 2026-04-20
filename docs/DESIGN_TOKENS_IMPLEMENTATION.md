<!--
  =====================================================
  Desenvolvido por: Pedro Uva (Mr. Uva)
  Full-Stack Engineer & AI Strategist | Estrategista Digital
  
  Website: https://mruva.com.br/
  LinkedIn: https://www.linkedin.com/in/mruva/
  
  Copyright © 2026 Pedro Uva. Todos os direitos reservados.
  
  Este repositório é público. Se você clonar, fizer fork ou utilizar
  este código em seus projetos, por favor, mantenha este aviso de
  créditos intacto no topo de cada arquivo.
  
  Agradeço pelo respeito ao meu trabalho e à minha contribuição
  para a comunidade open-source.
  
  Excelência desde 1997 • +25 anos de experiência em Full-Stack,
  Inteligência Artificial e estratégias digitais.
  =====================================================
-->

---
tags: [design-tokens, css, tailwind, estilizacao, design-system, tokens]
tipo: referencia
status: processado
topico_principal: Design Tokens e Estilização
---

# OMNIVIS Design Tokens - Guia de Implementação

## Visão Geral

Este guia documenta como utilizar os Design Tokens do OMNIVIS no desenvolvimento front-end. Todos os tokens são baseados em princípios matemáticos (Proporção Áurea φ = 1.618) e seguem padrões WCAG AAA de acessibilidade.

## Estrutura de Arquivos

```
src/styles/
├── design-tokens.css    # Fundamentos matemáticos e grid
├── typography.css        # Sistema tipográfico e acessibilidade
├── colors.css           # Paleta de cores e dark mode
├── animations.css       # Microinterações e curvas de easing
└── index.css           # Main stylesheet (importa todos)
```

## Como Usar

### 1. Importar no Layout Principal

No seu arquivo `Layout.astro` ou `_app.tsx`:

```astro
---
import '../styles/index.css';
---
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>OMNIVIS</title>
  </head>
  <body>
    <slot />
  </body>
</html>
```

### 2. Usar Design Tokens com CSS

```css
.my-component {
  padding: var(--space-4);
  background: var(--color-bg-surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--duration-normal) var(--ease-out-expo);
}

.my-component:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### 3. Usar com Tailwind CSS

```tsx
// tailwind.config.js
import designTokensConfig from './tailwind.config.design-tokens.js';

export default {
  theme: {
    extend: designTokensConfig.theme.extend,
  },
};
```

```tsx
// Componente React
<div className="p-4 bg-surface rounded-lg shadow-md hover:shadow-lg transition-all">
  <h2 className="text-2xl font-bold text-primary">Título</h2>
</div>
```

### 4. Usar Ícones

```tsx
import { Icons } from '../components/icons/OmnivisIcons';

function MyComponent() {
  return (
    <button className="flex items-center gap-2">
      <Icons.User size={24} />
      <span>Perfil</span>
    </button>
  );
}
```

## Design Tokens Disponíveis

### Espaçamentos (Base × φ^n)

```css
--space-0: 0px
--space-1: 8px     /* φ^0 */
--space-2: 12px    /* φ^1 */
--space-3: 20px    /* φ^2 */
--space-4: 32px    /* φ^3 */
--space-5: 56px    /* φ^4 */
--space-6: 88px    /* φ^5 */
--space-7: 144px   /* φ^6 */
--space-8: 232px   /* φ^7 */
--space-9: 376px   /* φ^8 */
```

### Tipografia (Major Third Scale)

```css
--text-xs: 12px
--text-sm: 14px
--text-base: 16px
--text-lg: 20px
--text-xl: 25px
--text-2xl: 31px
--text-3xl: 39px
--text-4xl: 49px
--text-5xl: 61px
--text-6xl: 76px
```

### Cores

```css
/* Primary (Blue - Trust) */
--color-primary-50 a --color-primary-950

/* Secondary (Emerald - Hope) */
--color-secondary-50 a --color-secondary-950

/* Accent (Amber - Urgency) */
--color-accent-50 a --color-accent-950

/* Danger (Red - Emergency) */
--color-danger-50 a --color-danger-950

/* Neutral (Slate - Structure) */
--color-neutral-0 a --color-neutral-950
```

### Animações

```css
/* Durações */
--duration-instant: 100ms
--duration-fast: 150ms
--duration-normal: 200ms
--duration-slow: 300ms
--duration-slower: 500ms
--duration-slowest: 700ms

/* Easing Curves */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)
--ease-in-out-cubic: cubic-bezier(0.645, 0.045, 0.355, 1)
--ease-out-back: cubic-bezier(0.34, 1.56, 0.64, 1)
--ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275)
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1)
```

## Componentes Exemplo

### Botão

```tsx
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className = '',
  children,
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-600',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus-visible:ring-secondary-600',
    accent: 'bg-accent-600 text-white hover:bg-accent-700 focus-visible:ring-accent-600',
    danger: 'bg-danger-600 text-white hover:bg-danger-700 focus-visible:ring-danger-600',
  };
  
  const sizes = {
    sm: 'px-3 py-2 text-sm min-h-[40px]',
    md: 'px-4 py-3 text-base min-h-[48px]',
    lg: 'px-6 py-4 text-lg min-h-[56px]',
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
```

### Card com Glassmorphism

```tsx
export function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`glass p-6 rounded-xl ${className}`}>
      {children}
    </div>
  );
}
```

### Input com Foco

```tsx
export function Input({ className = '', ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full px-4 py-3 border border-neutral-200 rounded-lg bg-white text-neutral-900 placeholder-neutral-400 focus:border-primary-600 focus:ring-2 focus:ring-primary-200 transition-all duration-150 min-h-[48px] ${className}`}
      {...props}
    />
  );
}
```

## Dark Mode

### Ativar Dark Mode

```tsx
// Adicionar data-theme="dark" ao elemento html ou body
document.documentElement.setAttribute('data-theme', 'dark');

// Ou usar preferência do sistema
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.setAttribute('data-theme', 'dark');
}
```

### Toggle Dark Mode

```tsx
export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
  }, []);
  
  const toggle = () => {
    const newTheme = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    setIsDark(!isDark);
  };
  
  return (
    <button onClick={toggle} className="p-2 rounded-lg bg-surface">
      {isDark ? <Icons.Sun /> : <Icons.Moon />}
    </button>
  );
}
```

## Acessibilidade

### Skip Link

```html
<a href="#main-content" class="skip-link">
  Pular para conteúdo principal
</a>
```

### Focus Visible

```css
/* Já incluído em index.css */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}
```

### ARIA Labels

```tsx
<button aria-label="Fechar modal">
  <Icons.X />
</button>
```

## Animações

### Hover Effects

```tsx
<div className="hover-lift cursor-pointer">
  <p>Card com hover lift</p>
</div>
```

### Loading Skeleton

```tsx
<div className="skeleton h-12 w-full rounded-lg" />
<div className="skeleton-text" />
```

### Transições de Página (Astro View Transitions)

```astro
---
// No seu layout
---
<html lang="pt-BR">
  <head>
    <meta name="view-transition" content="same-origin" />
  </head>
</html>
```

## Performance Tips

1. **Use CSS Custom Properties**: São nativos e performáticos
2. **Transform e Opacity**: Para animações, prefira essas propriedades
3. **will-change**: Use com moderação apenas para animações complexas
4. **Reduced Motion**: Sempre respeite `prefers-reduced-motion`

## Testes

### Verificar Contraste

Use ferramentas como:
- [axe DevTools](https://www.deque.com/axe/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### Verificar Acessibilidade

```bash
# Com axe DevTools
npx playwright test --accessibility

# Com Lighthouse
npx lighthouse http://localhost:4321 --view
```

## Próximos Passos

Após implementar os Design Tokens:

1. Atualizar para Astro 5/6
2. Atualizar para Tailwind CSS v4
3. Adicionar Three.js para hero 3D
4. Adicionar GSAP + Lenis para scroll cinematográfico
5. Implementar bento grid com glassmorphism
6. Criar componentes atômicos baseados nos tokens

## Referências

- [Design Tokens W3C Community Group](https://www.w3.org/community/design-tokens/)
- [[ACCESSIBILITY_VALIDATION|WCAG 2.1 Guidelines]]
- [[STACK_UPDATE_INSTRUCTIONS|Astro View Transitions]]
