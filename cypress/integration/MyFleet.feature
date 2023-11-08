Feature: MyFleet  Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then close the terms of service window
        Then Click on Manage Devices
        And Click on MyFleet Tab

    Scenario: Visibility ,add Device,add more filter, view ,Clear filter and Search
       And Verify the Title of MyFleet Page
        Then Filters of MyFleet should be visible
        And Table for MyFleet should be visible
        Then Click on the add device
        And Enter Serial no and select device id
        Then Enter Asset Tag and Select student id
        And Select lonar status and Device status
        Then Click on the Submit Button
        And Verify the device added successfully
        Then Click on More filters
        Then Select Field name and Field operation
        And Enter the Search value in search box
        Then Click on Apply Button
        And Verify the Results in the table
        Then Click on view Button
        And Verify the Warranty Description
        Then Click on Clear filter
        And Enter the table fields in search box
        And Verify the record in searching history
        Then Click on Export To CSV
        #  And Verify Downloaded successfully
