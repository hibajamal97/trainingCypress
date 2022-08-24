Feature: Payments

    Scenario: verify that payments frame have fields
        Given The admin was in the preferences page
        When The admin clicks on payments tab
        Then The fields for payments data should be seen

    Scenario: verify that the payments tab in the preferences page
        Given The admin was in the preferences page
        Then The field have text equal to "Payments" should be seen

    Scenario: verify that can save payment data when update the data
        Given The admin was in the preferences page
        When The admin clicks on payments tab
        And The admin clicks on save menu from the navbar
        And The admin selects save option
        Then The green toast message that have text "saved successfully" should be seen


    @focus
    Scenario: Verify that when the provider in nvoicepay in payments tab and open Bank Account form THEN NextR365PaymentsNumber field should not exist
        Given The admin was in the preferences page
        And The admin was in the Payments tab
        When The admin selects nvoicepay option
        And The admin clicks on save option
        And The admin visit bank account form
        Then The NextR365Payments Number field should not exist

    Scenario: Verify that when the provider in onpay in payments tab and open Bank Account form THEN NextR365PaymentsNumber field should exist
        Given The admin was in the preferences page
        And The admin was in the Payments tab
        When The admin selects onpay option
        And The admin clicks on save option
        And The admin visit bank account form
        Then The NextR365Payments Number field should exist