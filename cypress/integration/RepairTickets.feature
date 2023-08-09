Feature:RepairTickets Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then close the terms of service window
        Then Click on Repair360 page

    Scenario: Visiblity of RepairTickets page
        And Verify the Title of RepairTickets Page
        Then Filters of RepairTickets should be visible
        And Table for RepairTickets should be visible