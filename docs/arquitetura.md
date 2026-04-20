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
tags: [arquitetura, tecnica, backend, frontend, monorepo, turborepo]
tipo: referencia
status: processado
topico_principal: Arquitetura Técnica
---

# Arquitetura Técnica - OMNIVIS

## Visão Geral

[[README|OMNIVIS]] é um sistema [[PERFORMANCE_OPTIMIZATION|monorepo]] construído com Turborepo, utilizando uma arquitetura de componentes modernos com separação clara entre frontend e backend, compartilhando tipos TypeScript através de um pacote dedicado.

## Estrutura do Monorepo

```
omnivis/
├── apps/
│   ├── `apps/backend/`          # API [[SETUP_DATABASE|Express + Prisma + PostgreSQL]]
│   └── `apps/frontend/`         # [[STACK_UPDATE_INSTRUCTIONS|Astro + React + Tailwind]]
├── packages/
│   ├── types/            # Tipos TypeScript compartilhados
│   └── ui/               # Componentes UI compartilhados
└── .github/workflows/    # CI/CD pipelines
```

## Arquitetura do Backend

### Stack Tecnológica
- **Runtime:** Node.js 22 LTS
- **Framework:** Express 4.18
- **Linguagem:** TypeScript 5 (Strict Mode)
- **ORM:** Prisma 5.0
- **Database:** PostgreSQL
- **Autenticação:** JWT + bcryptjs
- **Validação:** Zod

### Estrutura de Diretórios

```
apps/backend/
├── src/
│   ├── index.ts              # Entry point do servidor
│   ├── routes/               # Rotas da API
│   │   ├── voluntarios.ts    # CRUD de voluntários
│   │   ├── disponibilidades.ts # CRUD de disponibilidades
│   │   ├── abrigos.ts        # CRUD de abrigos
│   │   ├── doacoes.ts        # CRUD de doações
│   │   ├── packs.ts          # CRUD de packs
│   │   └── auth.ts           # Autenticação
│   ├── services/             # Lógica de negócio
│   │   └── packGenerator.ts  # Algoritmo de formação de packs
│   └── types/                # Tipos locais
├── prisma/
│   ├── schema.prisma         # Schema do banco de dados
│   └── migrations/          # Migrations do banco
└── package.json
```

### Padrões de Arquitetura

#### 1. Separação de Responsabilidades
- **Routes:** Manipulam requisições HTTP, validação básica e chamadas a serviços
- **Services:** Contêm lógica de negócio complexa (algoritmos, cálculos)
- **Prisma:** ORM para acesso ao banco de dados

#### 2. Validação
- Zod schemas para validação de entrada em rotas
- Validação de tipos via TypeScript
- Sanitização de dados antes do banco

#### 3. Autenticação
- JWT tokens stateless
- Senhas hash com bcrypt (12 rounds)
- Middleware de autenticação para rotas protegidas

#### 4. CORS
- Configurado para localhost:4321 (frontend dev)
- Credentials habilitado para cookies/auth

## Arquitetura do Frontend

### Stack Tecnológica
- **Framework:** Astro 4.x
- **UI:** React 18 (Islands Architecture)
- **Styling:** Tailwind CSS 3.4
- **Componentes:** shadcn/ui
- **Testing:** Playwright (E2E)

### Estrutura de Diretórios

```
apps/frontend/
├── src/
│   ├── pages/               # Páginas Astro
│   │   ├── index.astro      # Homepage
│   │   ├── cadastro.astro   # Cadastro de voluntários
│   │   ├── dashboard.astro  # Torre de controle
│   │   └── abrigos.astro    # Lista de abrigos
│   ├── components/          # Componentes React (Islands)
│   │   ├── voluntario/
│   │   │   └── CadastroForm.tsx
│   │   ├── dashboard/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── DashboardMap.tsx
│   │   │   └── VoluntarioList.tsx
│   │   └── packs/
│   │       └── PackManagement.tsx
│   ├── layouts/             # Layouts compartilhados
│   │   └── Layout.astro
│   └── lib/                 # Utilitários
├── e2e/                     # Testes E2E
└── package.json
```

### Padrões de Arquitetura

#### 1. Islands Architecture
- Páginas estáticas renderizadas no servidor (Astro)
- Componentes interativos renderizados no cliente (React Islands)
- JavaScript mínimo carregado apenas onde necessário

#### 2. Componentização
- Componentes reutilizáveis via shadcn/ui
- Componentes customizados em `components/`
- Separação entre componentes de página e componentes compartilhados

#### 3. Performance
- Lazy loading de componentes
- Skeleton screens para loading states
- Imagens otimizadas (WebP/AVIF)
- Critical CSS inline

#### 4. Acessibilidade
- Touch targets de 48x48dp (64x64dp em totens)
- Contraste WCAG AAA (7:1)
- Labels ARIA em todos os inputs
- Navegação por teclado completa

## Arquitetura de Banco de Dados

### Schema Prisma

```prisma
model Voluntario {
  id               String            @id @default(cuid())
  nome             String
  email            String            @unique
  telefone         String
  localizacao      String // "lat,lng"
  createdAt        DateTime          @default(now())
  disponibilidades Disponibilidade[]
}

model Disponibilidade {
  id           String     @id @default(cuid())
  tipo         String // Saude, Logistica, Engenharia
  ativo        String // Barco, Caminhao, Drone, CNH-D
  voluntarioId String
  voluntario   Voluntario @relation(fields: [voluntarioId], references: [id])
}

model Abrigo {
  id           String   @id @default(cuid())
  nome         String
  localizacao  String
  capacidade   Int
  ocupacao     Int
  necessidades String[]
}

model Doacao {
  id           String   @id @default(cuid())
  doadorId     String
  tipo         String
  status       String // Pendente, Coletada, Entregue
  transporteId String?
  createdAt    DateTime @default(now())
}

model Pack {
  id         String   @id @default(cuid())
  nome       String
  tipo       String // Reconstrucao, Limpeza, Logistica
  membros    String[] // IDs de voluntarios
  disponivel Boolean  @default(true)
}
```

### Relacionamentos
- Voluntario ↔ Disponibilidade (1:N)
- Doacao ↔ Voluntario (N:1, implícito via doadorId)
- Pack ↔ Voluntario (N:M, via array de IDs)

## Comunicação Frontend-Backend

### API REST
- Base URL: `http://localhost:3000/api/v1`
- Content-Type: `application/json`
- Autenticação via Bearer token (JWT)

### Endpoints Principais
- `GET /api/v1/voluntarios` - Listar voluntários
- `POST /api/v1/voluntarios` - Criar voluntário
- `GET /api/v1/disponibilidades` - Listar disponibilidades
- `POST /api/v1/disponibilidades` - Criar disponibilidade
- `GET /api/v1/abrigos` - Listar abrigos
- `POST /api/v1/packs` - Criar pack
- `POST /api/v1/auth/login` - Login

### Integração
- Cliente HTTP via `fetch` nativo
- Tipos compartilhados via `@omnivis/types`
- Error handling centralizado
- Refresh token logic

## CI/CD

### GitHub Actions
- Deploy automático para GitHub Pages (frontend)
- Deploy automático para Railway (backend)
- Trigger: Push para branch `main`

### Workflows
- `.github/workflows/deploy-frontend.yml`
- `.github/workflows/deploy-backend.yml`

## Deploy

### Frontend
- **Plataforma:** GitHub Pages
- **URL:** `https://usuario.github.io/omnivis`
- **Build:** `npm run build`

### Backend
- **Plataforma:** Railway
- **URL:** `https://omnivis-backend.railway.app`
- **Runtime:** Node.js 22 LTS
- **Database:** PostgreSQL (Railway)

## Decisões Arquiteturais

### 1. Monorepo com Turborepo
**Justificativa:**
- Compartilhamento de tipos TypeScript entre frontend e backend
- Build orquestrado e eficiente
- Scripts centralizados
- Facilita manutenção de código compartilhado

### 2. Astro + React Islands
**Justificativa:**
- Performance extrema (Lighthouse 100/100)
- JavaScript mínimo carregado
- SEO otimizado (renderização no servidor)
- Interatividade apenas onde necessário

### 3. Express + Prisma
**Justificativa:**
- Express é maduro e extensível
- Prisma fornece type-safety no banco
- PostgreSQL é robusto e escalável
- Ecossistema vasto de middlewares

### 4. shadcn/ui
**Justificativa:**
- Componentes modernos e acessíveis
- Customizável via Tailwind
- Zero runtime overhead
- Compatível com React Islands

### 5. PostgreSQL
**Justificativa:**
- Suporte a geolocalização nativo
- Robusto e escalável
- Compatível com Prisma
- Open source

## Próximas Melhorias

1. **WebSocket para atualizações em tempo real**
2. **Cache com Redis**
3. **CDN para assets estáticos**
4. **Rate limiting na API**
5. **Monitoramento com Sentry**
6. **Logs estruturados com Winston**
7. **Testes de integração backend**
8. **Testes unitários frontend**
