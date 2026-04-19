import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const router = Router();
const prisma = new PrismaClient();

const abrigoSchema = z.object({
  nome: z.string().min(3),
  localizacao: z.string().min(3),
  capacidade: z.number().int().positive(),
  ocupacao: z.number().int().nonnegative(),
  necessidades: z.array(z.string()).default([]),
});

// GET /api/v1/abrigos - Listar todos os abrigos
router.get('/', async (req: Request, res: Response) => {
  try {
    const abrigos = await prisma.abrigo.findMany();
    res.json(abrigos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar abrigos' });
  }
});

// POST /api/v1/abrigos - Criar novo abrigo
router.post('/', async (req: Request, res: Response) => {
  try {
    const data = abrigoSchema.parse(req.body);
    const abrigo = await prisma.abrigo.create({
      data,
    });
    res.status(201).json(abrigo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar abrigo' });
  }
});

// PUT /api/v1/abrigos/:id/ocupacao - Atualizar ocupação do abrigo
router.put('/:id/ocupacao', async (req: Request, res: Response) => {
  try {
    const { ocupacao } = req.body;
    
    const abrigo = await prisma.abrigo.update({
      where: { id: req.params.id },
      data: { ocupacao },
    });
    
    // Trigger de 80% de lotação
    if (abrigo.capacidade > 0 && (abrigo.ocupacao / abrigo.capacidade) >= 0.8) {
      console.log(`ALERTA: Abrigo ${abrigo.nome} atingiu 80% de ocupação`);
      // Aqui seria implementada a notificação real
    }
    
    res.json(abrigo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar ocupação' });
  }
});

export default router;
