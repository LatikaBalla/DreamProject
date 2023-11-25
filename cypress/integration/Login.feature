Feature:Login Page Functionality
    As a user
    I want to access the Login page

    Background: Background name
        Given I should navigate to application
        When On landing page Click on login button

    Scenario: User logs in with valid credentials
        Then User enters valid credentials
        And Clicks the login button
        Then User should be redirected to the dashboard

    Scenario:  User sees an error with invalid credentials
        Then User enters invalid credentials
        And Clicks the login button
        Then Verify error message should be displayed

