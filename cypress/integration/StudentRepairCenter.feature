Feature: StudentRepairCenter Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then Close the terms of service window
        And Click on Repair360 page
        Then Click on StudentRepairCenter tab

    Scenario: Admin can access the StudentRepairCenter page and check the visiblity
        And Verify the Title of StudentRepairCenter Page
        Then Verify the SRCrepairTickets Tab should be visible
        And Verify the SRCfacilitators tab should be visible
        Then Verify the Students Tab should be visible




