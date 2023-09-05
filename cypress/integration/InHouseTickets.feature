Feature:InHouseTickets Page Functionality
  As a user
  I want to access the dashboard page
  So that I can view my account information and data

  Background: Background name
    Given I should navigate to application
    When I should Sign In into the application
    Then close the terms of service window
    Then Click on Repair360 page
    And Click on InHouseRepairCenter tab
    Then Click All InHouseTickets tab

  Scenario: Visiblity of InHouseTickets page
    And Verify the Title of InHouseTickets Page
    Then Filters of InHouseTickets should be visible
    And Table for InHouseTickets should be visible

  Scenario: Create a ticket and download export
    Then I should click on Create new button
    And Select failure Type, Serial Device and Technician
    Then Enter the Chromebook issue
    And Click on save button
    Then Verify New Ticket is added
    And Click on Download Export button
    Then Verify the successfully downloaded