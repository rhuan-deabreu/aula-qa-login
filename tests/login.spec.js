import { test, expect } from '@playwright/test';

test('pagina abre', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
