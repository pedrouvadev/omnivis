import express from 'express';
import voluntariosRoutes from './routes/voluntarios';
import disponibilidadesRoutes from './routes/disponibilidades';
import abrigosRoutes from './routes/abrigos';
import authRoutes from './routes/auth';
import doacoesRoutes from './routes/doacoes';
import packsRoutes from './routes/packs';

const app = express();
const PORT = process.env.PORT || 3000;

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
