import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const router = Router();
const prisma = new PrismaClient();

const doacaoSchema = z.object({
  doadorId: z.string(),
  tipo: z.string(),
  localizacao: z.string(),
});

// POST /api/v1/doacoes - Criar nova doação
router.post('/', async (req: Request, res: Response) => {
  try {
    const data = doacaoSchema.parse(req.body);
    
    const doacao = await prisma.doacao.create({
      data: {
        doadorId: data.doadorId,
        tipo: data.tipo,
        status: 'Pendente',
      },
    });
    
    // Trigger automático de match
    // Aqui seria chamado o serviço de match
    
    res.status(201).json(doacao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar doação' });
  }
});

// GET /api/v1/doacoes - Listar doações
router.get('/', async (req: Request, res: Response) => {
  try {
    const doacoes = await prisma.doacao.findMany({
      where: { status: 'Pendente' },
    });
    res.json(doacoes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar doações' });
  }
});

// PUT /api/v1/doacoes/:id/transporte - Atribuir transportador
router.put('/:id/transporte', async (req: Request, res: Response) => {
  try {
    const { transporteId } = req.body;
    
    const doacao = await prisma.doacao.update({
      where: { id: req.params.id },
      data: { 
        transporteId,
        status: 'Coletada'
      },
    });
    
    res.json(doacao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atribuir transportador' });
  }
});

export default router;
