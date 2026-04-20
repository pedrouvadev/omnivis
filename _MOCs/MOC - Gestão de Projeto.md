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
tags: [moc, gestao-projeto, agile, scrum, sprints, backlog]
tipo: moc
status: processado
topico_principal: Gestão de Projeto
---

# 🗺️ MOC: Gestão de Projeto OMNIVIS

## Visão Geral
Este MOC centraliza toda a documentação de gestão do projeto, incluindo planejamento de sprints, user stories, priorização e status.

## Lista Dinâmica de Notas
```dataview
LIST FROM "docs"
WHERE contains(tags, "sprint") OR contains(tags, "backlog") OR contains(tags, "user-stories") OR contains(tags, "priorizacao")
  AND tipo != "moc"
SORT file.name ASC
```

## Notas Principais

### Planejamento e Sprints
- [[SPRINT_PLANNING]] - Planejamento de 9 sprints
- [[BACKLOG_USER_STORIES]] - 33 user stories definidas
- [[PRODUCT_PRIORITIZATION]] - Priorização de features MVP

### Status e Implementação
- [[IMPLEMENTATION_SUMMARY]] - Resumo da implementação
- [[PROJECT_STATUS]] - Status atual do projeto v1.0.13

## Métricas de Projeto
- **Total de Sprints:** 9
- **Story Points:** 158
- **Duração Estimada:** 17 dias
- **Velocidade Média:** ~17 points/sprint

## Tags Relacionadas
#agile #scrum #sprints #backlog #user-stories #mvp #priorizacao
