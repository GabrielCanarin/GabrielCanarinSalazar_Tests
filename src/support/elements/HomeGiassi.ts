import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class HomeElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getSearchField(): Locator {
    return this.page.locator(
      'input[class="vtex-styleguide-9-x-input ma0 border-box vtex-styleguide-9-x-hideDecorators vtex-styleguide-9-x-noAppearance br2  br-0 br--left  w-100 bn outline-0 bg-base c-on-base b--muted-4 hover-b--muted-3 t-body pl5 "]'
    );
  }

  getSearchButton(): Locator {
    return this.page.locator(
      'button[class=" vtex-store-components-3-x-searchBarIcon vtex-store-components-3-x-searchBarIcon--search flex items-center pointer bn bg-transparent outline-0 pv0 pl0 pr3"]'
    );
  }

  getFilterButton(): Locator {
    return this.page.locator('input[value="Higiene e Beleza"]');
  }

  getFillFilterButton(): Locator {
    return this.page.locator(
      'button[class="vtex-tag br-pill dib fw5 t-mini pv2 ph4 bn pointer  bg-muted-2 c-on-muted-2  false"]'
    );
  }

  getProduct(): Locator {
    return this.page.locator(
      'a[href="/creme_dental_menta_refrescante_closeup_protecao_bioativa_contra_o_acido_do_acucar_caixa_70g_827681/p"]'
    );
  }

  getNomeField(): Locator {
    return this.page.locator('input[placeholder="Digite seu Nome"]');
  }

  getEmailField(): Locator {
    return this.page.locator('input[placeholder="Digite seu E-mail"]');
  }

  getCadButton(): Locator {
    return this.page.locator(
      'button[class="vtex-button bw1 ba fw5 v-mid relative pa0 lh-solid br2 min-h-regular t-action bg-action-primary b--action-primary c-on-action-primary hover-bg-action-primary hover-b--action-primary hover-c-on-action-primary pointer "]'
    );
  }

  getCompraRapidaButton(): Locator {
    return this.page.locator(
      'a[class="vtex-rich-text-0-x-link vtex-rich-text-0-x-link--compra-rapida"]'
    );
  }

  getProdutoField(): Locator {
    return this.page.locator('input[placeholder="Escreva aqui seu produto"]');
  }

  getNextProdutoField(): Locator {
    return this.page.locator(
      'input[placeholder="Escreva aqui seu próximo produto"]'
    );
  }

  getProcurarProdutosButton(): Locator {
    return this.page.locator(
      'button[class="giassi-multi-items-search-0-x-btnSearchProducts "]'
    );
  }
}
