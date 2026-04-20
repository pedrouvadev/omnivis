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

const router = Router();
const prisma = new PrismaClient();

// GET /api/v1/disponibilidades - Listar todas as disponibilidades
router.get('/', async (req: Request, res: Response) => {
  try {
    const disponibilidades = await prisma.disponibilidade.findMany({
      include: {
        voluntario: true
      }
    });
    res.json(disponibilidades);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar disponibilidades' });
  }
});

// GET /api/v1/disponibilidades/:id - Buscar disponibilidade por ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const disponibilidade = await prisma.disponibilidade.findUnique({
      where: { id: req.params.id },
      include: {
        voluntario: true
      }
    });
    
    if (!disponibilidade) {
      return res.status(404).json({ error: 'Disponibilidade não encontrada' });
    }
    
    res.json(disponibilidade);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar disponibilidade' });
  }
});

// POST /api/v1/disponibilidades - Criar nova disponibilidade
router.post('/', async (req: Request, res: Response) => {
  try {
    const { tipo, ativo, voluntarioId } = req.body;
    
    const disponibilidade = await prisma.disponibilidade.create({
      data: {
        tipo,
        ativo,
        voluntarioId
      }
    });
    
    res.status(201).json(disponibilidade);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar disponibilidade' });
  }
});

// PUT /api/v1/disponibilidades/:id - Atualizar disponibilidade
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { tipo, ativo } = req.body;
    
    const disponibilidade = await prisma.disponibilidade.update({
      where: { id: req.params.id },
      data: {
        tipo,
        ativo
      }
    });
    
    res.json(disponibilidade);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar disponibilidade' });
  }
});

// DELETE /api/v1/disponibilidades/:id - Deletar disponibilidade
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await prisma.disponibilidade.delete({
      where: { id: req.params.id }
    });
    
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar disponibilidade' });
  }
});

export default router;
