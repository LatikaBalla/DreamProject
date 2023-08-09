Feature:SrcRepairTickets Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then close the terms of service window
        Then Click on Repair360 page
        And Click on StudentRepairCenter tab
        Then Click on SrcRepairTickets tab

    Scenario: Visiblity of SrcRepairTickets page
        And Verify the Title of SrcRepairTickets Page
        Then Filters of SrcRepairTickets should be visible
        And Table for SrcRepairTickets should be visible