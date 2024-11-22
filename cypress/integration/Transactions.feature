Feature:  Transactions Page Functionality
  As a user
  I want to access the dashboard page
  So that I can view my account information and data

  Background: Background name
    Given I should navigate to application
    When I should Sign In into the application
    Then Close the terms of service window
    And Click on transactions page

  Scenario: visibilty , filters and sorting of transactions page
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
    #  And Click on filter of Ticket Number Not blank and Verify the Result

    # And Click on filter of Serial Number contain and Verify the Result
    # And Click on filter of Serial Number Does not contain and Verify the Result
    # And Click on filter of Serial Number Equals and Verify the Result
    # And Click on filter of Serial Number Does not equal and Verify the Result
    # And Click on filter of Serial Number Begins with and Verify the Result
    # And Click on filter of Serial Number Ends with and Verify the Result
    # And Click on filter of Serial Number Blank and Verify the Result
    # # And Click on filter of Serial Number Not blank and Verify the Result

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

    # And Click on filter of Last Modified Date Equals and Verify the Result
    # And Click on filter of Last Modified Date Does not equal and Verify the Result
    # And Click on filter of Last Modified Date Before and Verify the Result
    # And Click on filter of Last Modified Date After and Verify the Result
    # And Click on filter of Last Modified Date Between and Verify the Result
    # And Click on filter of Last Modified Date Blank and Verify the Result
    # # And Click on filter of Last Modified Date Not blank and Verify the Result

    And Click on Sort Ascending and Descending for Ticket Number and Verify the Result
    And Click on Sort Ascending and Descending for Serial Number and Verify the Result
    And Click on Sort Ascending and Descending for Repair Type and Verify the Result
    And Click on Sort Ascending and Descending for Repair Status and Verify the Result
    And Click on Sort Ascending and Descending for Created Date and Verify the Result
    # And Click on Sort Ascending and Descending for Last Modified Date and Verify the Result

  Scenario: filters and sorting of Quotes page
    And Click on Quotes page
    And Click on filter of Quote Number contain and Verify the Result
    And Click on filter of Quote Number Does not contain and Verify the Result
    And Click on filter of Quote Number Equals and Verify the Result
    And Click on filter of Quote Number Does not equal and Verify the Result
    And Click on filter of Quote Number Begins with and Verify the Result
    And Click on filter of Quote Number Ends with and Verify the Result
    And Click on filter of Quote Number Blank and Verify the Result

    # And Click on filter of Expiration Date Equals and Verify the Result
    # And Click on filter of Expiration Date Does not equal and Verify the Result
    # And Click on filter of Expiration Date Before and Verify the Result
    # And Click on filter of Expiration Date After and Verify the Result
    # And Click on filter of Expiration Date Between and Verify the Result
    # And Click on filter of Expiration Date Blank and Verify the Result
    # And Click on filter of Expiration Date Not blank and Verify the Result

    And Click on filter of Created Date Equals and Verify the Result for Quotes
    And Click on filter of Created Date Does not equal and Verify the Result for Quotes
    And Click on filter of Created Date Before and Verify the Result for Quotes
    And Click on filter of Created Date After and Verify the Result for Quotes
    And Click on filter of Created Date Between and Verify the Result for Quotes
    And Click on filter of Created Date Blank and Verify the Result for Quotes
    And Click on filter of Created Date Not blank and Verify the Result for Quotes

    And Click on filter of Last Modified Date Equals and Verify the Result for Quotes
    And Click on filter of Last Modified Date Does not equal and Verify the Result for Quotes
    And Click on filter of Last Modified Date Before and Verify the Result for Quotes
    And Click on filter of Last Modified Date After and Verify the Result for Quotes
    And Click on filter of Last Modified Date Between and Verify the Result for Quotes
    And Click on filter of Last Modified Date Blank and Verify the Result for Quotes
    And Click on filter of Last Modified Date Not blank and Verify the Result for Quotes

    And Click on Sort Ascending and Descending for Quote Number and Verify the Result
    And Click on Sort Ascending and Descending for Expiration Date and Verify the Result
    And Click on Sort Ascending and Descending for Created Date and Verify the Result for Quotes
    And Click on Sort Ascending and Descending for Last Modified Date and Verify the Result for Quotes

  Scenario: filters and sorting of Orders page
    And Click on Orders page
    And Click on filter of Order Total contain and Verify the Result
    And Click on filter of Order Total Does not contain and Verify the Result
    And Click on filter of Order Total Equals and Verify the Result
    And Click on filter of Order Total Does not equal and Verify the Result
    And Click on filter of Order Total Begins with and Verify the Result
    And Click on filter of Order Total Ends with and Verify the Result
    And Click on filter of Order Total Blank and Verify the Result

    And Click on filter of Location contain and Verify the Result
    And Click on filter of Location Does not contain and Verify the Result
    And Click on filter of Location Equals and Verify the Result
    And Click on filter of Location Does not equal and Verify the Result
    And Click on filter of Location Begins with and Verify the Result
    And Click on filter of Location Ends with and Verify the Result
    And Click on filter of Location Blank and Verify the Result
    And Click on filter of Location Not blank and Verify the Result

    And Click on filter of Quote ID contain and Verify the Result
    And Click on filter of Quote ID Does not contain and Verify the Result
    And Click on filter of Quote ID Equals and Verify the Result
    And Click on filter of Quote ID Does not equal and Verify the Result
    And Click on filter of Quote ID Begins with and Verify the Result
    And Click on filter of Quote ID Ends with and Verify the Result
    And Click on filter of Quote ID Blank and Verify the Result

    And Click on filter of Customer PO Number contain and Verify the Result
    And Click on filter of Customer PO Number Does not contain and Verify the Result
    And Click on filter of Customer PO Number Equals and Verify the Result
    And Click on filter of Customer PO Number Does not equal and Verify the Result
    And Click on filter of Customer PO Number Begins with and Verify the Result
    And Click on filter of Customer PO Number Ends with and Verify the Result
    And Click on filter of Customer PO Number Blank and Verify the Result

    And Click on filter of Tracking Number contain and Verify the Result
    And Click on filter of Tracking Number Does not contain and Verify the Result
    And Click on filter of Tracking Number Equals and Verify the Result
    And Click on filter of Tracking Number Does not equal and Verify the Result
    And Click on filter of Tracking Number Begins with and Verify the Result
    And Click on filter of Tracking Number Ends with and Verify the Result
    And Click on filter of Tracking Number Blank and Verify the Result
    And Click on filter of Tracking Number Not blank and Verify the Result

    And Click on filter of Created Date Equals and Verify the Result for Orders
    And Click on filter of Created Date Does not equal and Verify the Result for Orders
    And Click on filter of Created Date Before and Verify the Result for Orders
    And Click on filter of Created Date After and Verify the Result for Orders
    And Click on filter of Created Date Between and Verify the Result for Orders
    And Click on filter of Created Date Blank and Verify the Result for Orders
    And Click on filter of Created Date Not blank and Verify the Result for Orders

    And Click on filter of Modified Date Equals and Verify the Result
    And Click on filter of Modified Date Does not equal and Verify the Result
    And Click on filter of Modified Date Before and Verify the Result
    And Click on filter of Modified Date After and Verify the Result
    And Click on filter of Modified Date Between and Verify the Result
    And Click on filter of Modified Date Blank and Verify the Result
    And Click on filter of Modified Date Not blank and Verify the Result

    And Click on Sort Ascending and Descending for Order Total and Verify the Result
    And Click on Sort Ascending and Descending for Quote ID and Verify the Result
    And Click on Sort Ascending and Descending for Location and Verify the Result
    And Click on Sort Ascending and Descending for Customer PO Number and Verify the Result
    And Click on Sort Ascending and Descending for Created Date and Verify the Result for Orders
    And Click on Sort Ascending and Descending for Tracking Number and Verify the Result
    And Click on Sort Ascending and Descending for Modified Date and Verify the Result

  Scenario: filters and sorting of Invoices page
    And Click on Invoices page
    And Click on filter of Invoice Id contain and Verify the Result
    And Click on filter of Invoice Id Does not contain and Verify the Result
    And Click on filter of Invoice Id Equals and Verify the Result
    And Click on filter of Invoice Id Does not equal and Verify the Result
    And Click on filter of Invoice Id Begins with and Verify the Result
    And Click on filter of Invoice Id Ends with and Verify the Result
    And Click on filter of Invoice Id Blank and Verify the Result

    And Click on filter of Order Id contain and Verify the Result
    And Click on filter of Order Id Does not contain and Verify the Result
    And Click on filter of Order Id Equals and Verify the Result
    And Click on filter of Order Id Does not equal and Verify the Result
    And Click on filter of Order Id Begins with and Verify the Result
    And Click on filter of Order Id Ends with and Verify the Result
    And Click on filter of Order Id Blank and Verify the Result

    And Click on filter of PO Number contain and Verify the Result
    And Click on filter of PO Number Does not contain and Verify the Result
    And Click on filter of PO Number Equals and Verify the Result
    And Click on filter of PO Number Does not equal and Verify the Result
    And Click on filter of PO Number Begins with and Verify the Result
    And Click on filter of PO Number Ends with and Verify the Result
    And Click on filter of PO Number Blank and Verify the Result

    And Click on filter of Created Date Equals and Verify the Result for Invoices
    And Click on filter of Created Date Does not equal and Verify the Result for Invoices
    And Click on filter of Created Date Before and Verify the Result for Invoices
    And Click on filter of Created Date After and Verify the Result for Invoices
    And Click on filter of Created Date Between and Verify the Result for Invoices
    And Click on filter of Created Date Blank and Verify the Result for Invoices
    And Click on filter of Created Date Not blank and Verify the Result for Invoices

    And Click on filter of Updated Date Equals and Verify the Result
    And Click on filter of Updated Date Does not equal and Verify the Result
    And Click on filter of Updated Date Before and Verify the Result
    And Click on filter of Updated Date After and Verify the Result
    And Click on filter of Updated Date Between and Verify the Result
    And Click on filter of Updated Date Blank and Verify the Result
    And Click on filter of Updated Date Not blank and Verify the Result

    And Click on filter of Shipping Address contain and Verify the Result
    And Click on filter of Shipping Address Does not contain and Verify the Result
    And Click on filter of Shipping Address Equals and Verify the Result
    And Click on filter of Shipping Address Does not equal and Verify the Result
    And Click on filter of Shipping Address Begins with and Verify the Result
    And Click on filter of Shipping Address Ends with and Verify the Result
    And Click on filter of Shipping Address Blank and Verify the Result
    And Click on filter of Shipping Address Not blank and Verify the Result

    And Click on Sort Ascending and Descending for Invoice Id and Verify the Result
    And Click on Sort Ascending and Descending for Order Id and Verify the Result
    And Click on Sort Ascending and Descending for PO Number and Verify the Result
    And Click on Sort Ascending and Descending for Created Date and Verify the Result for Invoice
    And Click on Sort Ascending and Descending for Updated Date and Verify the Result
    And Click on Sort Ascending and Descending for Shipping Address and Verify the Result