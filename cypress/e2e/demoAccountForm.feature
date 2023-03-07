Feature: Trading demo account form

    The purpose of this form is to allow the creation of trading demo accounts for visitors
    interested in trying trading with a given brokerage.
    URL of tested form is: https://revolgy-forms-case-study-master.staging.axiory.com/jp/registration/demo

    Background: Set up
        Given I open demo account form in new Incognito browser window

    @AXRY001
    Scenario: Provide values only for mandatory fields
        When I fill in lastname
        And I fill in phone number
        And I fill in email in correct format
        And I fill in deposit
        And I check the agreement checkbox
        When I submit the form
        Then I am redirected to homepage of Axiory portal
        And I can verify all given values from form are used properly
        # Note: Currently can't execute the last step about verification of data

    @AXRY002
    Scenario: Provide all values
        When I fill in firstname
        And I fill in lastname
        And I fill in phone number
        And I fill in country
        And I fill in emil in correct format
        And I select some platform
        And I select some account type
        And I select some leverage
        And I select some currency
        And I fill in deposit
        And I check the agreement checkbox
        When I submit the form
        Then I am redirected to homepage of Axiory portal
        And I can verify all given values from form are used properly

    @AXRY003
    Scenario: Try to submit empty form
        When I submit the form
        Then I am notified about mandatory fields by error message 
        # Note: This does not describe current behaviour but wanted behaviour

    @AXRY004
    Scenario: Invalid email format
        When I fill in lastname
        And I fill in phone number
        And I fill in email in wrong format
        And I fill in deposit
        And I check the agreement checkbox
        When I submit the form
        Then I am notified about wrong email format by error message

    @AXRY005
    Scenario: Invalid phone number format
        When I fill in lastname
        And I fill in invalid phone number
        And I fill in email in correct format
        And I fill in deposit
        And I check the agreement checkbox
        When I submit the form
        Then I am notified about wrong phone number format by error message
