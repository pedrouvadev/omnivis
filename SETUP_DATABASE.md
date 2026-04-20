# Setup do Banco de Dados - OMNIVIS

## Opção 1: Docker Compose (Recomendado para Desenvolvimento)

### 1. Iniciar PostgreSQL com Docker Compose

```bash
# Na raiz do projeto omnivis
docker-compose up -d
```

Isso irá:
- Criar um container PostgreSQL 16
- Usar as credenciais padrão (omnivis/omnivis_password)
- Expor na porta 5432
- Persistir dados em volume docker

### 2. Verificar se o banco está rodando

```bash
docker-compose ps
# ou
docker ps
```

### 3. Configurar variáveis de ambiente

```bash
cd apps/backend
cp .env.example .env
```

O `.env.example` já está configurado com as credenciais do Docker Compose.

### 4. Instalar dependências (se ainda não instalou)

```bash
cd omnivis
npm install
```

### 5. Executar migrações do Prisma

```bash
cd apps/backend
npx prisma migrate dev
```

### 6. (Opcional) Popular banco com dados de teste

```bash
cd apps/backend
npx prisma db seed
```

### 7. Iniciar o backend

```bash
cd apps/backend
npm run dev
```

## Opção 2: Aplicação Docker Pronta (Docploy)

### 1. Criar container PostgreSQL no Docploy

No Docploy:
- Crie um novo container
- Selecione a imagem: `postgres:16-alpine`
- Configure as variáveis de ambiente:
  - `POSTGRES_USER`: omnivis
  - `POSTGRES_PASSWORD`: sua_senha_segura
  - `POSTGRES_DB`: omnivis_db
- Exponha a porta 5432
- Anote o host/IP do container

### 2. Atualizar .env

```bash
cd apps/backend
cp .env.example .env
```

Edite o `.env` com as credenciais do seu container Docploy:

```env
PORT=3000
DATABASE_URL="postgresql://omnivis:sua_senha_segura@host-do-docploy:5432/omnivis_db"
JWT_SECRET="your-jwt-secret-here-change-in-production"
```

### 3. Executar migrações

```bash
cd apps/backend
npx prisma migrate dev
```

## Verificar Conexão

### Testar conexão com Prisma

```bash
cd apps/backend
npx prisma db push
```

Se não houver erros, a conexão está funcionando.

### Testar com script simples

Crie um arquivo `test-db.js` em `apps/backend`:

```javascript
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function testConnection() {
  try {
    await prisma.$connect();
    console.log('✅ Conexão com banco de dados estabelecida!');
    await prisma.$disconnect();
  } catch (error) {
    console.error('❌ Erro na conexão:', error);
    process.exit(1);
  }
}

testConnection();
```

Execute:

```bash
node test-db.js
```

## Executar Testes

### Testes de Integração (Backend)

```bash
cd apps/backend
npm test
```

### Testes E2E (Frontend)

```bash
cd apps/frontend
npm run test:e2e
```

## Troubleshooting

### Erro: Connection refused

Verifique se o PostgreSQL está rodando:
```bash
docker-compose ps
# ou
docker ps
```

Se não estiver rodando:
```bash
docker-compose up -d
```

### Erro: Database does not exist

Execute as migrações:
```bash
cd apps/backend
npx prisma migrate dev
```

### Erro: Authentication failed

Verifique as credenciais no `.env` e no Docker Compose.

## Parar Banco de Dados

```bash
docker-compose down
```

Para remover dados também:
```bash
docker-compose down -v
```
