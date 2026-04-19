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
