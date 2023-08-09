Feature: PartCloset Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then close the terms of service window
        Then Click on Repair360 page
        And Click on RepairBoxes Tab

    Scenario: Visiblity of RepairBoxes page
        And Verify the Title of RepairBoxes Page
        Then Filters of RepairBoxes should be visible
        And Table for RepairBoxes should be visible