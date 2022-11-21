import LoginPage from  '../pageobjects/login.page';

describe('My Login application', () => {
    beforeAll ('Navigate to url', () => {
        browser.url("https://www.saucedemo.com/");
    })
    it('Should not login with empty inputs', async () => {       
        await LoginPage.inputUsername.setValue("");
        await LoginPage.inputPassword.setValue("");
        await LoginPage.btnLogin.click();
        await LoginPage.errorMsg.waitForDisplayed({timeout: 10000});
        await expect(LoginPage.errorMsg).toHaveText('Epic sadface: Username is required');
        //await LoginPage.login('', '');
    });
});


