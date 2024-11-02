import { Page } from '@playwright/test';
import HomeGiassi from '../elements/HomeGiassi';
import BasePage from './BasePage';

export default class HomePage extends BasePage {
  readonly HomeGiassi: HomeGiassi;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.HomeGiassi = new HomeGiassi(page);
  }

  async searchProductByName(): Promise<void> {
    await this.HomeGiassi.getSearchField().fill('açucar');
    await this.HomeGiassi.getSearchButton().click();
  }

  async filterTest(): Promise<void> {
    await this.HomeGiassi.getFilterButton().check();
  }

  async filterFillTest(): Promise<void> {
    await this.HomeGiassi.getFillFilterButton().click();
  }

  async productEnter(): Promise<void> {
    await this.HomeGiassi.getProduct().click();
  }

  async cadOfertas(): Promise<void> {
    await this.HomeGiassi.getNomeField().fill('Sandro');
    await this.HomeGiassi.getEmailField().fill('Sandro@email.com');
    await this.HomeGiassi.getCadButton().click();
  }

  async compraRapida(): Promise<void> {
    await this.HomeGiassi.getCompraRapidaButton().click();
    await this.HomeGiassi.getProdutoField().fill('Leite');
    await this.HomeGiassi.getNextProdutoField().fill('Farinha de trigo');
    await this.HomeGiassi.getProcurarProdutosButton().click();
  }
}
