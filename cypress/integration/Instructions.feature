Feature: Instructions Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then Close the terms of service window
        Then Click on Resources page
        And Click on Instructions tab

    Scenario: Visiblity of Instructions page
        Then Verify the provisionDevice Tab should be visible
        And Verify the deprovisionDevice tab should be visible

