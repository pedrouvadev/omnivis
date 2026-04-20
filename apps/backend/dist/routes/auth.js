"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your-jwt-secret-here';
// POST /api/v1/auth/register - Registrar novo usuário
router.post('/register', async (req, res) => {
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
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
});
// POST /api/v1/auth/login - Login de usuário
router.post('/login', async (req, res) => {
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
        const token = jsonwebtoken_1.default.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '24h' });
        res.json({ token, userId: user.id });
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao fazer login' });
    }
});
exports.default = router;
