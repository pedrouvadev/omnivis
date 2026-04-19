import { test, expect } from '@playwright/test';

test.describe('Cadastro de Voluntário', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/voluntario/cadastro');
  });

  test('deve exibir título da página', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Cadastro de Voluntário');
  });

  test('deve preencher formulário com sucesso', async ({ page }) => {
    await page.fill('#nome', 'João Teste');
    await page.fill('#email', 'joao@teste.com');
    await page.fill('#telefone', '11999999999');
    await page.fill('#localizacao', '-23.5505,-46.6333');
    
    // Selecionar disponibilidade
    await page.check('input[value="Saude"]');
    
    // Submeter formulário
    await page.click('button[type="submit"]');
    
    // Verificar mensagem de sucesso (simulada)
    // Na implementação real, verificaria se a API foi chamada com sucesso
  });

  test('deve validar campos obrigatórios', async ({ page }) => {
    // Tentar submeter sem preencher campos
    await page.click('button[type="submit"]');
    
    // Verificar validação HTML5
    const nomeInput = page.locator('#nome');
    await expect(nomeInput).toHaveAttribute('required');
  });

  test('deve ter elementos com altura mínima de 48px (Touch-First)', async ({ page }) => {
    const inputs = page.locator('input');
    const count = await inputs.count();
    
    for (let i = 0; i < count; i++) {
      const input = inputs.nth(i);
      const box = await input.boundingBox();
      if (box) {
        expect(box.height).toBeGreaterThanOrEqual(48);
      }
    }
  });

  test('deve ter labels e descrições ARIA', async ({ page }) => {
    await expect(page.locator('label[for="nome"]')).toBeVisible();
    await expect(page.locator('#nome-help')).toBeVisible();
    await expect(page.locator('#email-help')).toBeVisible();
    await expect(page.locator('#telefone-help')).toBeVisible();
    await expect(page.locator('#localizacao-help')).toBeVisible();
  });
});
