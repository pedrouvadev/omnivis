import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// GET /api/v1/abrigos - Listar todos os abrigos
router.get('/', async (req: Request, res: Response) => {
  try {
    const abrigos = await prisma.abrigo.findMany();
    res.json(abrigos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar abrigos' });
  }
});

// GET /api/v1/abrigos/:id - Buscar abrigo por ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const abrigo = await prisma.abrigo.findUnique({
      where: { id: req.params.id }
    });
    
    if (!abrigo) {
      return res.status(404).json({ error: 'Abrigo não encontrado' });
    }
    
    res.json(abrigo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar abrigo' });
  }
});

// POST /api/v1/abrigos - Criar novo abrigo
router.post('/', async (req: Request, res: Response) => {
  try {
    const { nome, localizacao, capacidade, ocupacao, necessidades } = req.body;
    
    const abrigo = await prisma.abrigo.create({
      data: {
        nome,
        localizacao,
        capacidade,
        ocupacao,
        necessidades
      }
    });
    
    res.status(201).json(abrigo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar abrigo' });
  }
});

// PUT /api/v1/abrigos/:id - Atualizar abrigo
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { nome, localizacao, capacidade, ocupacao, necessidades } = req.body;
    
    const abrigo = await prisma.abrigo.update({
      where: { id: req.params.id },
      data: {
        nome,
        localizacao,
        capacidade,
        ocupacao,
        necessidades
      }
    });
    
    res.json(abrigo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar abrigo' });
  }
});

// DELETE /api/v1/abrigos/:id - Deletar abrigo
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await prisma.abrigo.delete({
      where: { id: req.params.id }
    });
    
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar abrigo' });
  }
});

export default router;
