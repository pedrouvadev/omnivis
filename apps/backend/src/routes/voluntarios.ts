import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// GET /api/v1/voluntarios - Listar todos os voluntários
router.get('/', async (req: Request, res: Response) => {
  try {
    const voluntarios = await prisma.voluntario.findMany({
      include: {
        disponibilidades: true
      }
    });
    res.json(voluntarios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar voluntários' });
  }
});

// GET /api/v1/voluntarios/:id - Buscar voluntário por ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const voluntario = await prisma.voluntario.findUnique({
      where: { id: req.params.id },
      include: {
        disponibilidades: true
      }
    });
    
    if (!voluntario) {
      return res.status(404).json({ error: 'Voluntário não encontrado' });
    }
    
    res.json(voluntario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar voluntário' });
  }
});

// POST /api/v1/voluntarios - Criar novo voluntário
router.post('/', async (req: Request, res: Response) => {
  try {
    const { nome, email, telefone, localizacao } = req.body;
    
    const voluntario = await prisma.voluntario.create({
      data: {
        nome,
        email,
        telefone,
        localizacao
      }
    });
    
    res.status(201).json(voluntario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar voluntário' });
  }
});

// PUT /api/v1/voluntarios/:id - Atualizar voluntário
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { nome, email, telefone, localizacao } = req.body;
    
    const voluntario = await prisma.voluntario.update({
      where: { id: req.params.id },
      data: {
        nome,
        email,
        telefone,
        localizacao
      }
    });
    
    res.json(voluntario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar voluntário' });
  }
});

// DELETE /api/v1/voluntarios/:id - Deletar voluntário
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await prisma.voluntario.delete({
      where: { id: req.params.id }
    });
    
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar voluntário' });
  }
});

export default router;
