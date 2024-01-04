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
    Then I should click on + Add New button
    And I should Enter Building Name,Phone and Extension
    Then Select Default building
    And Enter Billing Address and select from dropdown
    Then Click on checkbox Same as Shipping Address
    And Click on save button
    Then Verify the builing details added in table
    And Click on Edit Icon
    And I should edit Building Name,Phone and Extension
    Then Click on update button
    And Verify the Record has been updated Meassage
    And Click on Delete Icon
    Then Click on Confirm Delete button
    And Verify the record is deleted successfully
    And Click More filter select- Record Id in search box and Verify the Result
    Then Click on Clear filter
    And Click More filter select- Building Name in search box and Verify the Result
    Then Click on Clear filter
    And Click More filter select- Default Building in search box and Verify the Result
    Then Click on Clear filter
    And Click More filter select- Phone in search box and Verify the Result
    Then Click on Clear filter
    And Click More filter select- Building Shipping Address in search box and Verify the Result
    Then Click on Clear filter
    And Click More filter select- Building Billing Address in search box and Verify the Result
    Then Click on Clear filter
    And Click on Export To CSV
    And Enter the Search - Building Name in search box and Verify the Result
    # Then Enter the Search - Building Shipping Address in search box and Verify the Result
    And Enter the Search - Phone in search box and Verify the Result
















