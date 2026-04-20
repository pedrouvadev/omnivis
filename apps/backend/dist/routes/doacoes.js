"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
const doacaoSchema = zod_1.z.object({
    doadorId: zod_1.z.string(),
    tipo: zod_1.z.string(),
    localizacao: zod_1.z.string(),
});
// POST /api/v1/doacoes - Criar nova doação
router.post('/', async (req, res) => {
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
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao criar doação' });
    }
});
// GET /api/v1/doacoes - Listar doações
router.get('/', async (req, res) => {
    try {
        const doacoes = await prisma.doacao.findMany({
            where: { status: 'Pendente' },
        });
        res.json(doacoes);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar doações' });
    }
});
// PUT /api/v1/doacoes/:id/transporte - Atribuir transportador
router.put('/:id/transporte', async (req, res) => {
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
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao atribuir transportador' });
    }
});
exports.default = router;
