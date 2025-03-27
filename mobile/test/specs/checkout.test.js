import { expect } from '@wdio/globals';
import homePage from '../pageobjects/home.page.js';
import browsePage from '../pageobjects/browse.page.js';
import productPage from '../pageobjects/product.page.js';
import cartPage from '../pageobjects/cart.page.js';
import checkoutPage from '../pageobjects/checkout.page.js';
import loginPage from  '../pageobjects/login.page'
import profilePage from '../pageobjects/profile.page'

describe('Checkout process', () => {
  it('should complete the checkout process', async () => {
    // Acessar a aba de busca e pesquisar produto
    let profileTab = driver.isAndroid ? 'profile' : 'Account';
    await homePage.openMenu(profileTab);
    await loginPage.login('kevin@ebac.com', '123456')
    await homePage.openMenu(profileTab)
    expect((await profilePage.profileName('fonseca kevin')).isDisplayed()).toBeTruthy()
    
    await browsePage.openBrowse()
    await browsePage.selectFirstProduct()
    
    await productPage.addToCart();
    
    await cartPage.continueToPayment();
    
    await checkoutPage.completeCheckout();

    const success = await checkoutPage.verifyCheckoutSuccess();
    expect(success).toBeTruthy()

    
  });
});
