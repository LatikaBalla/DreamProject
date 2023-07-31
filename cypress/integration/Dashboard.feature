Feature: Dashboard Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then close the terms of service window 

    Scenario: Admin can access the dashboard page
        Then I should be redirected to the dashboard page
        And Verify the Title of dashborad Page

    Scenario: Visiblity of dashboard page
        Then My Account Detail tab should be visible
        And Building tab should be visible
        And Table for my account deatils should be visible
        Then Slider Menu should be visible

    Scenario: Adding new account in My Account Details tab
        Then I should click on Add New button
        And Verify the tilte of Add New Contact page
        Then Enter title, full name and valid Email
        And Enter Phone and Cell Number
        Then Select User Role from Dropdown List
        And Click on save button
        Then Verify the account details added in table

    Scenario: Update new account in My Account Details tab
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

    Scenario: Delete new account in My Account Details tab
        Then I should click on Add New button
        And Verify the tilte of Add New Contact page
        Then Enter title, full name and valid Email for Delete
        And Enter Phone and Cell Number
        Then Select User Role from Dropdown List
        And Click on save button
        Then Verify the account details added in table
        And Click on Delete Icon
        Then Click on Confirm Delete button
        And Verify the record is deleted successfully





