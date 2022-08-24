import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import loginPageActions from '../pageObjects/loginPage/actions';
import homePageAssertions from '../pageObjects/loginPage/assertions';
import paymentsTabActions from '../pageObjects/Payments/actions';
import PaymentsAssertions from '../pageObjects/Payments/assertions';

before(() => {
    loginPageActions
        .openLoginPage("https://devpurple.restaurant365.com/")
        .addUsername('cwhite')
        .addPassword('R3656mn')
        .clickOnSignInButton()
    homePageAssertions.checkTransactionsPageUrl('#/grid/new/react~accounting-dashboard')
})

Given('The admin was in the preferences page', () => {
    paymentsTabActions.openPreferncesPage("https://devpurple.restaurant365.com/#/form/PreferencesForm/00000000-0000-0000-0000-000000000000?Reference=TopRibbon")
});

When('The admin clicks on payments tab', () => {
    paymentsTabActions.clickOnPaymentsTab()
})
Given('The admin was in the Payments tab', () => {
    paymentsTabActions.clickOnPaymentsTab()
})
When('The admin clicks on save menu from the navbar', () => {
    paymentsTabActions.clickOnSaveMenuButton()
})
When('The admin selects save option', () => {
    paymentsTabActions.clickOnSaveOption()
})
When('The admin visit bank account form', () => {
    paymentsTabActions.visitBankAccountForm();
})
When('The admin selects nvoicepay option', () => {
    paymentsTabActions.selectsNvoicepay();
 })
Then('The fields for payments data should be seen', () => {
    PaymentsAssertions
        .checkingStatusInput()
        .checkingContatctNameInput()
        .checkingCompanyMappingInput()
        .checkingVerifiedInput()
        .checkingIsACHEnabledInput()
})

Then('The field have text equal to {string} should be seen', (text) => {
    PaymentsAssertions.checkPaymentsFeature(text);
})

Then('The green toast message that have text {string} should be seen', (text) => {
    PaymentsAssertions.checkingAlertContent(text);
})
Then('The NextR365Payments Number field should exist',()=> {
    PaymentsAssertions.NextR365PaymentsNumberFieldShouldVisible();
})
Then('The NextR365Payments Number field should exist',()=> {
    PaymentsAssertions.NextR365PaymentsNumberFieldShouldNotVisible();
})