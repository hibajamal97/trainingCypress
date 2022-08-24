
class loginPageActions {

    static openLoginPage(url: string) {
        cy.visit(url);
        return this;
    }
    static addUsername(username) {
        cy.get('#userIdField').type(username)
        return this;
    }
    static addPassword(password) {
        cy.get('#userPasswordField').type(password)
        return this;
    }
    static clickOnSignInButton() {
        cy.get('.btn').contains('Sign In').should('be.visible').click();
        return this;
    }
}

export default loginPageActions;