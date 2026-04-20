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
tags: [moc, arquitetura, backend, frontend, database, codigo]
tipo: moc
status: processado
topico_principal: Arquitetura Técnica
---

# 🗺️ MOC: Arquitetura Técnica OMNIVIS

## Visão Geral
Este MOC conecta toda a documentação técnica do OMNIVIS, incluindo arquitetura, padrões de código, setup de banco de dados e stack tecnológico.

## Lista Dinâmica de Notas
```dataview
LIST FROM "docs"
WHERE contains(tags, "arquitetura") OR contains(tags, "backend") OR contains(tags, "database") OR contains(tags, "padroes") OR contains(tags, "stack")
  AND tipo != "moc"
SORT file.name ASC
```

## Notas Principais

### Arquitetura e Stack
- [[arquitetura]] - Arquitetura técnica completa (Monorepo + Turborepo)
- [[STACK_UPDATE_INSTRUCTIONS]] - Instruções de atualização do stack
- [[padroes]] - Padrões de código e desenvolvimento

### Infraestrutura e Banco de Dados
- [[SETUP_DATABASE]] - Setup PostgreSQL com Docker
- [[CHANGELOG]] - Histórico de versões e mudanças

## Stack Tecnológico
- **Frontend:** Astro 5 + React 18 + Tailwind CSS v4
- **Backend:** Express + Prisma + PostgreSQL
- **3D/Animações:** Three.js + GSAP + Lenis
- **DevOps:** GitHub Actions + Railway + GitHub Pages

## Tags Relacionadas
#arquitetura #backend #frontend #database #postgresql #prisma #express #monorepo #turborepo
