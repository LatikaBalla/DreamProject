Feature: Building Page Functionality
  As a user
  I want to access the dashboard page
  So that I can view my account information and data

  Background: Background name
    Given I should navigate to application
    When I should Sign In into the application
    Then close the terms of service window
    And Click on Buildings Tab


  Scenario: Adding,Update,add more filter, Clear filter and Search,View Details and Delete new Buildings
    And Verify the Title of Buildings Page
    Then Filters of Buildings should be visible
    And Table for Buildings should be visible

    Then I should click on Add building button
    And I should Enter Building Name,Phone and Extension
    Then I should Enter Building Abbreviation and Select Default building
    And Enter Billing Id, Shipping Address and select from dropdown
    Then Click on checkbox Same as Shipping Address
    And Click on save button
    Then Verify the builing details added in table

    And Click on filter of Building Name contain and Verify the Result
    And Click on filter of Building Name Does not contain and Verify the Result
    And Click on filter of Building Name Equals and Verify the Result
    And Click on filter of Building Name Does not equal and Verify the Result
    And Click on filter of Building Name Begins with and Verify the Result
    And Click on filter of Building Name Ends with and Verify the Result
    And Click on filter of Building Name Blank and Verify the Result
    And Click on filter of Building Name Not blank and Verify the Result
    And Click on filter of Building Name contain and Verify the Result

    And Click on filter of Building ID contain and Verify the Result
    And Click on filter of Building ID Does not contain and Verify the Result
    And Click on filter of Building ID Equals and Verify the Result
    And Click on filter of Building ID Does not equal and Verify the Result
    And Click on filter of Building ID Begins with and Verify the Result
    And Click on filter of Building ID Ends with and Verify the Result
    And Click on filter of Building ID Blank and Verify the Result
    And Click on filter of Building ID Not blank and Verify the Result

    And Click on filter of Building Shipping Address contain and Verify the Result
    And Click on filter of Building Shipping Address Does not contain and Verify the Result
    And Click on filter of Building Shipping Address Equals and Verify the Result
    And Click on filter of Building Shipping Address Does not equal and Verify the Result
    And Click on filter of Building Shipping Address Begins with and Verify the Result
    And Click on filter of Building Shipping Address Ends with and Verify the Result
    And Click on filter of Building Shipping Address Blank and Verify the Result
    And Click on filter of Building Shipping Address Not blank and Verify the Result

    And Click on filter of Building Billing Address contain and Verify the Result
    And Click on filter of Building Billing Address Does not contain and Verify the Result
    And Click on filter of Building Billing Address Equals and Verify the Result
    And Click on filter of Building Billing Address Does not equal and Verify the Result
    And Click on filter of Building Billing Address Begins with and Verify the Result
    And Click on filter of Building Billing Address Ends with and Verify the Result
    And Click on filter of Building Billing Address Blank and Verify the Result
    And Click on filter of Building Billing Address Not blank and Verify the Result

    And Click on filter of Building Abbreviation contain and Verify the Result
    And Click on filter of Building Abbreviation Does not contain and Verify the Result
    And Click on filter of Building Abbreviation Equals and Verify the Result
    And Click on filter of Building Abbreviation Does not equal and Verify the Result
    And Click on filter of Building Abbreviation Begins with and Verify the Result
    And Click on filter of Building Abbreviation Ends with and Verify the Result
    And Click on filter of Building Abbreviation Blank and Verify the Result
    And Click on filter of Building Abbreviation Not blank and Verify the Result

    And Click on filter of Default Building true and Verify the Result
    And Click on filter of Default Building false and Verify the Result

    And Click on filter of Extension contain and Verify the Result
    And Click on filter of Extension Does not contain and Verify the Result
    And Click on filter of Extension Equals and Verify the Result
    And Click on filter of Extension Does not equal and Verify the Result
    And Click on filter of Extension Begins with and Verify the Result
    And Click on filter of Extension Ends with and Verify the Result
    And Click on filter of Extension Blank and Verify the Result
    And Click on filter of Extension Not blank and Verify the Result

    And Click on filter of Phone contain and Verify the Result
    And Click on filter of Phone Does not contain and Verify the Result
    And Click on filter of Phone Equals and Verify the Result
    And Click on filter of Phone Does not equal and Verify the Result
    And Click on filter of Phone Begins with and Verify the Result
    And Click on filter of Phone Ends with and Verify the Result
    And Click on filter of Phone Blank and Verify the Result
    And Click on filter of Phone Not blank and Verify the Result

    And Click on Edit Icon of builing
    And I should edit Building Name,Phone and Extension of builing
    Then I should edit Select Default building
    Then Click on update button of builing
    And Verify the Record has been updated Meassage of builing
    And Click on Delete Icon of building
    Then Click on Confirm Delete button of building
    And Verify the record is deleted successfully of building

    # And Click on Export To CSV
    # Then Click on Bulk Upload button
    # And Click on Attach CSV file and Click on submit button
    # Then Verify the Uploaded successfully

















