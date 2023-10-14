Feature:RepairTickets Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then close the terms of service window
        Then Click on Repair360 page


    Scenario:Visiblity check  Create a ticket and download eport
      And Verify the Title of RepairTickets Page
        Then Filters of RepairTickets should be visible
        And Table for RepairTickets should be visible
        Then I should click on create new ticket
        Then Select failure Type, Return site and Serial Device
        And Select Building and Chromebook issue
        Then Enter the Describe Your Issue
        And Click on save button
        Then Verify New Ticket is added 
        And Click on Download import button
        # Then Verify the successfully downloaded
        And Click on view the details
        Then Verify the Details of Repair Ticket
