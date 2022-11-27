import LoginPage from  '../pageobjects/login.page';

describe('My purchase flow', () => {
    beforeAll ('Navigate to url', () => {
        browser.url("https://www.saucedemo.com/");
    })

    it('Should Log in and remove the purchase from the cart.', async () => {       
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await LoginPage.btnRemove.click();
    });

    it('Should make the purchase correctly', async () => {       
        /*await LoginPage.inputUsername.setValue("locked_out_user");
        await LoginPage.inputPassword.setValue("secret_sauce")*/
        await LoginPage.btnAddToCart.click();
        await LoginPage.btnCart.click();
        await LoginPage.btnCheckout.click();
        await LoginPage.inputFirstName.setValue("Camila");
        await LoginPage.inputLastName.setValue("Diaz");
        await LoginPage.inputZip.setValue("2000");
        await LoginPage.btnContinue.click();
        await LoginPage.btnFinish.click();
        await LoginPage.btnBackHome.click();
    });

    it('Should not make the purchase with empty fields', async () => {    
        await LoginPage.btnAddToCart.click(); 
        await LoginPage.btnCart.click();
        await LoginPage.btnCheckout.click();
        await LoginPage.inputFirstName.setValue("");
        await LoginPage.inputLastName.setValue("");
        await LoginPage.inputZip.setValue("");
        await LoginPage.btnContinue.click();
        await LoginPage.errorMsgPurchase.waitForDisplayed({timeout: 10000});
        await expect(LoginPage.errorMsgPurchase).toHaveText('Error: First Name is required');
        await LoginPage.btnMenu.click();
        await LoginPage.btnLogout.click();
    });
});
