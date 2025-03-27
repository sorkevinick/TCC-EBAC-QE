import { $ } from '@wdio/globals';

class CheckoutPage {

  get checkout() {
    return $('id:completeCheckout');
  }

  get successImage() {
    return $('id:transactionSuccessfulImage');
  }


  async completeCheckout() {
    await this.checkout.click();
  }
  async verifyCheckoutSuccess() {
    await this.successImage.waitForExist({ timeout: 5000 });
    const isDisplayed = await this.successImage.isDisplayed();
    return isDisplayed;
  }
}

export default new CheckoutPage();
