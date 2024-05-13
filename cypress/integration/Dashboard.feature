Feature: Dashboard Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then Close the terms of service window

    Scenario: Admin can access the dashboard page and check the visiblity
        Then I should be redirected to the dashboard page
        And Verify the Title of dashborad Page
        Then Verify the logo should be visible
        Then My Account Detail tab should be visible
        And Verify the Title of Account Details Page
        Then Filters of account deatils should be visible
        And Table for account deatils should be visible
        And Building tab should be visible
        And Click on Buildings Tab
        And Verify the Title of Buildings Page
        Then Filters of Buildings should be visible
        And Table for Buildings should be visible

    Scenario: Adding,Update,add more filter, Clear filter and Search,View Details and Delete new Buildings
        Then I should be redirected to the dashboard page
        And Click on Buildings Tab
        Then I should click on + Add New button
        And I should Enter Building Name,Phone and Extension
        Then Select Default building
        And Enter Billing Address and select from dropdown
        Then Click on checkbox Same as Shipping Address
        And Click on save button
        Then Verify the builing details added in table
        And Click on My Account Details Tab
        Then I should click on Add New button
        And Verify the tilte of Add New Contact page
        Then Enter title, full name and valid Email
        And Enter Phone and Cell Number
        Then Select User Role and Building from Dropdown List
        And Click on save button
        Then Verify the account details added in table
        And Verify the record in searching history
        And Click on Edit Icon
        Then I should edit title, full name
        And I should edit Phone and Cell Number and user role
        Then I edit User Status to inactive
        Then Click on Submit button
        And Verify the Record has been updated Meassage
        And Click on Delete Icon
        Then Click on Confirm Delete button
        And Verify the record is deleted successfully
        And Click on Buildings Tab
         And Click on Edit Icon of builing
        And I should edit Building Name,Phone and Extension of builing
        Then I should edit Select Default building
        Then Click on update button of builing
        And Verify the Record has been updated Meassage of builing
        And Click on Delete Icon of building
        Then Click on Confirm Delete button of building
        And Verify the record is deleted successfully of building

