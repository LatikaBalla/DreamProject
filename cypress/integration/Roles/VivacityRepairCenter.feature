Feature: VivacityRepairCenter Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then Close the terms of service window
        And Click on Repair360 page

    Scenario: Admin can access the  VivacityRepairCenterpage and check the visiblity
        Then I should be redirected to the Repair360 page
        And Verify the Title of VivacityRepairCenter Page
        Then Verify the VivaRepairTickets Tab should be visible
        And Verify the RepairBoxes tab should be visible




