Feature:RepairTickets Page Functionality
  As a user
  I want to access the dashboard page
  So that I can view my account information and data

  Background: Background name
    Given I should navigate to application
    When I should Sign In into the application
    Then close the terms of service window
    Then Click on Repair360 page

  Scenario:Visiblity check  Create a ticket download export,view and search with all type
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
    And Enter the Search - Ticket Number in search box and Verify the Result
    Then Enter the Search - Repair type in search box and Verify the Result
    And Enter the Search - Serial Number in search box and Verify the Result
    Then Enter the Search - Repair status in search box and Verify the Result
    And Enter the Search - Repair Box in search box and Verify the Result
    Then Enter the Search - Asset tag in search box and Verify the Result
    And Click More filter select- Record Id in search box and Verify the Result
    Then Click on Clear filter
    And Click More filter select- Ticket Number in search box and Verify the Result
    Then Click on Clear filter
    And Click More filter select- Repair type in search box and Verify the Result
    Then Click on Clear filter
    And Click More filter select- Serial Number in search box and Verify the Result
    Then Click on Clear filter
    And Click More filter select- Repair device in search box and Verify the Result
    Then Click on Clear filter
    And Click More filter select- Repair status in search box and Verify the Result
    Then Click on Clear filter
    And Click More filter select- Repair Box in search box and Verify the Result
    Then Click on Clear filter
    And Click More filter select- Asset tag in search box and Verify the Result
    Then Click on Clear filter
    And Click More filter select- Created By in search box and Verify the Result
    Then Click on Clear filter
    And Enter the Search value in search box
    Then Verify the Results in the table
    And Click on view button
    Then Verify the Details of student repair ticket
    # And Click on the Edit Ticket Button
    # Then Update the Technician and Repair Status
    # And Click on Update Button
    # Then Verify Updated successfully
    # And Click on Add Line and Verify
    # Then Click on Add Repair Image and Verify
    # And Click on Add Note and Verify