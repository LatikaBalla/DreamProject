Feature: Building Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then close the terms of service window
        And Click on Buildings Tab

    Scenario: Visiblity of Buildings page
        And Verify the Title of Buildings Page
        Then Filters of Buildings should be visible
        And Table for Buildings should be visible

    Scenario: Adding,Update and Delete new Buildings
        Then I should click on + Add New button
        And I should Enter Building Name,Phone and Extension
        Then Select Default building
      #  And Upload the Building image
        Then Enter Billing Address1, city and zip
        And Enter Initial for state and Country for billing
        Then Enter Shipping Address1, city and zip
        And Enter Initial for state and Country for shipping
        And Click on save button
        Then Verify the builing details added in table
        And Click on Edit Icon
        And I should edit Building Name,Phone and Extension
        Then I should edit Select Default building
     #   And I should edit Upload the Building image
        Then Click on update button
        And Verify the Record has been updated Meassage
        And Click on Delete Icon
        Then Click on Confirm Delete button
        And Verify the record is deleted successfully

    Scenario: add more filter, Clear filter and Search new building details
        Then I should click on + Add New button
        And I should Enter Building Name,Phone and Extension
        Then Select Default building
      #  And Upload the Building image
        Then Enter Billing Address1, city and zip
        And Enter Initial for state and Country for billing
        Then Enter Shipping Address1, city and zip
        And Enter Initial for state and Country for shipping
        And Click on save button
        Then Verify the builing details added in table
        Then Click on More filters
        # And Click on Add Filters Group
        Then Select Field name and Field operation
        And Enter the Search value in search box
        Then Click on Apply Button
        And Verify the Results in the table
        #Then Click on Clear filter
        And Enter the building name in search box
        And Verify the record in searching history











