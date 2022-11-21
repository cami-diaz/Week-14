import LoginPage from  '../pageobjects/login.page';

describe('My Login application', () => {
    beforeAll ('Navigate to url', () => {
        browser.url("https://www.saucedemo.com/");
    })
    it('Should not login with empty inputs', async () => {      
        await LoginPage.bot.isDisplayedInViewport();
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

    it('Should not login with the blocked user', async () => {       
        await LoginPage.inputUsername.setValue("locked_out_user");
        await LoginPage.inputPassword.setValue("secret_sauce")
        await LoginPage.btnLogin.click();
        await LoginPage.errorMsgTwo.waitForDisplayed({timeout: 10000});
        await expect(LoginPage.errorMsgTwo).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    });

    it('Should login with right credentials and logut successfully - User: problem_user', async () => {       
        await LoginPage.login('problem_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await LoginPage.btnMenu.click();
        await LoginPage.btnLogout.click();
    });

    it('Should login with right credentials and logut successfully - User: performance_glitch_user', async () => {       
        await LoginPage.login('performance_glitch_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await LoginPage.btnMenu.click();
        await LoginPage.btnLogout.click();
    });
});


