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
import { gerarPack, listarPacksDisponiveis, convocarPack } from '../services/packGenerator';

const router = Router();
const prisma = new PrismaClient();

// POST /api/v1/packs/gerar - Gerar novo pack
router.post('/gerar', async (req: Request, res: Response) => {
  try {
    const { tipo } = req.body;
    
    if (!tipo) {
      return res.status(400).json({ error: 'Tipo de pack é obrigatório' });
    }
    
    const pack = await gerarPack(tipo);
    res.status(201).json(pack);
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Erro ao gerar pack' });
  }
});

// GET /api/v1/packs - Listar packs disponíveis
router.get('/', async (req: Request, res: Response) => {
  try {
    const { tipo } = req.query;
    const packs = await listarPacksDisponiveis(tipo as string);
    res.json(packs);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar packs' });
  }
});

// POST /api/v1/packs/:id/convocar - Convocar pack para missão
router.post('/:id/convocar', async (req: Request, res: Response) => {
  try {
    const { localMissao, horario } = req.body;
    
    if (!localMissao || !horario) {
      return res.status(400).json({ error: 'Local e horário da missão são obrigatórios' });
    }
    
    const pack = await convocarPack(req.params.id, localMissao, horario);
    res.json(pack);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao convocar pack' });
  }
});

// GET /api/v1/packs/:id - Buscar pack por ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const pack = await prisma.pack.findUnique({
      where: { id: req.params.id },
    });
    
    if (!pack) {
      return res.status(404).json({ error: 'Pack não encontrado' });
    }
    
    res.json(pack);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pack' });
  }
});

export default router;
