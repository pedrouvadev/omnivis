# Padrões de Código e Desenvolvimento - OMNIVIS

## Padrões Gerais

### 1. Convenções de Nomenclatura

#### TypeScript/JavaScript
- **Variáveis e Funções:** camelCase
  ```typescript
  const userName = 'João';
  function getUserById(id: string) {}
  ```

- **Classes e Interfaces:** PascalCase
  ```typescript
  class UserService {}
  interface UserProfile {}
  ```

- **Constantes:** UPPER_SNAKE_CASE
  ```typescript
  const MAX_RETRIES = 3;
  const API_BASE_URL = 'https://api.omnivis.com';
  ```

- **Arquivos:** kebab-case
  ```
  components/user-profile.tsx
  services/user-service.ts
  routes/voluntarios.ts
  ```

#### Prisma Schema
- **Models:** PascalCase
  ```prisma
  model Voluntario {}
  model Disponibilidade {}
  ```

- **Fields:** camelCase
  ```prisma
  model Voluntario {
    nome String
    email String
    createdAt DateTime
  }
  ```

### 2. Estrutura de Arquivos

#### Backend (Express)
```typescript
// routes/voluntarios.ts
import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// GET /api/v1/voluntarios
router.get('/', async (req: Request, res: Response) => {
  try {
    const data = await prisma.voluntario.findMany();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados' });
  }
});

export default router;
```

#### Frontend (React Components)
```typescript
// components/voluntario/CadastroForm.tsx
import { useState } from 'react';

export default function CadastroForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // lógica de submit
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* campos do formulário */}
    </form>
  );
}
```

### 3. TypeScript Strict Mode

#### Tipagem Estrita
```typescript
// ✅ CORRETO - Tipos explícitos
function calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  // implementação
}

// ❌ INCORRETO - Tipos implícitos
function calculateDistance(lat1, lng1, lat2, lng2) {
  // implementação
}
```

#### Interfaces vs Types
```typescript
// ✅ Use Interfaces para objetos com estrutura
interface Voluntario {
  id: string;
  nome: string;
  email: string;
}

// ✅ Use Types para unions, tuples, primitivos
type Status = 'Pendente' | 'Coletada' | 'Entregue';
type Coordinates = [number, number];
```

#### Enums vs Union Types
```typescript
// ✅ PREFERÍVEL - Union Types (mais flexível)
type TipoDisponibilidade = 'Saude' | 'Logistica' | 'Engenharia';

// ❌ EVITAR - Enums (menos flexível em TypeScript moderno)
enum TipoDisponibilidade {
  SAUDE = 'Saude',
  LOGISTICA = 'Logistica',
  ENGENHARIA = 'Engenharia',
}
```

### 4. Error Handling

#### Backend
```typescript
// ✅ CORRETO - Error handling com try/catch
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const voluntario = await prisma.voluntario.findUnique({
      where: { id: req.params.id }
    });

    if (!voluntario) {
      return res.status(404).json({ error: 'Voluntário não encontrado' });
    }

    res.json(voluntario);
  } catch (error) {
    console.error('Erro ao buscar voluntário:', error);
    res.status(500).json({ error: 'Erro ao buscar voluntário' });
  }
});
```

#### Frontend
```typescript
// ✅ CORRETO - Error handling com try/catch
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/v1/voluntarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error('Falha ao criar voluntário');
    }

    const data = await response.json();
    // sucesso
  } catch (error) {
    console.error('Erro:', error);
    // mostrar erro ao usuário
  }
};
```

### 5. Validação de Dados

#### Backend com Zod
```typescript
import { z } from 'zod';

const voluntarioSchema = z.object({
  nome: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Email inválido'),
  telefone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
  localizacao: z.string().regex(/^-?\d+\.\d+,-?\d+\.\d+$/, 'Localização inválida'),
});

router.post('/', async (req: Request, res: Response) => {
  const result = voluntarioSchema.safeParse(req.body);
  
  if (!result.success) {
    return res.status(400).json({ errors: result.error.errors });
  }
  
  // processar dados validados
});
```

#### Frontend com HTML5 Validation
```typescript
<form onSubmit={handleSubmit}>
  <input
    type="text"
    name="nome"
    required
    minLength={3}
    className="min-h-[48px]"
  />
  <input
    type="email"
    name="email"
    required
    className="min-h-[48px]"
  />
</form>
```

### 6. Componentes React

#### Componentes Funcionais
```typescript
// ✅ CORRETO - Componente funcional com hooks
export default function UserProfile({ user }: { user: User }) {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) return <Skeleton />;

  return (
    <div className="user-profile">
      <h1>{user.nome}</h1>
      <p>{user.email}</p>
    </div>
  );
}
```

#### Hooks Customizados
```typescript
// hooks/useVoluntarios.ts
export function useVoluntarios() {
  const [voluntarios, setVoluntarios] = useState<Voluntario[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchVoluntarios();
  }, []);

  const fetchVoluntarios = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/v1/voluntarios');
      const data = await response.json();
      setVoluntarios(data);
    } catch (error) {
      console.error('Erro:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { voluntarios, isLoading, refetch: fetchVoluntarios };
}
```

### 7. Tailwind CSS

#### Utilitários
```typescript
// ✅ CORRETO - Classes utilitárias
<div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">

// ❌ INCORRETO - CSS inline
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
```

#### Responsividade
```typescript
// Mobile-first
<div className="p-4 md:p-8 lg:p-12">

// Breakpoints
// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px
// 2xl: 1536px
```

#### Touch Targets
```typescript
// Mínimo de 48x48dp para mobile
<button className="min-h-[48px] px-4 py-3">

// 64x64dp para totens
<button className="min-h-[64px] px-6 py-4">
```

### 8. Acessibilidade (WCAG AAA)

#### Contraste
```typescript
// ✅ CORRETO - Alto contraste (7:1)
<p className="text-gray-900 bg-white">

// ❌ INCORRETO - Baixo contraste
<p className="text-gray-400 bg-white">
```

#### Labels e ARIA
```typescript
// ✅ CORRETO - Labels associados
<label htmlFor="email">Email</label>
<input id="email" type="email" aria-required="true" />

// ❌ INCORRETO - Sem label
<input type="email" placeholder="Email" />
```

#### Navegação por Teclado
```typescript
// ✅ CORRETO - Focus visível
<button className="focus:ring-2 focus:ring-blue-500 focus:outline-none">

// ✅ CORRETO - Skip link
<a href="#main-content" className="sr-only focus:not-sr-only">
  Pular para conteúdo principal
</a>
```

### 9. Performance

#### Lazy Loading
```typescript
// ✅ CORRETO - Lazy loading de componentes
const DashboardMap = lazy(() => import('./DashboardMap'));

// ✅ CORRETO - Lazy loading de imagens
<Image src="/mapa.jpg" alt="Mapa" loading="lazy" />
```

#### Code Splitting
```typescript
// ✅ CORRETO - Code splitting por rota
const Cadastro = lazy(() => import('./pages/Cadastro'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
```

#### Memoization
```typescript
// ✅ CORRETO - React.memo para componentes pesados
export default React.memo(function VoluntarioCard({ voluntario }: Props) {
  // renderização
});
```

### 10. Testes

#### Testes E2E (Playwright)
```typescript
// e2e/cadastro.spec.ts
import { test, expect } from '@playwright/test';

test('cadastro de voluntário completo', async ({ page }) => {
  await page.goto('/cadastro');
  
  await page.fill('input[name="nome"]', 'João Silva');
  await page.fill('input[name="email"]', 'joao@email.com');
  await page.fill('input[name="telefone"]', '11999999999');
  
  await page.click('button[type="submit"]');
  
  await expect(page.locator('.success-message')).toBeVisible();
});
```

#### Testes Unitários (Jest)
```typescript
// services/packGenerator.test.ts
import { gerarPack } from './packGenerator';

test('deve gerar pack com líder e auxiliares', () => {
  const pack = gerarPack('Limpeza');
  
  expect(pack.membros).toHaveLength(4);
  expect(pack.tipo).toBe('Limpeza');
});
```

### 11. Git Commits

#### Conventional Commits
```bash
# ✅ CORRETO
git commit -m "feat: adicionar rota de criação de voluntários"
git commit -m "fix: corrigir erro de validação de email"
git commit -m "docs: atualizar README com instruções de setup"
git commit -m "refactor: otimizar componente DashboardMap"

# ❌ INCORRETO
git commit -m "atualizei algumas coisas"
git commit -m "fix bug"
git commit -m "changes"
```

#### Tipos de Commits
- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Atualização de documentação
- `refactor:` Refatoração de código
- `test:` Adição de testes
- `chore:` Atualização de configurações/dependências
- `style:` Formatação de código (sem lógica)

### 12. Comments e Documentação

#### JSDoc
```typescript
/**
 * Calcula a distância entre dois pontos geográficos usando a fórmula de Haversine
 * @param lat1 - Latitude do ponto 1
 * @param lng1 - Longitude do ponto 1
 * @param lat2 - Latitude do ponto 2
 * @param lng2 - Longitude do ponto 2
 * @returns Distância em quilômetros
 */
function calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  // implementação
}
```

#### Comments de Código
```typescript
// ✅ CORRETO - Comments explicando POR QUÊ
// Usamos Haversine ao invés de distância euclidiana porque
// a fórmula considera a curvatura da Terra, essencial para distâncias longas
const distance = haversine(lat1, lng1, lat2, lng2);

// ❌ INCORRETO - Comments explicando O QUÊ (óbvio)
// Soma 1 ao contador
count++;
```

### 13. Variáveis de Ambiente

#### .env.example
```bash
# Database
DATABASE_URL="postgresql://user:pass@host:5432/dbname"

# JWT
JWT_SECRET="your-secret-key-here"

# Server
PORT=3000

# CORS
FRONTEND_URL="http://localhost:4321"
```

#### Uso no Código
```typescript
// ✅ CORRETO - Validar variáveis de ambiente
const requiredEnvVars = ['DATABASE_URL', 'JWT_SECRET'];

requiredEnvVars.forEach(varName => {
  if (!process.env[varName]) {
    throw new Error(`Missing required environment variable: ${varName}`);
  }
});

const DATABASE_URL = process.env.DATABASE_URL!;
```

### 14. Logging

#### Backend
```typescript
// ✅ CORRETO - Logging estruturado
console.log('[INFO] Voluntário criado:', { id: voluntario.id, nome: voluntario.nome });
console.error('[ERROR] Falha ao conectar banco:', error);

// ❌ INCORRETO - Logging sem contexto
console.log('Voluntário criado');
console.log(error);
```

### 15. Segurança

#### Sanitização de Inputs
```typescript
// ✅ CORRETO - Sanitização com Zod
const schema = z.object({
  nome: z.string().max(100).transform(val => val.trim()),
  email: z.string().email(),
});

// ✅ CORRETO - Prevenir SQL Injection via Prisma
const voluntario = await prisma.voluntario.findUnique({
  where: { id: sanitizedId }
});
```

#### Proteção de Rotas
```typescript
// ✅ CORRETO - Middleware de autenticação
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido' });
  }
};
```

## Checklist de Code Review

Antes de fazer merge de um PR, verifique:

- [ ] Código segue convenções de nomenclatura
- [ ] TypeScript strict mode sem erros
- [ ] Error handling implementado
- [ ] Validação de dados presente
- [ ] Acessibilidade verificada (WCAG AAA)
- [ ] Performance otimizada
- [ ] Testes escritos (se aplicável)
- [ ] Commits seguem Conventional Commits
- [ ] Documentação atualizada
- [ ] Variáveis de ambiente documentadas
- [ ] Segurança verificada (sanitização, auth)
- [ ] Logging apropriado
- [ ] Touch targets adequados (48x48dp)
- [ ] Contraste WCAG AAA (7:1)
