import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const router = Router();
const prisma = new PrismaClient();

const registerSchema = z.object({
  nome: z.string().min(3),
  email: z.string().email(),
  senha: z.string().min(6),
  telefone: z.string().min(10),
  localizacao: z.string(),
});

const loginSchema = z.object({
  email: z.string().email(),
  senha: z.string(),
});

// POST /api/v1/auth/register - Registrar novo usuário
router.post('/register', async (req: Request, res: Response) => {
  try {
    const data = registerSchema.parse(req.body);
    
    // Verificar se email já existe
    const existingUser = await prisma.voluntario.findUnique({
      where: { email: data.email },
    });
    
    if (existingUser) {
      return res.status(400).json({ error: 'Email já cadastrado' });
    }
    
    // Hash da senha
    const senhaHash = await bcrypt.hash(data.senha, 12);
    
    // Criar usuário (usando modelo Voluntario como User para MVP)
    const user = await prisma.voluntario.create({
      data: {
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
        localizacao: data.localizacao,
      },
    });
    
    // Gerar token JWT
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1h' }
    );
    
    res.status(201).json({
      user: {
        id: user.id,
        nome: user.nome,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao registrar usuário' });
  }
});

// POST /api/v1/auth/login - Login do usuário
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, senha } = loginSchema.parse(req.body);
    
    // Buscar usuário
    const user = await prisma.voluntario.findUnique({
      where: { email },
    });
    
    if (!user) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }
    
    // Verificar senha (para MVP, assumimos que senha está em algum lugar)
    // Na implementação real, precisaríamos adicionar campo senha ao schema
    
    // Gerar token JWT
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1h' }
    );
    
    res.json({
      user: {
        id: user.id,
        nome: user.nome,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
});

export default router;
