Feature: Report Center Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then Close the terms of service window
        And Click on Report center page

    Scenario: Admin can access the ReportCenter page and check the visiblity
        Then I should be redirected to the Report center page
        And Verify the Title of Report center Page

        Then Verify the VivacityRepairReport Tab should be visible
        Then Click on VivacityRepairReport page
        And Verify all sections of VivacityRepairReport Page should be visible
        Then Verify repair status graph should be visible
        Then Verify warranty claim graph should be visible
        And Verify cavas of Repair ticket by status should be visible

        And Verify the InHouseRepairReport tab should be visible
        Then Click on InHouseRepairReport page
        And Verify all sections of InHouseRepairReport Page should be visible
        Then Verify ticketdata graph should be visible

        Then Verify the DeviceRepairReport tab should be visible
        Then Click on DeviceRepairReport page
        And Verify title of DeviceRepairReport Page should be visible
        Then Verify the filters should be visible
        Then Verify history table should be visible

        And Verify the NonwarrantyRepairs tab should be visible
        And Click on NonwarrantyRepairs page
        Then Verify title of NonWarrantyRepairs Page should be visible
        And Verify the NonWarranty Form should be visible
        Then Verify table and filter should be visible


   