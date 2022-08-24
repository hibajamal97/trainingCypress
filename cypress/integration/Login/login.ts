import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import loginPageActions from '../pageObjects/loginPage/actions';
import homePageAssertions from '../pageObjects/loginPage/assertions';

Given('The admin open RES360 login page', () => {
    loginPageActions.openLoginPage("https://devpurple.restaurant365.com/")
});

When('The admin types in a valid username {string}', (username) => {
    loginPageActions.addUsername(username)
})

When('The admin types in a valid password {string}', (password) => {
    loginPageActions.addPassword(password)
})
When('The admin clicks on sign in btn', () => {
    loginPageActions.clickOnSignInButton();
});

Then("The url should be contained {string}", (url: string) => {
    homePageAssertions.checkTransactionsPageUrl(url);
});

