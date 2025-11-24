import { test, expect } from '@playwright/test';

test('user can play a full game and see incorrect color feedback', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.waitForResponse('/api/solution');

  // Saisie du calcul
  for (const key of ['1','2','+','3','=','5','OK']) {
    await page.click(`button:text-is("${key}")`);
  }

  // Sélectionner la ligne de pastilles de manière précise via la classe mb-2
  const colorRow = page.locator('div.flex.mb-2');
  const colorCells = colorRow.locator('div');

  // Vérifier qu'il y a bien 6 pastilles
  await expect(colorCells).toHaveCount(6);

  // Vérifier que chaque pastille est verte
  expect(colorCells.nth(0)).toHaveClass(/bg-green/);
  expect(colorCells.nth(1)).toHaveClass(/bg-yellow/);
  expect(colorCells.nth(2)).toHaveClass(/bg-green/);
  expect(colorCells.nth(3)).toHaveClass(/bg-yellow/);
  expect(colorCells.nth(4)).toHaveClass(/bg-green/);
  expect(colorCells.nth(5)).toHaveClass(/bg-gray/);
});

test('user can play a full game and see correct color feedback', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.waitForResponse('/api/solution');

  // Saisie du calcul
  for (const key of ['1','1','+','2','=','3','OK']) {
    await page.click(`button:text-is("${key}")`);
  }

  // Sélectionner la ligne de pastilles de manière précise via la classe mb-2
  const colorRow = page.locator('div.flex.mb-2');
  const colorCells = colorRow.locator('div');

  // Vérifier qu'il y a bien 6 pastilles
  await expect(colorCells).toHaveCount(6);

  // Vérifier que chaque pastille est verte
  for (let i = 0; i < 6; i++) {
    await expect(colorCells.nth(i)).toHaveClass(/bg-green/);
  }
});
