class paymentsTabActions {

    static openPreferncesPage(url: string) {
        cy.visit(url);
        return this;
    }
    static mouseOverViewMoreButton() {
        cy.get('[data-testid="viewMoreRibbonMenuMenuItem"]').trigger('mouseover')
        return this;
    }
    static mouseOverAdministrationButton() {
        cy.get('#Administration').trigger('mouseover')
        return this;
    }
    static clickOnPreferencesOption() {
        cy.get('#AdministrationPreferences').click();
        return this;
    }
    static clickOnPaymentsTab() {
        cy.get('[data-testid="paymentsTab"]').click();
        return this;
    }

    static clickOnSaveMenuButton() {
        cy.get("span").contains("Save").first().click();
      //  cy.get('.ng-binding').contains("Save").click({ force: true })
        return this;
    }
    static clickOnSaveOption() {
        
        cy.get('[data-testid="saveMenu"]').click();
        cy.get('[data-testid=saveMenuItem] > .dropdown-toggle > .ng-binding').click();
        cy.wait(20000);
        return this;
    }
    static selectNvoicePay(){
        cy.get('input').should('have.')
    }
    static visitBankAccountForm(){
        cy.visit("https://devpurple.restaurant365.com/#/form/BankAccountForm/6fc7bed2-9723-45f5-b76a-942db61ecf40")
    }
    static selectsNvoicepay(){
        cy.get('#mui-2').contains('NVoice Pay').click();
    }
}
export default paymentsTabActions;