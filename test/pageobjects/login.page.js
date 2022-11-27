/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnLogin () {
        return $('#login-button');
    }

	get errorMsg () {
        return $('#login_button_container > div > form > div.error-message-container.error > h3');
    }

	get btnMenu () {
        return $('#react-burger-menu-btn');
    }

	get btnLogout () {
        return $('#logout_sidebar_link');
    }
	
	get errorMsgTwo () {
        return $('#login_button_container > div > form > div.error-message-container.error > h3');
    }
	
	get bot () {
		return $('.bot_column');
	}

    get btnRemove () {
        return $('#remove-sauce-labs-bolt-t-shirt');
    }
	
    get btnAddToCart () {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get btnCart () {
        return $('.shopping_cart_link');
    }

    get btnCheckout () {
        return $('#checkout');
    }

    get inputFirstName () {
        return $('#first-name');
    }

    get inputLastName () {
        return $('#last-name');
    }

    get inputZip () {
        return $('#postal-code');
    }

    get btnContinue () {
        return $('#continue');
    }

    get btnFinish () {
        return $('#finish');
    }

    get btnBackHome () {
        return $('#back-to-products');
    }

    get errorMsgPurchase () {
        return $('#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error');
    }

    get btnCancel () {
        return $('#cancel');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }    
}

export default new LoginPage();
