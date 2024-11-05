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
    # Then I should be redirected to the Users page
    # Then I should click on Add New student
    # Then Enter full name, title and Email
    # And Enter Phone, Cell Number, role and building
    # And Click on submit button
    # Then Verify the student added in table

    And Click on filter of Full name contain and Verify the Result
    And Click on filter of Full name Does not contain and Verify the Result
    And Click on filter of Full name Equals and Verify the Result
    And Click on filter of Full name Does not equal and Verify the Result
    And Click on filter of Full name Begins with and Verify the Result
    And Click on filter of Full name Ends with and Verify the Result
    And Click on filter of Full name Blank and Verify the Result
    # And Click on filter of Full name Not blank and Verify the Result

    And Click on filter of Eamil contain and Verify the Result
    And Click on filter of Eamil Does not contain and Verify the Result
    And Click on filter of Eamil Equals and Verify the Result
    And Click on filter of Eamil Does not equal and Verify the Result
    And Click on filter of Eamil Begins with and Verify the Result
    And Click on filter of Eamil Ends with and Verify the Result
    And Click on filter of Eamil Blank and Verify the Result
    # And Click on filter of Eamil Not blank and Verify the Result

    And Click on filter of Phone contain and Verify the Result
    And Click on filter of Phone Does not contain and Verify the Result
    And Click on filter of Phone Equals and Verify the Result
    And Click on filter of Phone Does not equal and Verify the Result
    And Click on filter of Phone Begins with and Verify the Result
    And Click on filter of Phone Ends with and Verify the Result
    And Click on filter of Phone Blank and Verify the Result
    # And Click on filter of Phone Not blank and Verify the Result

    And Click on filter of User Role op1 and Verify the Result
    And Click on filter of User Role op2 and Verify the Result
    And Click on filter of User Role op3 and Verify the Result
    And Click on filter of User Role op4 and Verify the Result
    And Click on filter of User Role op5 and Verify the Result
    And Click on filter of User Role op6 and Verify the Result
    And Click on filter of User Role op7 and Verify the Result
    And Click on filter of User Role op8 and Verify the Result
    And Click on filter of User Role op9 and Verify the Result
    # And Click on filter of User Role op10 and Verify the Result

    And Click on filter of Organizational Unit contain and Verify the Result
    And Click on filter of Organizational Unit Does not contain and Verify the Result
    And Click on filter of Organizational Unit Equals and Verify the Result
    And Click on filter of Organizational Unit Does not equal and Verify the Result
    And Click on filter of Organizational Unit Begins with and Verify the Result
    And Click on filter of Organizational Unit Ends with and Verify the Result
    And Click on filter of Organizational Unit Blank and Verify the Result
    # And Click on filter of Organizational Unit Not blank and Verify the Result

    # And Click on filter of User status Active and Verify the Result
    # And Click on filter of User status Inactive and Verify the Result

    And Click on Sort Ascending and Descending for Full Name and Verify the Result
    And Click on Sort Ascending and Descending for Email and Verify the Result
    And Click on Sort Ascending and Descending for Phone and Verify the Result
    And Click on Sort Ascending and Descending for User Role and Verify the Result
    # And Click on Sort Ascending and Descending for Organizational Unit and Verify the Result
    # And Click on Sort Ascending and Descending for User Status and Verify the Result

    # Then Click on Download button
    # And Click on view button and click on Edit button inside
    # Then I should edit title, full name
    # And I should edit Phone and Cell Number and user role
    # Then I edit User Status by clicking on checkbox
    # And I edit Building
    # Then Click on Submit button
    # And Verify the Record has been updated Meassage
    # And Click on view button and click on Edit button
    # Then I should edit title, full name
    # And I should edit Phone and Cell Number and user role
    # Then I edit User Status by clicking on checkbox
    # And I edit Building
    # Then Click on Submit button
    # And Verify the Record has been updated Meassage

    # And Click on Delete button
    # Then Click on Confirm Delete button
    # And Verify the record is deleted successfully
    # And Click on Export To CSV
    # Then Click on Bulk Upload button
    # And Click on Attach CSV file and Click on submit button
    # Then Verify the Uploaded successfully


