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

    Scenario: Active Visibility,add Device,add more filter, view ,Clear filter and Search
        And Verify the Title of MyFleet Page
        Then Filters of MyFleet should be visible
        And Table for MyFleet should be visible
        Then Click on the add device
        And Enter Serial no and select device id
        Then Enter Asset Tag and Select student id
        And Select lonar status and Device status
        Then Click on the Submit Button
        And Verify the device added successfully
        Then Click on Edit button
        And Update Asset tag, student info and building information and Click on update button
        Then Verfiy Record updated successfully
        # And Click More filter select- Serial Number in search box and Verify the Result
        # Then Click on Clear filter
        # And Click More filter select- Asset tag in search box and Verify the Result
        # Then Click on Clear filter
        # And Click More filter select- Device in search box and Verify the Result
        # Then Click on Clear filter
        # And Click More filter select- Student in search box and Verify the Result
        # Then Click on Clear filter
        Then Click on Export To CSV
        And Enter the table fields in search box
        And Verify the record in searching history
        Then Click on view Button
        And Verify the Warranty Description

    Scenario: Retired Visibility,add Device,add more filter, view ,Clear filter and Search
        Then Click on Retired Tab
        And Verify the Title of MyFleet Page
        Then Filters of MyFleet should be visible
        And Table for MyFleet should be visible
        Then Click on the add device
        And Enter Serial no and select device id
        Then Enter Asset Tag and Select student id
        And Select lonar status and Device status
        Then Click on the Submit Button
        And Verify the device added successfully
        Then Click on Edit button
        And Update Asset tag, student info and building information and Click on update button
        Then Verfiy Record updated successfully
        # And Click More filter select- Serial Number in search box and Verify the Result
        # Then Click on Clear filter
        # And Click More filter select- Asset tag in search box and Verify the Result
        # Then Click on Clear filter
        # And Click More filter select- Device in search box and Verify the Result
        # Then Click on Clear filter
        # And Click More filter select- Student in search box and Verify the Result
        # Then Click on Clear filter
        Then Click on Export To CSV
        And Enter the table fields in search box
        And Verify the record in searching history
        Then Click on view Button
        And Verify the Warranty Description

