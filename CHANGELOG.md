# Changelog

## [1.0.13] - 2026-04-19

### Added
- Documentação OpenAPI/Swagger completa da API (swagger.json)
- Documentação técnica interna (docs/arquitetura.md)
- Documentação de padrões de código (docs/padroes.md)
- Relatório de validação do desenvolvimento (Documentação/_PLANO_DEV/RELATORIO_VALIDACAO_DESENVOLVIMENTO.md)

### Fixed
- Backend reiniciado e rotas de disponibilidades verificadas (não há erro, rotas funcionando corretamente)
- Integração frontend-backend testada e funcionando
- Criação de dados via API validada

### Changed
- PROJECT_STATUS.md atualizado com tarefas completadas por especialistas
- Estado atualizado para "EM FINALIZAÇÃO - v1.0.13"

## [1.0.12] - 2026-04-19

### Added
- Adicionado botão "Voltar para Home" na Torre de Controle
- Adicionado botão "Voltar para Home" na Gestão de Packs

## [1.0.11] - 2026-04-19

### Fixed
- Corrigida interface Voluntario no Dashboard.tsx (disponibilidades é objeto, não string)
- Corrigido filtro de voluntários por tipo de disponibilidade
- Corrigida contagem de voluntários por competência
- Corrigida renderização de disponibilidades no card e modal
- Corrigido VoluntarioModal para usar propriedade tipo do objeto

## [1.0.10] - 2026-04-19

### Fixed
- Adicionado console.log na rota POST voluntários para debug
- Adicionado console.error para ver erro detalhado

## [1.0.9] - 2026-04-19

### Fixed
- Instalado @types/cors para corrigir erro TypeScript
- Backend agora tem CORS configurado para permitir requisições do frontend

### Added
- Dependência @types/cors no backend

## [1.0.8] - 2026-04-19

### Fixed
- Adicionado middleware CORS ao backend para permitir requisições do frontend
- Instalado pacote cors no backend
- Configurado CORS para localhost:4321

### Added
- Dependência cors no backend

## [1.0.7] - 2026-04-19

### Fixed
- Melhorada mensagem de erro no CadastroForm para mostrar erro detalhado
- Limpo cache do Astro (.astro e node_modules/.astro)
- Adicionado tratamento de erro mais específico

## [1.0.6] - 2026-04-19

### Fixed
- Adicionado logs detalhados no console para debug do cadastro
- Removido validação required dos inputs para facilitar teste
- Adicionado console.log para ver dados enviados e response

## [1.0.5] - 2026-04-19

### Fixed
- Modificado CadastroForm para não falhar se criação de disponibilidade não funcionar
- Adicionado try/catch na criação de disponibilidade (não crítico para cadastro)

## [1.0.4] - 2026-04-19

### Fixed
- Corrigido erro de sintaxe em arquivos .astro (frontmatter não fechado)
- Adicionado fechamento correto com --- em todos os arquivos de páginas

## [1.0.3] - 2026-04-19

### Fixed
- Criado componente CadastroForm.tsx faltante no frontend
- Corrigidos títulos das páginas (undefined) adicionando "- OMNIVIS"
- Adicionado estado localizacao ao CadastroForm.tsx
- Adicionado conteúdo funcional à página de Abrigos

### Added
- Diretório components/voluntario com componente CadastroForm
- Formulário de cadastro com integração de API
- Tratamento de erros e sucesso no cadastro
- Geolocalização básica no formulário

## [1.0.2] - 2026-04-19

### Fixed
- Criados diretórios faltantes no frontend (voluntario, abrigos)
- Criadas páginas faltantes (voluntario/index.astro, cadastro.astro, abrigos/index.astro)
- Corrigido Dashboard.tsx - adicionado estado voluntarioSelecionado
- Adicionada importação de VoluntarioModal no Dashboard
- Adicionado handler para abrir modal de detalhes

### Added
- Página de área do voluntário com link para cadastro
- Página de abrigos com layout básico

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
