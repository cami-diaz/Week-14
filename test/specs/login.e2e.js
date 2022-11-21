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
    });

    it('Should not login with a wrong password', async () => {       
        await LoginPage.login('standard_user', 'test');
        await LoginPage.btnLogin.click();
        await LoginPage.errorMsg.waitForDisplayed({timeout: 10000});
        await expect(LoginPage.errorMsg).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    it('Should login with right credentials and logout successfully', async () => {       
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await LoginPage.btnMenu.click();
        await LoginPage.btnLogout.click();
    });
});


