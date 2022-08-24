Feature: Login

    I want to login into RES360

    @focus
    Scenario: verify that the admin can log into the system correctly
        Given The admin open RES360 login page
        When The admin types in a valid username "cwhite"
        And The admin types in a valid password "R3656mn"
        And The admin clicks on sign in btn
        Then The url should be contained "#/grid/new/react~accounting-dashboard"