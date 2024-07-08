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
    Then I should click on create new Box
    Then Enter weight and Standard Box Size
    And Select Pick-up site
    Then Check the need shipping box
    And Click on Create box button
    Then Select Ticket from dropdownlist
    And Click on Finish button
    Then Verify new box is added in table
    And Click More filter select- Record Id in search box and Verify the Result
    Then Click on Clear filter
    And Click More filter select- Tracking Number From in search box and Verify the Result
    Then Click on Clear filter
    And Click More filter select- Shipped From Date in search box and Verify the Result
    Then Click on Clear filter
    # And Click More filter select- Shipped From Date in search box and Verify the Result
    # Then Click on Clear filter
    # Then Click More filter select- Label From in search box and Verify the Result
    # Then Click on Clear filter
    # And Click More filter select- Building in search box and Verify the Result
    # Then Click on Clear filter
    And Click More filter select- Box_type in search box and Verify the Result
    Then Click on Clear filter
    And Click More filter select- shipping_box_status in search box and Verify the Result
    Then Click on Clear filter
    And Click More filter select- Created_by in search box and Verify the Result
    Then Click on Clear filter
    # And Click More filter select- Last_modified_date in search box and Verify the Result
    # Then Click on Clear filter
    And Enter the Search - Tracking Number in search box and Verify the Result
    Then Enter the Search - Record Id in search box and Verify the Result
    And Enter the Search - Building in search box and Verify the Result
    Then Enter the Search - Created_by in search box and Verify the Result
    And Click on Export Button
    And Click on view button
    Then Verify the Details new box
# And Add another ticket in the same box
# Then Select Ticket from dropdownlist
# And Click on Add ticket
# Then Verify the ticket is added in table
# And Click on view the ticket Details
# Then Verfiy the ticket Details
# And Click on Back button
# And Remove the ticket from box
# Then Verify the ticket is delete from the table





