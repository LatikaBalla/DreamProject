Feature:  Transactions Page Functionality
  As a user
  I want to access the dashboard page
  So that I can view my account information and data

  Background: Background name
    Given I should navigate to application
    When I should Sign In into the application
    Then Close the terms of service window
    And Click on transactions page

  Scenario: visibilty check,Add new Srudent, Search, Edit and search Delete the User and download
    Then I should be redirected to the transactions page
    And Verify the Title of transactions Page
    Then Verify the Estimates Tab should be visible
    And Verify the Quotes tab should be visible
    Then Verify the Orders Tab should be visible
    And Verify the Invoices tab should be visible
    
    And Click on filter of Ticket Number contain and Verify the Result
    And Click on filter of Ticket Number Does not contain and Verify the Result
    And Click on filter of Ticket Number Equals and Verify the Result
    And Click on filter of Ticket Number Does not equal and Verify the Result
    And Click on filter of Ticket Number Begins with and Verify the Result
    And Click on filter of Ticket Number Ends with and Verify the Result
    And Click on filter of Ticket Number Blank and Verify the Result
    # And Click on filter of Ticket Number Not blank and Verify the Result

    And Click on filter of Serial Number contain and Verify the Result
    And Click on filter of Serial Number Does not contain and Verify the Result
    And Click on filter of Serial Number Equals and Verify the Result
    And Click on filter of Serial Number Does not equal and Verify the Result
    And Click on filter of Serial Number Begins with and Verify the Result
    And Click on filter of Serial Number Ends with and Verify the Result
    And Click on filter of Serial Number Blank and Verify the Result
    # And Click on filter of Serial Number Not blank and Verify the Result

    And Click on filter of Repair Type op1 and Verify the Result
    And Click on filter of Repair Type op2 and Verify the Result
    And Click on filter of Repair Type op3 and Verify the Result

    And Click on filter of Repair Status op1 and Verify the Result
    And Click on filter of Repair Status op2 and Verify the Result
    And Click on filter of Repair Status op3 and Verify the Result
    And Click on filter of Repair Status op4 and Verify the Result
    And Click on filter of Repair Status op5 and Verify the Result

    And Click on filter of Created Date Equals and Verify the Result
    And Click on filter of Created Date Does not equal and Verify the Result
    And Click on filter of Created Date Before and Verify the Result
    And Click on filter of Created Date After and Verify the Result
    And Click on filter of Created Date Between and Verify the Result
    And Click on filter of Created Date Blank and Verify the Result
    # And Click on filter of Created Date Not blank and Verify the Result

    And Click on filter of Last Modified Date Equals and Verify the Result
    And Click on filter of Last Modified Date Does not equal and Verify the Result
    And Click on filter of Last Modified Date Before and Verify the Result
    And Click on filter of Last Modified Date After and Verify the Result
    And Click on filter of Last Modified Date Between and Verify the Result
    And Click on filter of Last Modified Date Blank and Verify the Result
    # And Click on filter of Last Modified Date Not blank and Verify the Result

    And Click on Sort Ascending and Descending for Ticket Number and Verify the Result
    And Click on Sort Ascending and Descending for Serial Number and Verify the Result
    And Click on Sort Ascending and Descending for Repair Type and Verify the Result
    And Click on Sort Ascending and Descending for Repair Status and Verify the Result
    And Click on Sort Ascending and Descending for Created Date and Verify the Result
    And Click on Sort Ascending and Descending for Last Modified Date and Verify the Result
