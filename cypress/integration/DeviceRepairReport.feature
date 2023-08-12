Feature: InHouseRepairReport page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then Close the terms of service window
        And Click on Report center page
        Then Click on DeviceRepairReport page

    Scenario: Admin can access the DeviceRepairReport page and check the visiblity
        And Verify title of DeviceRepairReport Page should be visible
        Then Verify the filters should be visible
        Then Verify history table should be visible

    Scenario: Search with Ticket no, view the ticket details,clear and download the ticket details
        And Enter the Ticket Number in search box
        Then Verify the Ticket details in table
        And Click on clear button
        Then Verify the search box is cleared
        And Enter the Ticket Number in search box
        And  Click on the Ticket Number
        Then Verify the Repair Ticket page will open
        #  And Verfiy the details of Ticket
        Then Click on the download Ticket Estimation button
        And Verify downloaded ticket successfully






