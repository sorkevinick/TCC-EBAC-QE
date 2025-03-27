class LoginPage {
    visit() {
        cy.visit('/minha-conta');
    }

    fillUsername(username) {
        cy.get('#username').type(username);
    }

    fillPassword(password) {
        cy.get('#password').type(password, { log: false });
    }

    submit() {
        cy.get('.woocommerce-form > .button').click();
    }

    validateLoginSuccess() {
        cy.get('.page-title').should('be.visible');
    }

    validateLoginFailure() {
        cy.get('.woocommerce-error').should('be.visible');
    }
}

export default new LoginPage();
