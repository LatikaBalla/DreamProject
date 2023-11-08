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
        Then Click on More filters
        Then Select Field name and Field operation
        And Enter the Search value in search box
        Then Click on Apply Button
        And Verify the Results in the table
        Then Click on Clear filter
        And Enter the building name in search box
        And Verify the record in searching history
        And Click on view Details Button
        Then Verfiy the Details are correct
        And Click on Edit Icon
        And I should edit Building Name,Phone and Extension
        Then I should edit Select Default building
        Then Click on update button
        And Verify the Record has been updated Meassage
        And Click on Delete Icon
        Then Click on Confirm Delete button
        And Verify the record is deleted successfully












