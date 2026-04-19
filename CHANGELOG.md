# Changelog

## [1.0.1] - 2026-04-19

### Fixed
- Corrigida rota de disponibilidades no backend (de /api/v1 para /api/v1/disponibilidades)
- Adicionados arquivos de rotas faltantes (voluntarios, disponibilidades, abrigos, auth)
- Adicionado serviço packGenerator para gestão de packs
- Corrigido schema Prisma (removida relação doador em Doacao)

### Added
- Docker Compose para PostgreSQL local
- Documentação de setup do banco de dados (SETUP_DATABASE.md)
- Relatório de testes inicial (RELATORIO_TESTES.md)
- Configuração de banco PostgreSQL no Docploy

### Changed
- Atualizado .env.example com credenciais do banco Docploy
- Migrações Prisma executadas com sucesso

## [1.0.0] - 2026-04-19

### Added
- Versão estável v1.0.0 do OMNIVIS
- Todas as 7 fases de desenvolvimento concluídas
- Sistema completo de gestão de desastres naturais

### Changed
- Documentação finalizada
- Relatório de conclusão gerado

### Fixed
- N/A

## [0.6.0] - 2026-04-19

### Added
- Backend - API completa de Packs
- Backend - Sistema de convocação de equipes
- Frontend - Interface de gestão de Packs
- Frontend - Geração e convocação de packs
- Integração frontend-backend para gestão de equipes

### Changed
- N/A

### Fixed
- N/A

## [0.5.0] - 2026-04-19

### Added
- Dashboard da Torre de Controle
- Lista de voluntários com filtros por competência
- Estatísticas em tempo real
- Skeleton screens para loading states
- Filtros avançados por tipo de disponibilidade
- Modal de detalhes do voluntário
- Responsividade para totens (64x64dp targets)
- Testes E2E para Torre de Controle

### Changed
- N/A

### Fixed
- N/A

## [0.3.0] - 2026-04-19

### Added
- Monorepo Turborepo configurado
- Frontend Astro + React + Tailwind configurado
- Backend Express + TypeScript + Prisma configurado
- Pacote de tipos compartilhados (@omnivis/types)
- Pacote de componentes UI (@omnivis/ui)
- CI/CD GitHub Actions configurado
- shadcn/ui base configurado
- Schema Prisma inicial criado

### Changed
- N/A

### Fixed
- N/A
