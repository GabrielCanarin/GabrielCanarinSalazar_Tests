import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import GiassiHomePage from '../support/pages/GiassiHomePage';

test.describe('Find Products', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let homePage: GiassiHomePage;
  let BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.giassi_home')
    .retrieveData();

  if (process.env.QA) {
    BASE_URL = TheConfig.fromFile(CONFIG)
      .andPath('application.giassi_home')
      .retrieveData();
  } else if (process.env.HML) {
    BASE_URL = TheConfig.fromFile(CONFIG)
      .andPath('application.giassi_home')
      .retrieveData();
  } else if (process.env.PRD) {
    BASE_URL = TheConfig.fromFile(CONFIG)
      .andPath('application.giassi_home')
      .retrieveData();
  }

  test.beforeEach(async ({ page }) => {
    homePage = new GiassiHomePage(page);
    await page.goto(BASE_URL);
  });

  test('Achar produto pelo nome', async () => {
    await homePage.searchProductByName();
  });

  test('Teste de filtros', async () => {
    await homePage.searchProductByName();
    await homePage.filterTest();
  });

  test('Entrando em um produto', async () => {
    await homePage.searchProductByName();
    await homePage.filterTest();
    await homePage.productEnter();
  });

  test('Cadastro para ofertas', async () => {
    await homePage.cadOfertas();
  });

  test('Compra rapida', async () => {
    await homePage.compraRapida();
  });

  test('Teste de limpar filtros', async () => {
    await homePage.searchProductByName();
    await homePage.filterTest();
    await homePage.filterFillTest();
  });
});
