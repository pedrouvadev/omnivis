<div align="center">

# OMNIVIS - Orquestrador Logístico de Solidariedade

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node Version](https://img.shields.io/badge/node-%3E%3D22.0.0-brightgreen)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org)
[![Status](https://img.shields.io/badge/status-v1.0.13-success)](CHANGELOG.md)
[![🌐 Acesse o Sistema](https://img.shields.io/badge/🔗_Site-OMNIVIS_Online-06B6D4?style=for-the-badge)](https://pedrouvadev.github.io/omnivis/)

**Um sistema disruptivo de gestão de capital humano e material para desastres naturais**

</div>

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Problema Solucionado](#problema-solucionado)
- [Funcionalidades](#funcionalidades)
- [Design System](#design-system)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação e Execução Local](#instalação-e-execução-local)
- [Deploy](#deploy)
- [Como Contribuir](#como-contribuir)
- [Licença](#licença)

---

## 🎯 Sobre o Projeto

OMNIVIS (do Latim: *Omni* - Tudo/Todos e *Vis* - Força/Poder) é um sistema de gestão de capital humano e material para desastres naturais. A ideia surgiu da observação de que em desastres naturais, o problema não é a escassez de recursos, mas a **falta de organização logística** que conecta quem tem o recurso a quem precisa da ação.

Este projeto foi desenvolvido como resposta ao **Desafio Técnico Final de Back-end**, transformando a intenção de ajudar em recursos técnicos catalogados e prontos para mobilização imediata.

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

**🔗 URL Pública:** [https://pedrouvadev.github.io/omnivis/](https://pedrouvadev.github.io/omnivis/)

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

- [Design Tokens Guide](docs/DESIGN_TOKENS_IMPLEMENTATION.md)
- [Stack Update Instructions](docs/STACK_UPDATE_INSTRUCTIONS.md)
- [TechLead Review](docs/TECHLEAD_REVIEW.md)
- [Sprint Planning](docs/SPRINT_PLANNING.md)
- [Accessibility Validation](docs/ACCESSIBILITY_VALIDATION.md)
- [Performance Optimization](docs/PERFORMANCE_OPTIMIZATION.md)
- [Hero Page Implementation](docs/HERO_PAGE_IMPLEMENTATION.md)

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

Este é um projeto desenvolvido como parte de um plano de desenvolvimento estruturado. Para contribuições, por favor:

1. Consulte o plano de desenvolvimento em `Documentação/_PLANO_DEV/`
2. Siga as convenções de código definidas em `docs/padroes.md`
3. Utilize commits no padrão Conventional Commits
4. Garanta que todos os testes passem antes de submeter PR

### Processo de Contribuição

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'feat: Adiciona minha feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 👨‍💻 Autor

**Pedro Uva** ([@pedrouvadev](https://github.com/pedrouvadev))

📧 **Email:** pedrouvadev@gmail.com

🔗 **Repositório:** https://github.com/pedrouvadev/omnivis.git

Desenvolvido como parte de um plano de desenvolvimento estruturado para o desafio técnico de back-end.

**Documentação:** Consulte `Documentação/` para mais detalhes sobre o projeto, especialistas e metodologia.

---

<div align="center">

**Desenvolvido com ❤️ para ajudar em momentos de necessidade**

[⬆ Voltar ao topo](#omnivis---orquestrador-logístico-de-solidariedade)

</div>
