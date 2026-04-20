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

import express from 'express';
import cors from 'cors';
import voluntariosRoutes from './routes/voluntarios';
import disponibilidadesRoutes from './routes/disponibilidades';
import abrigosRoutes from './routes/abrigos';
import authRoutes from './routes/auth';
import doacoesRoutes from './routes/doacoes';
import packsRoutes from './routes/packs';

const app = express();
const PORT = process.env.PORT || 3000;

// CORS middleware
app.use(cors({
  origin: ['http://localhost:4321', 'http://127.0.0.1:4321'],
  credentials: true,
}));

app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'OMNIVIS Backend API' });
});

// API Routes
app.use('/api/v1/voluntarios', voluntariosRoutes);
app.use('/api/v1/disponibilidades', disponibilidadesRoutes);
app.use('/api/v1/abrigos', abrigosRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/doacoes', doacoesRoutes);
app.use('/api/v1/packs', packsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
