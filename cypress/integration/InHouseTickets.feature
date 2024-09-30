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
    And Verify the Title of InHouseTickets Page
    Then I should click on Create new button
    And Select failure Type, Serial Device, Technician, issue and Building
    Then Enter the Chromebook issue
    And Click on save button
    Then Verify New Ticket is added

    And Click on filter of Record Id contain and Verify the Result
    And Click on filter of Record Id Does not contain and Verify the Result
    And Click on filter of Record Id Equals and Verify the Result
    And Click on filter of Record Id Does not equal and Verify the Result
    And Click on filter of Record Id Begins with and Verify the Result
    And Click on filter of Record Id Ends with and Verify the Result
    And Click on filter of Record Id Blank and Verify the Result
    And Click on filter of Record Id Not blank and Verify the Result

    And Click on filter of Ticket Number contain and Verify the Result
    And Click on filter of Ticket Number Does not contain and Verify the Result
    And Click on filter of Ticket Number Equals and Verify the Result
    And Click on filter of Ticket Number Does not equal and Verify the Result
    And Click on filter of Ticket Number Begins with and Verify the Result
    And Click on filter of Ticket Number Ends with and Verify the Result
    And Click on filter of Ticket Number Blank and Verify the Result
    And Click on filter of Ticket Number Not blank and Verify the Result

    And Click on filter of Building contain and Verify the Result
    And Click on filter of Building Does not contain and Verify the Result
    And Click on filter of Building Equals and Verify the Result
    And Click on filter of Building Does not equal and Verify the Result
    And Click on filter of Building Begins with and Verify the Result
    And Click on filter of Building Ends with and Verify the Result
    And Click on filter of Building Blank and Verify the Result
    And Click on filter of Building Not blank and Verify the Result

    And Click on filter of Repair type contain and Verify the Result

    And Click on filter of Serial Number contain and Verify the Result
    And Click on filter of Serial Number Does not contain and Verify the Result
    And Click on filter of Serial Number Equals and Verify the Result
    And Click on filter of Serial Number Does not equal and Verify the Result
    And Click on filter of Serial Number Begins with and Verify the Result
    And Click on filter of Serial Number Ends with and Verify the Result
    And Click on filter of Serial Number Blank and Verify the Result
    And Click on filter of Serial Number Not blank and Verify the Result

    And Click on filter of Repair device contain and Verify the Result
    And Click on filter of Repair device Does not contain and Verify the Result
    And Click on filter of Repair device Equals and Verify the Result
    And Click on filter of Repair device Does not equal and Verify the Result
    And Click on filter of Repair device Begins with and Verify the Result
    And Click on filter of Repair device Ends with and Verify the Result
    And Click on filter of Repair device Blank and Verify the Result
    And Click on filter of Repair device Not blank and Verify the Result

    And Click on filter of Asset tag contain and Verify the Result
    And Click on filter of Asset tag Does not contain and Verify the Result
    And Click on filter of Asset tag Equals and Verify the Result
    And Click on filter of Asset tag Does not equal and Verify the Result
    And Click on filter of Asset tag Begins with and Verify the Result
    And Click on filter of Asset tag Ends with and Verify the Result
    And Click on filter of Asset tag Blank and Verify the Result
    And Click on filter of Asset tag Not blank and Verify the Result

    And Click on filter of Internal Technician contain and Verify the Result
    And Click on filter of Internal Technician Does not contain and Verify the Result
    And Click on filter of Internal Technician Equals and Verify the Result
    And Click on filter of Internal Technician Does not equal and Verify the Result
    And Click on filter of Internal Technician Begins with and Verify the Result
    And Click on filter of Internal Technician Ends with and Verify the Result
    And Click on filter of Internal Technician Blank and Verify the Result
    And Click on filter of Internal Technician Not blank and Verify the Result

    And Click on filter of Student Name contain and Verify the Result
    And Click on filter of Student Name Does not contain and Verify the Result
    And Click on filter of Student Name Equals and Verify the Result
    And Click on filter of Student Name Does not equal and Verify the Result
    And Click on filter of Student Name Begins with and Verify the Result
    And Click on filter of Student Name Ends with and Verify the Result
    And Click on filter of Student Name Blank and Verify the Result
    And Click on filter of Student Name Not blank and Verify the Result

    And Click on filter of Repair status op1 and Verify the Result
    And Click on filter of Repair status op2 and Verify the Result
    And Click on filter of Repair status op3 and Verify the Result
    And Click on filter of Repair status op4 and Verify the Result
    And Click on filter of Repair status op5 and Verify the Result
    And Click on filter of Repair status op6 and Verify the Result
    And Click on filter of Repair status op7 and Verify the Result
    And Click on filter of Repair status op8 and Verify the Result
    And Click on filter of Repair status op9 and Verify the Result
    And Click on filter of Repair status op10 and Verify the Result

    And Click on filter of In House status op1 and Verify the Result
    And Click on filter of In House status op2 and Verify the Result
    And Click on filter of In House status op3 and Verify the Result
    And Click on filter of In House status op4 and Verify the Result
    And Click on filter of In House status op5 and Verify the Result

    And Click on filter of Warranty status search and Verify the Result
    And Click on filter of Warranty status Non Warranty and Verify the Result

    And Click on filter of Created By contain and Verify the Result
    And Click on filter of Created By Does not contain and Verify the Result
    And Click on filter of Created By Equals and Verify the Result
    And Click on filter of Created By Does not equal and Verify the Result
    And Click on filter of Created By Begins with and Verify the Result
    And Click on filter of Created By Ends with and Verify the Result
    And Click on filter of Created By Blank and Verify the Result
    And Click on filter of Created By Not blank and Verify the Result

    And Click on filter of Last Modified Date Equals and Verify the Result
    And Click on filter of Last Modified Date Does not equal and Verify the Result
    And Click on filter of Last Modified Date Before and Verify the Result
    And Click on filter of Last Modified Date After and Verify the Result
    And Click on filter of Last Modified Date Between with and Verify the Result
    And Click on filter of Last Modified Date Blank and Verify the Result
    And Click on filter of Last Modified Date Not blank and Verify the Result

    And Click on Download Export button
    And Click on view button
    Then Verify the Details of student repair ticket
    And Click on the Update to student Button
    Then Updated to student successfully
    And Click on the Update to in house Button
    Then Updated to in house successfully
    And Click on the Edit Ticket Button
    Then Update the Technician and Repair Status
    And Click on Update Button
    Then Verify Updated successfully
    And Click on Add Line and Verify
    Then Click on Add Repair Image and Verify
    And Click on Add Note and Verify



