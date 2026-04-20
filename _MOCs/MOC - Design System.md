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
tags: [moc, design-system, ui, ux, componentes, acessibilidade]
tipo: moc
status: processado
topico_principal: Design System
---

# 🗺️ MOC: Design System OMNIVIS

## Visão Geral
Este MOC conecta toda a documentação relacionada ao Design System do OMNIVIS, incluindo tokens, componentes, acessibilidade e otimizações.

## Lista Dinâmica de Notas
```dataview
LIST FROM "docs"
WHERE contains(tags, "design-system") OR contains(tags, "design-tokens") OR contains(tags, "accessibility") OR contains(tags, "performance") OR contains(tags, "hero-page")
  AND tipo != "moc"
SORT file.name ASC
```

## Notas Principais

### Fundamentos do Design System
- [[DESIGN_TOKENS_IMPLEMENTATION]] - Guia completo de Design Tokens
- [[TECHLEAD_REVIEW]] - Revisão técnica da arquitetura
- [[HERO_PAGE_IMPLEMENTATION]] - Implementação da Hero Page

### Qualidade e Acessibilidade
- [[ACCESSIBILITY_VALIDATION]] - Validação WCAG AAA
- [[PERFORMANCE_OPTIMIZATION]] - Otimização de performance e lazy loading

### Componentes Premium
- Hero3D - Componente 3D interativo
- BentoGrid - Grid estilo Bento
- SmoothScroll - Scroll cinematográfico

## Tags Relacionadas
#design-system #design-tokens #wcag #performance #componentes #ui #ux
