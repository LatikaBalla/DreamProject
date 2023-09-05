Feature:InHouseWorkflow Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then Close the terms of service window
        Then Click on Repair360 page
        And Click on InHouseRepairCenter tab

    Scenario: Visiblity of InHouseWorkflow page
        Then Filters of InHouseWorkflow should be visible

    Scenario: Create a ticket and download export
        Then I should click on new button
        And Select failure Type, Serial Device and Technician
        Then Enter the Chromebook issue
        And Click on save button
        Then Verify New Ticket is added
        And Click on Download Export button
        Then Verify the successfully downloaded
