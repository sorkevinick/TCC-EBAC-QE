import { $ } from '@wdio/globals';

class CartPage {

  get continueBtn() {
    return $('id:selectAddressOrContinueToPayment');
  }

  async continueToPayment() {
    await this.continueBtn.click();
  }
}

export default new CartPage();
