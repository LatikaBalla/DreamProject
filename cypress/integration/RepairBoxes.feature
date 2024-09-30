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
    And Click on filter of Repair Box Equals and Verify the Result
    And Click on filter of Repair Box Does not equal and Verify the Result
    And Click on filter of Repair Box Greater than and Verify the Result
    And Click on filter of Repair Box Greater than or equal to and Verify the Result
    And Click on filter of Repair Box Less than and Verify the Result
    And Click on filter of Repair Box Less than or equal to and Verify the Result
    And Click on filter of Repair Box Between and Verify the Result
    And Click on filter of Repair Box Blank and Verify the Result
    And Click on filter of Repair Box Not blank and Verify the Result

    And Click on filter of Tracking Number contain and Verify the Result
    And Click on filter of Tracking Number Does not contain and Verify the Result
    And Click on filter of Tracking Number Equals and Verify the Result
    And Click on filter of Tracking Number Does not equal and Verify the Result
    And Click on filter of Tracking Number Begins with and Verify the Result
    And Click on filter of Tracking Number Ends with and Verify the Result
    And Click on filter of Tracking Number Blank and Verify the Result
    And Click on filter of Tracking Number Not blank and Verify the Result

    And Click on filter of Shipped From Date Equals and Verify the Result
    And Click on filter of Shipped From Date Does not equal and Verify the Result
    And Click on filter of Shipped From Date Before and Verify the Result
    And Click on filter of Shipped From Date After and Verify the Result
    And Click on filter of Shipped From Date Between with and Verify the Result
    And Click on filter of Shipped From Date Blank and Verify the Result
    And Click on filter of Shipped From Date Not blank and Verify the Result

    And Click on filter of Building contain and Verify the Result
    And Click on filter of Building Does not contain and Verify the Result
    And Click on filter of Building Equals and Verify the Result
    And Click on filter of Building Does not equal and Verify the Result
    And Click on filter of Building Begins with and Verify the Result
    And Click on filter of Building Ends with and Verify the Result
    And Click on filter of Building Blank and Verify the Result
    And Click on filter of Building Not blank and Verify the Result

    And Click on filter of Box_type contain and Verify the Result
    And Click on filter of Box_type Does not contain and Verify the Result
    And Click on filter of Box_type Equals and Verify the Result
    And Click on filter of Box_type Does not equal and Verify the Result
    And Click on filter of Box_type Begins with and Verify the Result
    And Click on filter of Box_type Ends with and Verify the Result
    And Click on filter of Box_type Blank and Verify the Result
    And Click on filter of Box_type Not blank and Verify the Result

    And Click on filter of Created By contain and Verify the Result
    And Click on filter of Created By Does not contain and Verify the Result
    And Click on filter of Created By Equals and Verify the Result
    And Click on filter of Created By Does not equal and Verify the Result
    And Click on filter of Created By Begins with and Verify the Result
    And Click on filter of Created By Ends with and Verify the Result
    And Click on filter of Created By Blank and Verify the Result
    And Click on filter of Created By Not blank and Verify the Result

    And Click on filter of shipping_box_status Not Shipped and Verify the Result
    And Click on filter of shipping_box_status Recieved By Vivacity and Verify the Result
    And Click on filter of shipping_box_status Shipping From District with and Verify the Result
    And Click on filter of shipping_box_status all checked with and Verify the Result

     And Click on filter of Created Date Equals and Verify the Result
    And Click on filter of Created Date Does not equal and Verify the Result
    And Click on filter of Created Date Before and Verify the Result
    And Click on filter of Created Date After and Verify the Result
    And Click on filter of Created Date Between and Verify the Result
    And Click on filter of Created Date Blank and Verify the Result
    And Click on filter of Created Date Not blank and Verify the Result

    And Click on filter of Last Modified Date Equals and Verify the Result
    And Click on filter of Last Modified Date Does not equal and Verify the Result
    And Click on filter of Last Modified Date Before and Verify the Result
    And Click on filter of Last Modified Date After and Verify the Result
    And Click on filter of Last Modified Date Between and Verify the Result
    And Click on filter of Last Modified Date Blank and Verify the Result
    And Click on filter of Last Modified Date Not blank and Verify the Result
    
# And Click on Sort Ascending for Last Modified Date and Verify the Result
# And Click on Sort Descending for Last Modified Date and Verify the Result

    Then Click on label form of image and Verify
    Then Click on label form of Pdf and Verify
    And Click on Export Button
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
    And Add another ticket in the same box
    Then Select Ticket from dropdownlist
    And Click on Add ticket
    Then Verify the ticket is added in table
    And Click on view the ticket Details
    Then Verfiy the ticket Details
    Then Click on Add Repair Image and Verify
    And Click on Add Note and Verify
    Then Click on Remove button for deleting ticket
    And Verify the ticket removed









