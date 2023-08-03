Feature: VivacityRepairReport page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then Close the terms of service window
        And Click on Report center page
        Then Click on VivacityRepairReport page

    Scenario: Admin can access the VivacityRepairReport page and check the visiblity
        And Verify all sections of VivacityRepairReport Page should be visible
        Then Verify repair status graph should be visible
        Then Verify warranty claim graph should be visible
        And Verify cavas of Repair ticket by status should be visible



