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

import { test, expect } from '@playwright/test';

test.describe('Torre de Controle', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/torre');
  });

  test('deve exibir título da página', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Torre de Controle');
  });

  test('deve exibir cards de estatísticas', async ({ page }) => {
    await expect(page.locator('.grid').first()).toBeVisible();
  });

  test('deve permitir filtrar por competência', async ({ page }) => {
    await page.click('button:has-text("Saude")');
    // Verificar se o filtro foi aplicado
  });

  test('deve ter elementos com altura mínima de 48px', async ({ page }) => {
    const buttons = page.locator('button');
    const count = await buttons.count();
    
    for (let i = 0; i < count; i++) {
      const button = buttons.nth(i);
      const box = await button.boundingBox();
      if (box) {
        expect(box.height).toBeGreaterThanOrEqual(48);
      }
    }
  });
});
