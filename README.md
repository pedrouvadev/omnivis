# OMNIVIS - Orquestrador Logístico de Solidariedade

## 1 - Apresentação da Ideia

OMNIVIS é um sistema disruptivo de gestão de capital humano e material para desastres naturais. A ideia surgiu da observação de que em desastres naturais, o problema não é a escassez de recursos, mas a falta de organização logística que conecta quem tem o recurso a quem precisa da ação.

## 2 - Problema Escolhido

**Ineficiência da Solidariedade Espontânea** e **Paralisia Logística do Doador Individual**. Em situações de desastre, voluntários e doadores querem ajudar, mas não há um sistema organizado que transforme a intenção de ajudar em recursos técnicos catalogados e prontos para mobilização imediata.

## 3 - Solução Proposta

Um ecossistema de cadastro de alta granularidade que transforma a intenção de ajudar em recursos técnicos catalogados através de:
- **Inventário de Prontidão:** Mapeamento prévio de ativos e competências
- **Triangulação Logística:** Conexão doador-ponto de coleta-transportador
- **Packs de Voluntários:** Agrupamento automático de competências
- **Torre de Controle:** Dashboard administrativo para gestores de crise

## 4 - Estrutura do Sistema

### Frontend
- **Framework:** Astro 6.x (Static Site Generation)
- **Interatividade:** React 19 (Islands Architecture)
- **Estilização:** Tailwind CSS 4+ + shadcn/ui
- **Linguagem:** TypeScript (Strict Mode)
- **Hosting:** GitHub Pages

### Backend
- **Runtime:** Node.js 22 LTS
- **Framework:** Express.js + TypeScript
- **ORM/Database:** Prisma ORM + PostgreSQL (Neon.tech)
- **Validação:** Zod
- **Autenticação:** JWT + bcrypt
- **Hosting:** Railway/Render

### Banco de Dados
- **Database:** PostgreSQL (serverless)
- **ORM:** Prisma (Type-safe)
- **Hosting:** Neon.tech ou Railway

## Tecnologias Utilizadas

- Astro 6.x
- React 19
- Tailwind CSS 4+
- shadcn/ui
- Node.js 22 LTS
- Express.js
- TypeScript (Strict Mode)
- Prisma ORM
- PostgreSQL
- Zod
- JWT
- Turborepo
- GitHub Actions

## Como Executar

### Pré-requisitos
- Node.js 22 LTS
- npm ou yarn
- Conta GitHub (para deploy)

### Instalação

```bash
# Clone o repositório
git clone <repo-url>
cd omnivis-code

# Instale dependências
npm install

# Configure variáveis de ambiente
cp .env.example .env
# Edite .env com suas configurações

# Execute em desenvolvimento
npm run dev
```

### Scripts

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run test` - Executa testes
- `npm run lint` - Executa linter

## Documentação da API

A documentação da API está disponível via Swagger UI após iniciar o backend.

---

**Status do Projeto:** Em Desenvolvimento
**Versão:** 0.0.1
**Última Atualização:** 2026-04-19
