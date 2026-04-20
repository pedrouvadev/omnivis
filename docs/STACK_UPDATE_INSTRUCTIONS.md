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
tags: [stack, atualizacao, instalacao, dependencias, astro, tailwind, threejs]
tipo: referencia
status: processado
topico_principal: Atualização de Stack Tecnológico
---

# Atualização do Stack Tecnológico - Instruções de Instalação

## Visão Geral

Este documento contém as instruções para atualizar o stack tecnológico do frontend OMNIVIS conforme as recomendações do Stack Tecnológico.md (2026).

## Dependências Adicionadas

### Framework e Core
- **Astro**: 4.0.0 → 5.0.0
- **@astrojs/react**: 3.0.0 → 4.0.0
- **@astrojs/tailwind**: 5.0.0 → 5.1.0
- **React**: 18.2.0 → 18.3.0
- **React DOM**: 18.2.0 → 18.3.0

### Estilização
- **Tailwind CSS**: 3.4.0 → 4.0.0

### 3D e Visual
- **Three.js**: ^0.169.0 (nova)
- **@react-three/fiber**: ^8.17.10 (nova)
- **@react-three/drei**: ^9.114.0 (nova)

### Animações e Scroll
- **GSAP**: ^3.12.5 (nova)
- **Lenis**: ^1.1.20 (nova)
- **Framer Motion**: ^11.5.0 (nova)

### Utilitários
- **clsx**: 2.0.0 → 2.1.0
- **tailwind-merge**: 2.0.0 → 2.5.0

### TypeScript
- **TypeScript**: 5.0.0 → 5.6.0
- **@types/react**: 18.2.0 → 18.3.0
- **@types/react-dom**: 18.2.0 → 18.3.0
- **@types/three**: ^0.169.0 (nova)

## Instruções de Instalação

### 1. Navegar para o diretório do frontend

```bash
cd omnivis/apps/frontend
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Verificar a instalação

```bash
npm list
```

### 4. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

## Configurações Adicionais

### Tailwind CSS v4

O Tailwind CSS v4 requer uma configuração diferente. Atualize o arquivo `tailwind.config.mjs`:

```javascript
import designTokensConfig from './tailwind.config.design-tokens.js';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: designTokensConfig.theme.extend,
  },
  plugins: [],
};
```

### Importar Design Tokens

No seu arquivo `Layout.astro` ou `_app.tsx`, importe os estilos:

```astro
---
import '../styles/index.css';
---
<html lang="pt-BR">
  <head>
    <meta name="view-transition" content="same-origin" />
  </head>
  <body>
    <slot />
  </body>
</html>
```

## Componentes Criados

### Hero3D.tsx
Componente 3D interativo com Three.js, @react-three/fiber e @react-three/drei.
- Esfera rotacionando com distorsão
- Partículas em movimento
- Anéis orbitais
- Estrelas de fundo

### BentoGrid.tsx
Componente de grid estilo Bento com glassmorphism e neon.
- Cards interativos com hover effects
- Variantes: default, glass, neon-primary, neon-secondary, neon-accent
- Span configurável (1-4 colunas)

### SmoothScroll.tsx
Componente de scroll cinematográfico com GSAP e Lenis.
- Scroll suave com damping
- Hook useScrollAnimation para animações de scroll
- Integração com GSAP ScrollTrigger

## Uso dos Componentes

### Hero3D

```tsx
import Hero3D from '../components/Hero3D';

function MyPage() {
  return (
    <div className="h-screen w-full">
      <Hero3D />
    </div>
  );
}
```

### BentoGrid

```tsx
import BentoGrid from '../components/BentoGrid';

function MyPage() {
  return (
    <BentoGrid>
      <BentoGrid.Card span="2" variant="glass">
        <h2>Card Grande</h2>
        <p>Conteúdo aqui</p>
      </BentoGrid.Card>
      <BentoGrid.Card span="1" variant="neon-primary">
        <h3>Card Neon</h3>
      </BentoGrid.Card>
      <BentoGrid.Card span="1" variant="default">
        <h3>Card Padrão</h3>
      </BentoGrid.Card>
    </BentoGrid>
  );
}
```

### SmoothScroll

```tsx
import SmoothScroll from '../components/SmoothScroll';

function MyPage() {
  return (
    <SmoothScroll>
      <div className="animate-on-scroll">
        <h1>Seção 1</h1>
      </div>
      <div className="animate-on-scroll">
        <h1>Seção 2</h1>
      </div>
    </SmoothScroll>
  );
}
```

## Troubleshooting

### Erros de TypeScript

Se você encontrar erros de TypeScript após a instalação:

1. Certifique-se de que todas as dependências foram instaladas
2. Reinicie o servidor TypeScript:
   ```bash
   npm run lint
   ```
3. Se os erros persistirem, limpe o cache e reinstale:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

### Erros de Tailwind CSS v4

O Tailwind CSS v4 ainda está em beta. Se encontrar problemas:

1. Verifique se você está usando a versão mais recente
2. Consulte a documentação oficial: https://tailwindcss.com/docs/v4-beta
3. Se necessário, volte para Tailwind CSS v3.4 temporariamente

### Erros de Three.js

Se o componente Hero3D não funcionar:

1. Verifique se o navegador suporta WebGL
2. Certifique-se de que o componente está envolvido em um container com altura definida
3. Verifique o console para erros específicos

## Performance

Otimizações aplicadas no `astro.config.mjs`:

- **Chunking estratégico**: React, Three.js e animações separados
- **OptimizeDeps**: Three.js e dependências otimizadas
- **Compressão HTML**: Habilitada
- **View Transitions**: Habilitadas para transições suaves de página

## Próximos Passos

Após a instalação:

1. Testar o servidor de desenvolvimento
2. Implementar os componentes nas páginas
3. Testar acessibilidade (WCAG AAA)
4. Testar performance (Lighthouse)
5. Validar responsividade em diferentes dispositivos

## Referências

- [[STACK_UPDATE_INSTRUCTIONS|Astro 5 Documentation]]
- [[DESIGN_TOKENS_IMPLEMENTATION|Tailwind CSS v4 Documentation]]
- [[HERO_PAGE_IMPLEMENTATION|Three.js Documentation]]
- [[HERO_PAGE_IMPLEMENTATION|React Three Fiber Documentation]]
- [[HERO_PAGE_IMPLEMENTATION|GSAP Documentation]]
- [[HERO_PAGE_IMPLEMENTATION|Lenis Documentation]]
