import { voluntarioSchema } from '../schemas/voluntario';

describe('Validation Schemas', () => {
  describe('voluntarioSchema', () => {
    it('deve validar dados corretos', () => {
      const validData = {
        nome: 'João Silva',
        email: 'joao@example.com',
        telefone: '11999999999',
        localizacao: '-23.5505,-46.6333',
      };
      const result = voluntarioSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('deve rejeitar nome curto', () => {
      const invalidData = {
        nome: 'Jo',
        email: 'jo@example.com',
        telefone: '11999999999',
        localizacao: '-23.5505,-46.6333',
      };
      const result = voluntarioSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('deve rejeitar email inválido', () => {
      const invalidData = {
        nome: 'João Silva',
        email: 'joao',
        telefone: '11999999999',
        localizacao: '-23.5505,-46.6333',
      };
      const result = voluntarioSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('deve rejeitar localização em formato inválido', () => {
      const invalidData = {
        nome: 'João Silva',
        email: 'joao@example.com',
        telefone: '11999999999',
        localizacao: 'São Paulo',
      };
      const result = voluntarioSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });
});
