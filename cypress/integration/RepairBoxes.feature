Feature: RepairBoxes Page Functionality
  As a user
  I want to access the dashboard page
  So that I can view my account information and data

  Background: Background name
    Given I should navigate to application
    When I should Sign In into the application
    Then close the terms of service window
    Then Click on Repair360 page
    And Click on RepairBoxes Tab

  Scenario:  Visiblity check,Create New Box, add ticket and  view details of box with create aonther ticket
     And Verify the Title of RepairBoxes Page
      And Outbound and Inbound Shipments for RepairBoxes should be visible
    Then I should click on create new Box
    Then Enter weight, height, depth and width
    And Select Pick-up site
    Then Check the need shipping box
    And Click on Create box button
    Then Select Ticket from dropdownlist
    And Click on Finish button
   Then Verify new box is added in table
    And Click on download label 
    # Then Verify label downloaded successfully
    And Click on view button
    Then Verify the Details new box
    And Add another ticket in the same box
    Then Select Ticket from dropdownlist
    And Click on Add ticket
    Then Verify the ticket is added in table
    # And Click on view the ticket Details
    # Then Verfiy the ticket Details
    # And Click on Back button
    # And Remove the ticket from box
    # Then Verify the ticket is delete from the table

