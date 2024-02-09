Feature:SrcRepairTickets Page Functionality
  As a user
  I want to access the dashboard page
  So that I can view my account information and data

  Background: Background name
    Given I should navigate to application
    When I should Sign In into the application
    Then close the terms of service window
    Then Click on Repair360 page
    And Click on StudentRepairCenter tab
    Then Click on SrcRepairTickets tab

  Scenario: visibility check, Create Student repair ticket and Search
    And Verify the Title of SrcRepairTickets Page
    Then Filters of SrcRepairTickets should be visible
    And Table for SrcRepairTickets should be visible
    And Enter the Search - Record Id in search box and Verify the Result
    Then Enter the Search - Ticket Number in search box and Verify the Result
    And Enter the Search - Repair type in search box and Verify the Result
    Then Enter the Search - Repair status in search box and Verify the Result
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
    And Click More filter select- Asset tag in search box and Verify the Result
    Then Click on Clear filter
    And Click More filter select- internal Technician in search box and Verify the Result
    Then Click on Clear filter
    And Click More filter select- Created By in search box and Verify the Result
    Then Click on Clear filter
    Then I should click on Create Student Repair Ticket button
    And Select failure Type, Serial Device, Technician and building
    Then Enter the Chromebook issue
    And Click on save button
    Then Verify New Ticket is added
    And Enter the Search value in search box
    Then Verify the Results in the table
    And Click on view button
    Then Verify the Details of student repair ticket
    And Click on the Edit Ticket Button
    Then Update the Technician and Repair Status
    And Click on Update Button
    Then Verify Updated successfully
    And Click on Add Line and Verify
    Then Click on Add Repair Image and Verify
    And Click on Add Note and Verify


