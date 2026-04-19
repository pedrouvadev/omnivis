import { calculateDistance } from '../services/matchEngine';

describe('Match Engine', () => {
  describe('calculateDistance', () => {
    it('deve calcular distância entre dois pontos próximos', () => {
      const distance = calculateDistance(-23.5505, -46.6333, -23.5605, -46.6433);
      expect(distance).toBeGreaterThan(0);
      expect(distance).toBeLessThan(2); // Menos de 2km
    });

    it('deve calcular distância entre dois pontos distantes', () => {
      const distance = calculateDistance(-23.5505, -46.6333, -22.9068, -43.1729);
      expect(distance).toBeGreaterThan(300); // Mais de 300km
    });

    it('deve retornar 0 para o mesmo ponto', () => {
      const distance = calculateDistance(-23.5505, -46.6333, -23.5505, -46.6333);
      expect(distance).toBe(0);
    });
  });
});
