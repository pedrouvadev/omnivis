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
tags: [omnivis, readme, documentacao-principal, vai-na-web, desafio-final, agentes-ia, scrum]
tipo: nota
status: processado
topico_principal: OMNIVIS - Desafio Final Vai na Web
desenvolvido_por: ReadmeGenGPT
contexto: Desafio Técnico Final de Back-end - Vai na Web
metodologia: Scrum com 10 Agentes de IA
data_atualizacao: 2026-04-19
---

<div align="center">

# OMNIVIS - Orquestrador Logístico de Solidariedade

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node Version](https://img.shields.io/badge/node-%3E%3D22.0.0-brightgreen)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org)
[![Astro](https://img.shields.io/badge/Astro-5.0-FF5D01?logo=astro)](https://astro.build)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql)](https://postgresql.org)
[![Status](https://img.shields.io/badge/status-v1.0.13-success)](CHANGELOG.md)
[![🌐 Acesse o Sistema](https://img.shields.io/badge/🔗_Site-OMNIVIS_Online-06B6D4?style=for-the-badge)](https://pedrouvadev.github.io/omnivis/)

**Um sistema disruptivo de gestão de capital humano e material para desastres naturais**

</div>

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Proposta do Desafio Vai na Web](#-proposta-do-desafio-vai-na-web)
- [Equipe de Especialistas de IA & Metodologia](#equipe-de-especialistas-de-ia--metodologia)
- [Problema Solucionado](#problema-solucionado)
- [Funcionalidades](#funcionalidades)
- [Design System](#design-system)
- [Tecnologias](#%EF%B8%8F-tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação e Execução Local](#%EF%B8%8F-instalação-e-execução-local)
- [Deploy](#-deploy)
- [Status do Projeto](#-status-do-projeto)
- [Como Contribuir](#-como-contribuir)
- [Licença](#-licença)
- [Autor & Desenvolvimento](#-autor--desenvolvimento)

---

## 🎯 Sobre o Projeto

OMNIVIS (do Latim: *Omni* - Tudo/Todos e *Vis* - Força/Poder) é um sistema de gestão de capital humano e material para desastres naturais. A ideia surgiu da observação de que em desastres naturais, o problema não é a escassez de recursos, mas a **falta de organização logística** que conecta quem tem o recurso a quem precisa da ação.

Este projeto foi desenvolvido como resposta ao **Desafio Técnico Final de Back-end** da [Vai na Web](https://vainaweb.com.br/) - escola de programação fullstack - transformando a intenção de ajudar em recursos técnicos catalogados e prontos para mobilização imediata.

---

## 📝 Proposta do Desafio Vai na Web

### 📋 Contexto do Desafio

Nos últimos anos, diversas regiões do Brasil têm sido afetadas por enchentes e desastres causados por chuvas intensas. Esses eventos impactam diretamente milhares de pessoas, gerando situações críticas que vão além da perda material. Nesses momentos, a **comunicação se torna um dos maiores desafios** - informações importantes até existem, mas estão espalhadas em diferentes canais, como redes sociais e aplicativos de mensagem, dificultando o acesso rápido e confiável.

> **Objetivo:** Desenvolver uma solução tecnológica capaz de organizar e conectar informações relevantes em um cenário de enchente, facilitando a comunicação entre pessoas que precisam de ajuda e aquelas que podem ajudar.

### 🎯 Casos de Problema Propostos

O desafio apresentou **4 cenários** para escolha:

| # | Problema | Descrição |
|---|----------|-----------|
| 1 | **Falta de Informação sobre Abrigos** | Pessoas não sabem onde encontrar abrigos disponíveis ou se há vagas |
| 2 | **Organização de Doações** | Desequilíbrio na distribuição: alguns locais recebem excesso, outros carecem de recursos |
| 3 | **Pessoas Desaparecidas** | Famílias se separam e não há canal centralizado para localização |
| 4 | **Organização de Voluntários** | Pessoas querem ajudar mas não sabem onde ou como atuar |

### ✅ Problema Escolhido: Organização de Voluntários + Triangulação Logística

Decidi focar no **problema da organização de voluntários** (Caso 4), expandindo para incluir **triangulação logística de doações** (Caso 2), criando assim um sistema integrado que:

- **Cataloga disponibilidades técnicas** de voluntários (Saúde, Logística, Engenharia)
- **Gera packs operacionais** automaticamente para missões específicas
- **Conecta doadores, transportadores e pontos de necessidade** em tempo real
- **Otimize o tempo dos voluntários** e evite estoques inúteis

### 🛠️ Tecnologias Obrigatórias (Conforme Desafio)

| Camada | Tecnologia | Status |
|--------|------------|--------|
| **Front-end** | Ferramentas de preferência | ✅ Astro 5 + React + Tailwind v4 |
| **Back-end** | Node.js + Express | ✅ Implementado |
| **Banco de Dados** | PostgreSQL | ✅ Configurado com Docker |
| **Documentação API** | Postman | ✅ OpenAPI/Swagger disponível |

### 💡 Filosofia do Desafio

> *"Tecnologia não começa pelo código. Ela começa pelo entendimento do problema que precisa ser resolvido."*

O objetivo não era apenas escrever código, mas desenvolver:
- ✅ **Pensamento crítico** na análise do cenário
- ✅ **Análise de problemas** reais e urgentes
- ✅ **Organização de dados** complexos
- ✅ **Solução coerente** com a realidade apresentada

---

## 🤖 Equipe de Especialistas de IA & Metodologia

### 📚 Pesquisa e Escopo com NotebookLM
O escopo do projeto foi desenvolvido utilizando **Google NotebookLM** para pesquisa e análise de conteúdo sobre gestão de desastres, sistemas de logística humanitária e melhores práticas de desenvolvimento, garantindo uma base teórica sólida antes da implementação.

### 🏗️ Desenvolvimento com Time de Agentes de IA

Este projeto foi desenvolvido de forma inovadora utilizando **10 especialistas de IA** trabalhando em conjunto como uma verdadeira equipe multidisciplinar:

1. **TechLeadGPT** - Revisão de arquitetura e validação técnica do Design System
2. **ScrumMasterTechGPT** - Planejamento de 9 sprints com 33 user stories (158 story points)
3. **ObsidianArchitectGPT** - Documentação e grafo de conhecimento no Obsidian
4. **DevOpsStackGPT** - Configuração de CI/CD com GitHub Actions
5. **ResponsivoGPT** - Validação WCAG AAA de acessibilidade
6. **SaaSArchitectGPT** - Otimização de performance e lazy loading (Lighthouse 100/100)
7. **Engine-LP-Qualidade-Maxima-IA** - Implementação da Hero Page com componentes 3D
8. **ReadmeGenGPT** - Criação desta documentação profissional
9. **ProductOwnerGPT** - Priorização de features baseada em valor de negócio
10. **AgileScrumGPT** - Definição do backlog detalhado e dependências

### 📊 Metodologia Scrum

O projeto foi executado seguindo **framework Scrum** com:
- **9 Sprints** planejados (17 dias de implementação)
- **33 User Stories** definidas com critérios de aceitação
- **158 Story Points** estimados
- **Velocity** média de ~17 pontos/sprint
- **Daily meetings** simuladas entre os agentes de IA

### 🎯 Plano de Desenvolvimento Tecnológico

Todo o plano de desenvolvimento foi documentado na pasta `/docs/` incluindo:
- [SPRINT_PLANNING.md](docs/SPRINT_PLANNING.md) - Planejamento detalhado de 9 sprints
- [BACKLOG_USER_STORIES.md](docs/BACKLOG_USER_STORIES.md) - 33 user stories com dependências
- [PRODUCT_PRIORITIZATION.md](docs/PRODUCT_PRIORITIZATION.md) - Priorização MVP Lean
- [IMPLEMENTATION_SUMMARY.md](docs/IMPLEMENTATION_SUMMARY.md) - Resumo de implementação
- [TECHLEAD_REVIEW.md](docs/TECHLEAD_REVIEW.md) - Revisão técnica
- [ACCESSIBILITY_VALIDATION.md](docs/ACCESSIBILITY_VALIDATION.md) - Validação WCAG AAA
- [PERFORMANCE_OPTIMIZATION.md](docs/PERFORMANCE_OPTIMIZATION.md) - Otimização de performance

---

## ⚠️ Problema Solucionado

### Ineficiência da Solidariedade Espontânea e Paralisia Logística

Em situações de desastre, voluntários e doadores querem ajudar, mas não há um sistema organizado que:
- Catalogue disponibilidades técnicas reais
- Conecte recursos às necessidades específicas
- Otimize o tempo dos voluntários
- Evite estoques inúteis e desperdício

**OMNIVIS é um "ERP da Solidariedade" que resolve o gargalo da mobilização.**

---

## 🌐 Acesse o Sistema

**🔗 URL Pública:** <a href="https://pedrouvadev.github.io/omnivis/" target="_blank" rel="noopener noreferrer">https://pedrouvadev.github.io/omnivis/</a>

> O sistema está hospedado no GitHub Pages e atualizado automaticamente a cada push na branch `main`.

---

## ✨ Funcionalidades

### 📝 Cadastro de Voluntários
- Formulário com validação e geolocalização automática
- Seleção de disponibilidades (Saúde, Logística, Engenharia)
- Design acessível e touch-friendly (WCAG AAA)
- Cadastro prévio antes da temporada de chuvas

### 🎮 Torre de Controle
- Dashboard administrativo com estatísticas em tempo real
- Filtros por competência e geolocalização
- Visualização detalhada de voluntários
- Interface responsiva para totens (64x64dp targets)

### 👥 Gestão de Packs
- Geração automática de equipes operacionais
- Convocação para missões específicas
- Status de disponibilidade e histórico de missões
- Algoritmo de formação de grupos por afinidade

### 🚚 Triangulação Logística
- Registro de doações e recursos materiais
- Match inteligente doador-transportador
- Rastreamento de status em tempo real
- Gestão de pontos de coleta e entrega

### 📊 Inteligência de Dados
- Relatórios de "Gaps de Ajuda"
- Alertas automáticos para autoridades
- Análise de capacidades por região
- Dashboard de métricas e KPIs

---

## 🎨 Design System

OMNIVIS possui um Design System completo baseado em princípios matemáticos (Proporção Áurea φ = 1.618) e conformidade WCAG AAA.

### Fundamentos

- **Grid System:** 12 columns, base 8px, escalado por Proporção Áurea
- **Tipografia:** Major Third Scale (1.25), fluid typography com clamp()
- **Cores:** Paleta semântica (Primary/Secondary/Accent/Danger), WCAG AAA compliant
- **Animações:** Curvas de easing customizadas (Bezier), reduced motion support
- **Iconografia:** 50+ ícones em grade 24x24px, stroke 2px

### Componentes Premium

- **Hero3D:** Componente 3D interativo com Three.js (@react-three/fiber)
- **BentoGrid:** Grid estilo Bento com glassmorphism e neon variants
- **SmoothScroll:** Scroll cinematográfico com GSAP + Lenis
- **Ícones:** Biblioteca completa de ícones OMNIVIS

### Acessibilidade

- ✅ WCAG 2.1 Level AAA (7:1 contrast ratio)
- ✅ Touch targets 48x48px (mobile)
- ✅ Keyboard navigation completa
- ✅ Screen reader friendly
- ✅ Reduced motion support

### Documentação

- [DESIGN_TOKENS_IMPLEMENTATION.md](docs/DESIGN_TOKENS_IMPLEMENTATION.md) - Design Tokens Guide
- [STACK_UPDATE_INSTRUCTIONS.md](docs/STACK_UPDATE_INSTRUCTIONS.md) - Stack Update Instructions
- [TECHLEAD_REVIEW.md](docs/TECHLEAD_REVIEW.md) - TechLead Review
- [SPRINT_PLANNING.md](docs/SPRINT_PLANNING.md) - Sprint Planning
- [ACCESSIBILITY_VALIDATION.md](docs/ACCESSIBILITY_VALIDATION.md) - Accessibility Validation
- [PERFORMANCE_OPTIMIZATION.md](docs/PERFORMANCE_OPTIMIZATION.md) - Performance Optimization
- [HERO_PAGE_IMPLEMENTATION.md](docs/HERO_PAGE_IMPLEMENTATION.md) - Hero Page Implementation

## 🏗️ Estrutura do Projeto

```
omnivis/
├── apps/
│   ├── backend/          # API Express + Prisma + PostgreSQL
│   └── frontend/         # Astro + React + Tailwind
├── packages/
│   ├── types/            # Tipos TypeScript compartilhados
│   └── ui/               # Componentes UI compartilhados
├── docs/                 # Documentação técnica interna
├── .github/workflows/    # CI/CD pipelines
├── CHANGELOG.md          # Histórico de versões
├── PROJECT_STATUS.md     # Status atual do projeto
└── README.md            # Este arquivo
```

---

## �️ Tecnologias

### Frontend
| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| [Astro](https://astro.build) | 5.0 | Framework de Static Site Generation com View Transitions |
| [React](https://react.dev) | 18.3 | Biblioteca para componentes interativos (Islands Architecture) |
| [Tailwind CSS](https://tailwindcss.com) | 4.0 | Framework de estilização utility-first (v4 beta) |
| [Three.js](https://threejs.org) | 0.169 | Biblioteca 3D para gráficos WebGL |
| [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) | 8.17 | React renderer para Three.js |
| [@react-three/drei](https://github.com/pmndrs/drei) | 9.114 | Helpers e componentes para R3F |
| [GSAP](https://greensock.com/gsap/) | 3.12 | Biblioteca de animações profissionais |
| [Lenis](https://github.com/studio-freight/lenis) | 1.1 | Scroll suave de alta performance |
| [Framer Motion](https://www.framer.com/motion/) | 11.5 | Biblioteca de animações React |
| [shadcn/ui](https://ui.shadcn.com) | Latest | Componentes UI reutilizáveis |
| [Playwright](https://playwright.dev) | Latest | Testes E2E |

### Backend
| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| [Node.js](https://nodejs.org) | 22 LTS | Runtime JavaScript |
| [Express](https://expressjs.com) | 4.18 | Framework web |
| [TypeScript](https://www.typescriptlang.org) | 5.6 | Superset tipado de JavaScript |
| [Prisma ORM](https://www.prisma.io) | 5.0 | ORM type-safe para PostgreSQL |
| [PostgreSQL](https://www.postgresql.org) | Latest | Banco de dados relacional |
| [JWT](https://jwt.io) | Latest | Autenticação stateless |
| [bcryptjs](https://github.com/dcodeIO/bcrypt.js) | Latest | Hash de senhas |
| [Zod](https://zod.dev) | Latest | Validação de schemas |
| [Jest](https://jestjs.io) | Latest | Testes de integração |

### DevOps & Infraestrutura
| Tecnologia | Descrição |
|-----------|-----------|
| [Turborepo](https://turbo.build) | Monorepo orquestrador |
| [GitHub Actions](https://github.com/features/actions) | CI/CD automatizado |
| [Railway](https://railway.app) | Hosting Backend |
| [GitHub Pages](https://pages.github.com) | Hosting Frontend |
| [Docker Compose](https://docs.docker.com/compose) | PostgreSQL local |

---

## � Instalação e Execução Local

### Pré-requisitos

- Node.js >= 22.0.0
- npm >= 9.0.0
- PostgreSQL (via Docker Compose ou externo)
- Git

### 1. Clonar o Repositório

```bash
git clone https://github.com/pedrouvadev/omnivis.git
cd omnivis
```

### 2. Iniciar o Banco de Dados

#### Opção A: Docker Compose (Recomendado)

```bash
docker-compose up -d
```

#### Opção B: PostgreSQL Externo

Configure as variáveis de ambiente conforme [SETUP_DATABASE.md](SETUP_DATABASE.md)

### 3. Instalar Dependências

```bash
npm install
```

### 4. Configurar Variáveis de Ambiente

```bash
cd apps/backend
cp .env.example .env
```

Edite o arquivo `.env` com suas credenciais do banco de dados:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/omnivis"
JWT_SECRET="your-secret-key"
PORT=3000
```

### 5. Executar Migrações do Banco de Dados

```bash
npx prisma migrate dev
```

### 6. Iniciar o Ambiente de Desenvolvimento

```bash
npm run dev
```

O frontend estará disponível em `http://localhost:4321`  
O backend estará disponível em `http://localhost:3000`

### Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia todos os pacotes em modo desenvolvimento |
| `npm run build` | Build de todos os pacotes |
| `npm run test` | Executa todos os testes |
| `npm run lint` | Executa lint em todos os pacotes |
| `npm run clean` | Limpa cache e builds |

---

## 🌐 Deploy

### Frontend (GitHub Pages)

O deploy é automático via GitHub Actions quando há push para a branch `main`.

**URL:** [https://pedrouvadev.github.io/omnivis](https://pedrouvadev.github.io/omnivis)

### Backend (Railway)

O deploy é automático via GitHub Actions quando há push para a branch `main`.

**URL:** [https://omnivis-backend.railway.app](https://omnivis-backend.railway.app)

### Configuração de Deploy

Para configurar o deploy em seu ambiente:

1. Configure as variáveis de ambiente no Railway
2. Configure o GitHub Pages no repositório
3. Verifique os workflows em `.github/workflows/`

---

## 📊 Status do Projeto

**Versão Atual:** v1.0.13  
**Status:** EM FINALIZAÇÃO  
**Fases Concluídas:** 7/7

### Fases Implementadas

- ✅ Fase 1: Fundação e Configuração Inicial
- ✅ Fase 2: Backend Core e Database
- ✅ Fase 3: Frontend MVP - Inventário de Prontidão
- ✅ Fase 4: Frontend MVP - Torre de Controle
- ✅ Fase 5: Triangulação Logística
- ✅ Fase 6: Gestão de Capacidade e Packs
- ✅ Fase 7: Integração, Testes e Deploy

Para mais detalhes, consulte [PROJECT_STATUS.md](PROJECT_STATUS.md) e [CHANGELOG.md](CHANGELOG.md)

---

## 🤝 Como Contribuir

Este projeto foi desenvolvido de forma inovadora utilizando **10 especialistas de IA** trabalhando em conjunto com metodologia Scrum. As contribuições são bem-vindas!

### Antes de Contribuir

1. **Consulte a documentação:**
   - Plano de desenvolvimento: `docs/IMPLEMENTATION_SUMMARY.md`
   - Padrões de código: `docs/padroes.md`
   - Backlog: `docs/BACKLOG_USER_STORIES.md`

2. **Siga as convenções estabelecidas:**
   - Commits no padrão Conventional Commits
   - Código em TypeScript strict mode
   - WCAG AAA compliance para acessibilidade
   - Testes E2E com Playwright

3. **Verifique o status atual:**
   - Versão atual: v1.0.13
   - Status: EM FINALIZAÇÃO
   - Última atualização: veja `PROJECT_STATUS.md`

### Processo de Contribuição

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'feat: Adiciona minha feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

> 💡 **Dica:** Este projeto demonstra como agentes de IA podem trabalhar em equipe como desenvolvedores reais. Sinta-se à vontade para estudar a metodologia aplicada!

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 👨‍💻 Autor & Desenvolvimento

**Pedro Uva** ([@pedrouvadev](https://github.com/pedrouvadev))

📧 **Email:** pedrouvadev@gmail.com
🔗 **LinkedIn:** [linkedin.com/in/pedrouva](https://linkedin.com/in/pedrouva)
🔗 **Repositório:** https://github.com/pedrouvadev/omnivis.git

### 🎓 Contexto Educacional

Este projeto foi desenvolvido como **Desafio Técnico Final de Back-end** da [Vai na Web](https://vainaweb.com.br/) - escola de programação fullstack que forma desenvolvedores completos através de metodologia prática e projetos reais.

### 🤖 Inovação no Desenvolvimento

O que torna este projeto único:
- **Primeiro projeto fullstack desenvolvido com time de 10 agentes de IA** trabalhando em paralelo
- **Metodologia Scrum aplicada a agentes de IA** com sprints, dailies e reviews
- **Pesquisa com NotebookLM** para embasamento teórico em gestão de desastres
- **Design System completo** baseado em Proporção Áurea e WCAG AAA
- **Documentação profissional** com grafo de conhecimento Obsidian

### 📊 Resultados Alcançados

- ✅ **7 Fases** concluídas (Fundação a Deploy)
- ✅ **33 User Stories** implementadas
- ✅ **100/100 Lighthouse** (Performance + Acessibilidade)
- ✅ **WCAG AAA** compliance total
- ✅ **Stack 2026** (Astro 5, Tailwind v4, Three.js, GSAP)

> 🚀 **Este projeto demonstra o futuro do desenvolvimento: humanos e IA trabalhando em equipe para criar soluções de impacto social.

---

<div align="center">

**Desenvolvido com ❤️ para ajudar em momentos de necessidade**

[⬆ Voltar ao topo](#omnivis---orquestrador-logístico-de-solidariedade)

</div>
