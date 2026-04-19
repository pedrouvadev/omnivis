# OMNIVIS - Orquestrador Logístico de Solidariedade

## 1 - Apresentação da Ideia

OMNIVIS é um sistema disruptivo de gestão de capital humano e material para desastres naturais. A ideia surgiu da observação de que em desastres naturais, o problema não é a escassez de recursos, mas a falta de organização logística que conecta quem tem o recurso a quem precisa da ação.

## 2 - Problema Escolhido

**Ineficiência da Solidariedade Espontânea** e **Paralisia Logística do Doador Individual**. Em situações de desastre, voluntários e doadores querem ajudar, mas não há um sistema organizado que transforme a intenção de ajudar em recursos técnicos catalogados e prontos para mobilização imediata.

### Cadastro de Voluntários
- Formulário com validação e geolocalização
- Seleção de disponibilidades (Saúde, Logística, Engenharia)
- Design acessível e touch-friendly (WCAG AAA)

### Torre de Controle
- Dashboard administrativo com estatísticas em tempo real
- Filtros por competência e geolocalização
- Visualização detalhada de voluntários

### Gestão de Packs
- Geração automática de equipes operacionais
- Convocação para missões
- Status de disponibilidade e histórico

### Triangulação Logística
- Registro de doações
- Match inteligente doador-transportador
- Rastreamento de status em tempo real

## 🏗️ Estrutura

```
omnivis-code/
├── apps/
│   ├── backend/          # API Express + Prisma + PostgreSQL
│   └── frontend/         # Astro + React + Tailwind
├── packages/
│   ├── types/            # Tipos TypeScript compartilhados
│   └── ui/               # Componentes UI compartilhados
└── .github/workflows/    # CI/CD pipelines
```

## 🚀 Tecnologias

### Frontend
- Astro 4.x
- React 18
- Tailwind CSS 3.4
- shadcn/ui
- Playwright (E2E tests)

### Backend
- Node.js 22 LTS
- Express 4.18
- TypeScript 5
- Prisma ORM 5.0
- PostgreSQL
- JWT + bcryptjs
- Zod (validação)
- Jest (integration tests)

### DevOps
- Turborepo (monorepo)
- GitHub Actions (CI/CD)
- Railway (Backend deploy)
- GitHub Pages (Frontend deploy)

## 📦 Instalação

```bash
# Clonar repositório
git clone <repo-url>
cd omnivis-code

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp apps/backend/.env.example apps/backend/.env
# Editar apps/backend/.env com suas credenciais

# Executar migrações do banco de dados
cd apps/backend
npx prisma migrate dev

# Iniciar desenvolvimento
npm run dev
```

## 📜 Scripts

- `npm run dev` - Inicia todos os pacotes em modo desenvolvimento
- `npm run build` - Build de todos os pacotes
- `npm run test` - Executa todos os testes
- `npm run lint` - Executa lint em todos os pacotes

## 🌐 Deploy

- **Frontend:** GitHub Pages (automático via GitHub Actions)
- **Backend:** Railway (automático via GitHub Actions)

## 📊 Status

✅ **v1.0.0** - Todas as 7 fases concluídas e sistema funcional

## 📄 Licença

MIT

## 👥 Contribuição

Este é um projeto desenvolvido como parte de um plano de desenvolvimento estruturado. Para contribuições, por favor consulte o plano de desenvolvimento em `Documentação/_PLANO_DEV/`.

---

**Status do Projeto:** Concluído
**Versão:** 1.0.0
