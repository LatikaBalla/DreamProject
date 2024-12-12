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
        Then Select the building from dropdownlist
        Then Click on clear filter 
        And Verify Repair ticket by status should be visible
        Then Verify Manufacturers in Fleet graph should be visible
        Then Verify Repair Tickets Failure Type graph should be visible

        And Verify the InHouseRepairReport tab should be visible
        Then Click on InHouseRepairReport page
        And Verify all sections of InHouseRepairReport Page should be visible
        Then Verify ticketdata graph should be visible

        Then Verify the DeviceRepairReport tab should be visible
        Then Click on DeviceRepairReport page
        And Verify title of DeviceRepairReport Page should be visible
        Then Verify the filters should be visible
        Then Verify history table should be visible

        And Verify the FleetValue tab should be visible
        And Click on FleetValue page
        Then Verify title of FleetValue Page should be visible
         And Verify all sections of FleetValue Page should be visible
        Then Verify table and filter should be visible

        And Verify the TelemetryData tab should be visible
        And Click on TelemetryData page
        Then Verify the Title of TelemetryData Page
        Then Verify the TelemetryData Tab should be visible
        And Verify the Device information tab should be visible
        # Then Verify the Data graph should be visible

   

