Feature: Account Details Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then close the terms of service window

    Scenario: Visiblity of Account Details page
        Then My account Details should be visible
        And Verify the Title of Account Details Page
        Then Filters of account deatils should be visible
        And Table for account deatils should be visible

    Scenario: Adding,Update and Delete new account of Account Details page
        Then I should click on Add New button
        And Verify the tilte of Add New Contact page
        Then Enter title, full name and valid Email
        And Enter Phone and Cell Number
        Then Select User Role from Dropdown List
        And Click on save button
        Then Verify the account details added in table
        And Click on Edit Icon
        Then I should edit title, full name
        And I should edit Phone and Cell Number and user role
        Then I edit User Status to inactive
        Then Click on Submit button
        And Verify the Record has been updated Meassage
        And Click on Delete Icon
        Then Click on Confirm Delete button
        And Verify the record is deleted successfully

    Scenario: add more filter, Clear filter and Search new account of Account Details page
        Then I should click on Add New button
        And Verify the tilte of Add New Contact page
        Then Enter title, full name and valid Email
        And Enter Phone and Cell Number
        Then Select User Role from Dropdown List
        And Click on save button
        Then Click on More filters
        # And Click on Add Filters Group
        Then Select Field name and Field operation
        And Enter the Search value in search box
        Then Click on Apply Button
        And Verify the Results in the table
        Then Click on Clear filter
        And Enter the full name in search box
        And Verify the record in searching history











