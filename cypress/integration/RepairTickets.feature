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
    Then I should click on create new ticket
    Then Select failure Type, Return site and Serial Device
    And Select Building and Chromebook issue
    Then Enter the Describe Your Issue
    And Click on save button
    Then Verify New Ticket is added
    And Click on Download import button

    And Click on filter of Ticket Number contain in search box and Verify the Result
    And Click on filter of Ticket Number Does not contain in search box and Verify the Result
    And Click on filter of Ticket Number Equals in search box and Verify the Result
    And Click on filter of Ticket Number Does not equal in search box and Verify the Result
    And Click on filter of Ticket Number Begins with in search box and Verify the Result
    And Click on filter of Ticket Number Ends with in search box and Verify the Result
    And Click on filter of Ticket Number Blank in search box and Verify the Result
    And Click on filter of Ticket Number Not blank in search box and Verify the Result
    And Click on filter of Ticket Number contain in search box and Verify the Result

    And Click on filter of Repair type contain in search box and Verify the Result
    And Click on filter of Repair type Does not contain in search box and Verify the Result
    And Click on filter of Repair type Equals in search box and Verify the Result
    And Click on filter of Repair type Does not equal in search box and Verify the Result
    And Click on filter of Repair type Begins with in search box and Verify the Result
    And Click on filter of Repair type Ends with in search box and Verify the Result
    And Click on filter of Repair type Blank in search box and Verify the Result
    And Click on filter of Repair type Not blank in search box and Verify the Result

    And Click on filter of Serial Number contain in search box and Verify the Result
    And Click on filter of Serial Number Does not contain in search box and Verify the Result
    And Click on filter of Serial Number Equals in search box and Verify the Result
    And Click on filter of Serial Number Does not equal in search box and Verify the Result
    And Click on filter of Serial Number Begins with in search box and Verify the Result
    And Click on filter of Serial Number Ends with in search box and Verify the Result
    And Click on filter of Serial Number Blank in search box and Verify the Result
    And Click on filter of Serial Number Not blank in search box and Verify the Result

    And Click on filter of Building contain in search box and Verify the Result
    And Click on filter of Building Does not contain in search box and Verify the Result
    And Click on filter of Building Equals in search box and Verify the Result
    And Click on filter of Building Does not equal in search box and Verify the Result
    And Click on filter of Building Begins with in search box and Verify the Result
    And Click on filter of Building Ends with in search box and Verify the Result
    And Click on filter of Building Blank in search box and Verify the Result
    And Click on filter of Building Not blank in search box and Verify the Result

    And Click on filter of Repair device contain in search box and Verify the Result
    And Click on filter of Repair device Does not contain in search box and Verify the Result
    And Click on filter of Repair device Equals in search box and Verify the Result
    And Click on filter of Repair device Does not equal in search box and Verify the Result
    And Click on filter of Repair device Begins with in search box and Verify the Result
    And Click on filter of Repair device Ends with in search box and Verify the Result
    And Click on filter of Repair device Blank in search box and Verify the Result
    And Click on filter of Repair device Not blank in search box and Verify the Result

    And Click on filter of Asset tag contain in search box and Verify the Result
    And Click on filter of Asset tag Does not contain in search box and Verify the Result
    And Click on filter of Asset tag Equals in search box and Verify the Result
    And Click on filter of Asset tag Does not equal in search box and Verify the Result
    And Click on filter of Asset tag Begins with in search box and Verify the Result
    And Click on filter of Asset tag Ends with in search box and Verify the Result
    And Click on filter of Asset tag Blank in search box and Verify the Result
    And Click on filter of Asset tag Not blank in search box and Verify the Result

    And Click on filter of Repair status op1 in search box and Verify the Result
    And Click on filter of Repair status op2 in search box and Verify the Result
    And Click on filter of Repair status op3 in search box and Verify the Result
    And Click on filter of Repair status op4 in search box and Verify the Result
    And Click on filter of Repair status op5 in search box and Verify the Result
    And Click on filter of Repair status op6 in search box and Verify the Result
    And Click on filter of Repair status op7 in search box and Verify the Result

    And Click on filter of Created By contain in search box and Verify the Result
    And Click on filter of Created By Does not contain in search box and Verify the Result
    And Click on filter of Created By Equals in search box and Verify the Result
    And Click on filter of Created By Does not equal in search box and Verify the Result
    And Click on filter of Created By Begins with in search box and Verify the Result
    And Click on filter of Created By Ends with in search box and Verify the Result
    And Click on filter of Created By Blank in search box and Verify the Result
    And Click on filter of Created By Not blank in search box and Verify the Result

    And Click on filter of Repair Box Equals in search box and Verify the Result
    And Click on filter of Repair Box Does not equal in search box and Verify the Result
    And Click on filter of Repair Box Greater than in search box and Verify the Result
    And Click on filter of Repair Box Greater than or equal to in search box and Verify the Result
    And Click on filter of Repair Box Less than in search box and Verify the Result
    And Click on filter of Repair Box Less than or equal to in search box and Verify the Result
    And Click on filter of Repair Box Between in search box and Verify the Result
    And Click on filter of Repair Box Blank in search box and Verify the Result
    And Click on filter of Repair Box Not blank in search box and Verify the Result

    And Click on filter of Last Modified Date Equals in search box and Verify the Result
    And Click on filter of Last Modified Date Does not equal in search box and Verify the Result
    And Click on filter of Last Modified Date Before in search box and Verify the Result
    And Click on filter of Last Modified Date After in search box and Verify the Result
    And Click on filter of Last Modified Date Between with in search box and Verify the Result
    And Click on filter of Last Modified Date Blank in search box and Verify the Result
    And Click on filter of Last Modified Date Not blank in search box and Verify the Result

    And Click on view button
    Then Verify the Details of student repair ticket
# Then Click on Add Repair Image and Verify
# And Click on Add Note and Verify
# # And Enter the Search value in search box
# # Then Verify the Results in the table
# #  And Enter the Search -  Record Id in search box and Verify the Result
# # And Enter the Search - Ticket Number in search box and Verify the Result
# # Then Enter the Search - Repair type in search box and Verify the Result
# # And Enter the Search - Serial Number in search box and Verify the Result
# # Then Enter the Search - Repair status in search box and Verify the Result
# # And Enter the Search - Repair Box in search box and Verify the Result
# # Then Enter the Search - Asset tag in search box and Verify the Result
# # And Click More filter select- Record Id in search box and Verify the Result
# # Then Click on Clear filter
# # # And Click on the Edit Ticket Button
# # Then Update the Technician and Repair Status
# # And Click on Update Button
# # Then Verify Updated successfully
# # And Click on Add Line and Verify
