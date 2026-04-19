import { z } from 'zod';

export const voluntarioSchema = z.object({
  nome: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
  email: z.string().email('Email inválido'),
  telefone: z.string().min(10, 'Telefone deve ter no mínimo 10 caracteres'),
  localizacao: z.string().regex(/^-?\d+\.\d+,-?\d+\.\d+$/, 'Localização deve estar no formato "lat,lng"'),
});

export const voluntarioUpdateSchema = voluntarioSchema.partial();
