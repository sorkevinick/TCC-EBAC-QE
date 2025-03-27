import { $ } from '@wdio/globals';

class HomePage {
  async openMenu(menu) {
    await $(`id:tab-${menu}`).click();
  }

  async search() {
    const searchButton = await $('~searchProducts');
    await searchButton.click();
  }
}

export default new HomePage();
