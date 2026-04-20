/*
 * =====================================================
 * Desenvolvido por: Pedro Uva (Mr. Uva)
 * Full-Stack Engineer & AI Strategist | Estrategista Digital
 * 
 * Website: https://mruva.com.br/
 * LinkedIn: https://www.linkedin.com/in/mruva/
 * 
 * Copyright © 2026 Pedro Uva. Todos os direitos reservados.
 * 
 * Este repositório é público. Se você clonar, fizer fork ou utilizar
 * este código em seus projetos, por favor, mantenha este aviso de
 * créditos intacto no topo de cada arquivo.
 * 
 * Agradeço pelo respeito ao meu trabalho e à minha contribuição
 * para a comunidade open-source.
 * 
 * Excelência desde 1997 • +25 anos de experiência em Full-Stack,
 * Inteligência Artificial e estratégias digitais.
 * =====================================================
 */

import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = Router();
const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET || 'your-jwt-secret-here';

// POST /api/v1/auth/register - Registrar novo usuário
router.post('/register', async (req: Request, res: Response) => {
  try {
    const { email, password, nome } = req.body;
    
    // Verificar se usuário já existe
    const existingUser = await prisma.voluntario.findUnique({
      where: { email }
    });
    
    if (existingUser) {
      return res.status(400).json({ error: 'Email já cadastrado' });
    }
    
    // Criar novo usuário (simplificado - em produção usar tabela de usuários separada)
    const user = await prisma.voluntario.create({
      data: {
        nome,
        email,
        telefone: '', // obrigatório no schema
        localizacao: '' // obrigatório no schema
      }
    });
    
    res.status(201).json({ message: 'Usuário criado com sucesso', userId: user.id });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

// POST /api/v1/auth/login - Login de usuário
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    
    // Buscar usuário (simplificado - em produção usar tabela de usuários com senha)
    const user = await prisma.voluntario.findUnique({
      where: { email }
    });
    
    if (!user) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }
    
    // Em produção, verificar senha com bcrypt
    // const isPasswordValid = await bcrypt.compare(password, user.password);
    
    // Gerar token JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    res.json({ token, userId: user.id });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
});

export default router;
