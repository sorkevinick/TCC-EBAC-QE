import { $, $$ } from '@wdio/globals';

class BrowsePage {
  
  get browseBtn() {
    return $('//android.widget.TextView[@text="Browse"]');
  }

  get product() {
    return $('(//android.view.ViewGroup[@content-desc="Camiseta EBAC, R$ 149.99"])[1]');
  }

  async openBrowse() {
    await this.browseBtn.click();
  }

  // Método para selecionar o produto
  async selectFirstProduct() {
    await this.product.click();
  }
}

export default new BrowsePage();
