Feature:  Users Page Functionality
  As a user
  I want to access the dashboard page
  So that I can view my account information and data

  Background: Background name
    Given I should navigate to application
    When I should Sign In into the application
    Then Close the terms of service window
    And Click on Users page

  Scenario: visibilty check,Add new Srudent, Search, Edit and search Delete the User and download
    Then I should be redirected to the Users page
    Then Filters of Users unit should be visible
    And Table for Users unit should be visible
    Then I should click on Add New student
    Then Enter full name, title and Email
    And Enter Phone, Cell Number, role and building
    And Click on submit button
    Then Verify the student added in table
    And Click on Edit button
    Then I should edit title, full name
    And I should edit Phone and Cell Number and user role
    Then I edit User Status by clicking on checkbox
    And I edit Building
    Then Click on Submit button
    And Verify the Record has been updated Meassage
    # And Click on Delete button
    # Then Click on Confirm Delete button
    # And Verify the record is deleted successfully
    Then Click on Download button
    And Enter the Search - Record Id in search box and Verify the Result
    Then Enter the Search - Full Name in search box and Verify the Result
    And Enter the Search - Email in search box and Verify the Result
    And Enter the Search - CellNumber in search box and Verify the Result
   Then Enter the Search - User Role in search box and Verify the Result
    And Click More filter select- Record Id in search box and Verify the Result
    Then Click on Clear filter
    And Click More filter select- Full name in search box and Verify the Result
    Then Click on Clear filter
    And Click More filter select- Eamil in search box and Verify the Result
    Then Click on Clear filter
    And Click More filter select- Cell Number in search box and Verify the Result
    Then Click on Clear filter
    And Click More filter select- Role Name in search box and Verify the Result
    Then Click on Clear filter
    And Click More filter select- User status in search box and Verify the Result
    Then Click on Clear filter


