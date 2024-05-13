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
    And Enter the Search - Building Name in search box and Verify the Result
    Then Enter the Search - Building Shipping Address in search box and Verify the Result
    And Enter the Search - Phone in search box and Verify the Result
    And Click on Export To CSV
    Then Click on Bulk Upload button
    And Click on Attach CSV file and Click on submit button
    Then Verify the Uploaded successfully

















