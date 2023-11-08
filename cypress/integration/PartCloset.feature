Feature: PartCloset Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then close the terms of service window
        Then Click on Repair360 page
        And Click on PartCloset Tab

    Scenario: Add new custome part, search , delete and add new vt part
        And Verify the Title of PartCloset Page
        Then Filters of PartCloset should be visible
        And Table for PartCloset should be visible
        And I should click on Add New VT part
        Then Select device and part name
        And Enter quantity and select building
        Then Click on submit button
        And Verify new VT part is added
        Then I should click on Add New custome part
        Then Enter part name, manufacture and parent device
        And Enter part sku and quantity
        Then Click on submit button
        And Verify new custome part is added
        And Enter the Search value in search box
        Then Verify the Results in the table
        And Click on delete button
        Then Verify the recode is deleted



