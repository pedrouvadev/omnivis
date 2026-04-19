import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// POST /api/v1/voluntarios/:id/disponibilidades - Adicionar disponibilidade
router.post('/voluntarios/:id/disponibilidades', async (req: Request, res: Response) => {
  try {
    const { tipo, ativo } = req.body;
    
    const disponibilidade = await prisma.disponibilidade.create({
      data: {
        tipo,
        ativo,
        voluntarioId: req.params.id,
      },
    });
    
    res.status(201).json(disponibilidade);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar disponibilidade' });
  }
});

// DELETE /api/v1/voluntarios/:id/disponibilidades/:tipo - Remover disponibilidade
router.delete('/voluntarios/:id/disponibilidades/:tipo', async (req: Request, res: Response) => {
  try {
    await prisma.disponibilidade.deleteMany({
      where: {
        voluntarioId: req.params.id,
        tipo: req.params.tipo,
      },
    });
    
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover disponibilidade' });
  }
});

// GET /api/v1/voluntarios/:id/disponibilidades - Listar disponibilidades de um voluntário
router.get('/voluntarios/:id/disponibilidades', async (req: Request, res: Response) => {
  try {
    const disponibilidades = await prisma.disponibilidade.findMany({
      where: { voluntarioId: req.params.id },
    });
    
    res.json(disponibilidades);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar disponibilidades' });
  }
});

export default router;
