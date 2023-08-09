Feature: InHouseRepairCenter Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then Close the terms of service window
        And Click on Repair360 page
        Then Click on InHouseRepairCenter tab

    Scenario: Admin can access the  InHouseRepairCenter page and check the visiblity
        And Verify the Title of InHouseRepairCenter Page
        Then Verify the inhouseworkflow Tab should be visible
        And Verify the inhouseTickets tab should be visible


