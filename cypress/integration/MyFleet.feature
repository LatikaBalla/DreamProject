Feature: MyFleet  Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then close the terms of service window
        Then Click on Manage Devices
        And Click on MyFleet Tab

    Scenario: Visiblity of MyFleet page
        And Verify the Title of MyFleet Page
        Then Filters of MyFleet should be visible
        And Table for MyFleet should be visible