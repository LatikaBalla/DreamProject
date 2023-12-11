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

  Scenario: Visiblity check, Create a ticket and download export
    #  And Verify the Title of InHouseTickets Page
    # Then Filters of InHouseTickets should be visible
    # And Table for InHouseTickets should be visible
    # Then I should click on Create new button
    # And Select failure Type, Serial Device, Technician, issue and Building 
    # Then Enter the Chromebook issue
    # And Click on save button
    # Then Verify New Ticket is added
    # And Click on Download Export button
    # Then Verify the successfully downloaded
    And Enter the Search - Record Id in search box and Verify the Result
    Then Enter the Search - Ticket Number in search box and Verify the Result
    And Enter the Search - Repair type in search box and Verify the Result
    Then Enter the Search - Repair status in search box and Verify the Result