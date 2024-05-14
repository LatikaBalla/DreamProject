Feature:Login Page Functionality
    As a user
    I want to access the Login page

    Background: Background name
        Given I should navigate to application
        When On landing page Click on login button

    Scenario: User logs in with valid credentials
        Then User enters valid credentials
        And Clicks the login button
        Then User should be redirected to the Report center page

    Scenario:  User sees an error with invalid credentials
        Then User enters invalid credentials
        And Clicks the login button
        Then Verify error message should be displayed

    Scenario:  User ForgetPassword with entering valid email id
        Then User enter the valid emailid
        And Clicks the ForgetPassword button
        Then Verify recovery password to email has been send message should be displayed

