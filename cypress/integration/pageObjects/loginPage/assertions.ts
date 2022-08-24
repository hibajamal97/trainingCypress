class homePageAssertions {

    static checkTransactionsPageUrl(url: string) {
        cy.url().should("contain", url)
    }
}
export default homePageAssertions;