class PaymentsAssertions {

    static checkPaymentsFeature(text) {
        cy.get('[data-testid=paymentsTab] > .k-link').should('have.text', 'Payments')
    }

    static checkingStatusInput() {
        cy.get('input').eq(0).should('have.id', 'statusInputField');
        return this;
        
    }

    static checkingContatctNameInput() {
        cy.get("input").eq(1).should('have.id', 'paymentUsersMultiSelect');
        return this;
    }
    static checkingCompanyMappingInput() {
        cy.get("input").eq(2).should('have.id', 'mui-98738');
        return this;
    }
    static checkingPaymentProviderInput() {
        cy.get("input").eq(3).should('have.id', 'mui-83610');
        return this;
    }
    static checkingVerifiedInput() {
        cy.get("input").eq(4).should('have.attr', 'name').and('equal', 'verified');
        return this;
    }
    static checkingIsACHEnabledInput() {
        cy.get("input").eq(5).should('have.attr', 'name').and('equal', 'isACHEnabled');
        return this;
    }
    static checkingAlertContent(content) {
        cy.get(".toast-message").contains(content);
        return this;
    };
    static NextR365PaymentsNumberFieldShouldVisible(){
        cy.get('#nextR365PaymentNumber').should('exist');
        return this;
    }
    static NextR365PaymentsNumberFieldShouldNotVisible(){
        cy.get('#nextR365PaymentNumber').should('not.exist');
        return this;
    }


}
export default PaymentsAssertions;