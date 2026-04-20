"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const packGenerator_1 = require("../services/packGenerator");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
// POST /api/v1/packs/gerar - Gerar novo pack
router.post('/gerar', async (req, res) => {
    try {
        const { tipo } = req.body;
        if (!tipo) {
            return res.status(400).json({ error: 'Tipo de pack é obrigatório' });
        }
        const pack = await (0, packGenerator_1.gerarPack)(tipo);
        res.status(201).json(pack);
    }
    catch (error) {
        res.status(500).json({ error: error.message || 'Erro ao gerar pack' });
    }
});
// GET /api/v1/packs - Listar packs disponíveis
router.get('/', async (req, res) => {
    try {
        const { tipo } = req.query;
        const packs = await (0, packGenerator_1.listarPacksDisponiveis)(tipo);
        res.json(packs);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar packs' });
    }
});
// POST /api/v1/packs/:id/convocar - Convocar pack para missão
router.post('/:id/convocar', async (req, res) => {
    try {
        const { localMissao, horario } = req.body;
        if (!localMissao || !horario) {
            return res.status(400).json({ error: 'Local e horário da missão são obrigatórios' });
        }
        const pack = await (0, packGenerator_1.convocarPack)(req.params.id, localMissao, horario);
        res.json(pack);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao convocar pack' });
    }
});
// GET /api/v1/packs/:id - Buscar pack por ID
router.get('/:id', async (req, res) => {
    try {
        const pack = await prisma.pack.findUnique({
            where: { id: req.params.id },
        });
        if (!pack) {
            return res.status(404).json({ error: 'Pack não encontrado' });
        }
        res.json(pack);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pack' });
    }
});
exports.default = router;
