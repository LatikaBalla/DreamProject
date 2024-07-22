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
    And Click on filter of Repair Box contain in search box and Verify the Result
    And Click on filter of Repair Box Does not contain in search box and Verify the Result
    And Click on filter of Repair Box Greater than in search box and Verify the Result
    And Click on filter of Repair Box Greater than or equal to in search box and Verify the Result
    And Click on filter of Repair Box Less than in search box and Verify the Result
    And Click on filter of Repair Box Less than or equal to in search box and Verify the Result
    And Click on filter of Repair Box Between in search box and Verify the Result
    And Click on filter of Repair Box Blank in search box and Verify the Result
    And Click on filter of Repair Box Not blank in search box and Verify the Result

    And Click on filter of Tracking Number contain in search box and Verify the Result
    And Click on filter of Tracking Number Does not contain in search box and Verify the Result
    And Click on filter of Tracking Number Equals in search box and Verify the Result
    And Click on filter of Tracking Number Does not equal in search box and Verify the Result
    And Click on filter of Tracking Number Begins with in search box and Verify the Result
    And Click on filter of Tracking Number Ends with in search box and Verify the Result
    And Click on filter of Tracking Number Blank in search box and Verify the Result
    And Click on filter of Tracking Number Not blank in search box and Verify the Result

    And Click on filter of Shipped From Date Equals in search box and Verify the Result
    And Click on filter of Shipped From Date Does not equal in search box and Verify the Result
    And Click on filter of Shipped From Date Before in search box and Verify the Result
    And Click on filter of Shipped From Date After in search box and Verify the Result
    And Click on filter of Shipped From Date Between with in search box and Verify the Result
    And Click on filter of Shipped From Date Blank in search box and Verify the Result
    And Click on filter of Shipped From Date Not blank in search box and Verify the Result

    And Click on filter of Building contain in search box and Verify the Result
    And Click on filter of Building Does not contain in search box and Verify the Result
    And Click on filter of Building Equals in search box and Verify the Result
    And Click on filter of Building Does not equal in search box and Verify the Result
    And Click on filter of Building Begins with in search box and Verify the Result
    And Click on filter of Building Ends with in search box and Verify the Result
    And Click on filter of Building Blank in search box and Verify the Result
    And Click on filter of Building Not blank in search box and Verify the Result

    And Click on filter of Box_type contain in search box and Verify the Result
    And Click on filter of Box_type Does not contain in search box and Verify the Result
    And Click on filter of Box_type Equals in search box and Verify the Result
    And Click on filter of Box_type Does not equal in search box and Verify the Result
    And Click on filter of Box_type Begins with in search box and Verify the Result
    And Click on filter of Box_type Ends with in search box and Verify the Result
    And Click on filter of Box_type Blank in search box and Verify the Result
    And Click on filter of Box_type Not blank in search box and Verify the Result

  And Click on filter of Created By contain in search box and Verify the Result
    And Click on filter of Created By Does not contain in search box and Verify the Result
    And Click on filter of Created By Equals in search box and Verify the Result
    And Click on filter of Created By Does not equal in search box and Verify the Result
    And Click on filter of Created By Begins with in search box and Verify the Result
    And Click on filter of Created By Ends with in search box and Verify the Result
    And Click on filter of Created By Blank in search box and Verify the Result
    And Click on filter of Created By Not blank in search box and Verify the Result

    And Click on filter of shipping_box_status contain in search box and Verify the Result
    # And Click on filter of shipping_box_status Does not contain in search box and Verify the Result
    And Click on filter of shipping_box_status Equals in search box and Verify the Result
    And Click on filter of shipping_box_status Does not equal in search box and Verify the Result
    And Click on filter of shipping_box_status Begins with in search box and Verify the Result
    And Click on filter of shipping_box_status Ends with in search box and Verify the Result
    And Click on filter of shipping_box_status Blank in search box and Verify the Result
    # And Click on filter of shipping_box_status Not blank in search box and Verify the Result

    And Click on filter of Last Modified Date Equals in search box and Verify the Result
    And Click on filter of Last Modified Date Does not equal in search box and Verify the Result
    And Click on filter of Last Modified Date Before in search box and Verify the Result
    And Click on filter of Last Modified Date After in search box and Verify the Result
    And Click on filter of Last Modified Date Between in search box and Verify the Result
    And Click on filter of Last Modified Date Blank in search box and Verify the Result
    And Click on filter of Last Modified Date Not blank in search box and Verify the Result

    Then I should click on create new Box
    Then Enter weight and Standard Box Size
    And Select Pick-up site
    Then Check the need shipping box
    And Click on Create box button
    Then Select Ticket from dropdownlist
    And Click on Finish button
    Then Verify new box is added in table
    And Click on view button
    Then Verify the Details new box
# # And Enter the Search - Tracking Number in search box and Verify the Result
# # Then Enter the Search - Record Id in search box and Verify the Result
# # And Enter the Search - Building in search box and Verify the Result
# # Then Enter the Search - Created_by in search box and Verify the Result
# # And Click on Export Button
# # And Add another ticket in the same box
# # Then Select Ticket from dropdownlist
# # And Click on Add ticket
# # Then Verify the ticket is added in table
# # And Click on view the ticket Details
# # Then Verfiy the ticket Details
# # And Click on Back button
# # And Remove the ticket from box
# # Then Verify the ticket is delete from the table





