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

    Scenario: Create a ticket and download export
        Then Filters of InHouseWorkflow should be visible
        Then I should click on new button
        And Select failure Type, Serial Device, Technician and repair issue
        Then Select building and Enter the Chromebook issue
        And Click on save button
        Then Verify New Ticket is added
        And Enter Search ticket no in search box
        Then Verify search result below
        And Click on view button
        Then Verify the Details of student repair ticket
        And Click on the Edit Ticket Button
        Then Update the Technician and Repair Status
        And Click on Update Button
        Then Verify Updated successfully
        # And Click on Add Line and Verify
        # Then Click on Add Repair Image and Verify
        # And Click on Add Note and Verify
      
     


