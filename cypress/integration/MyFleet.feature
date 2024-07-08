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
        # And Verify the Title of MyFleet Page
         Then Filters of MyFleet should be visible
        And Table for MyFleet should be visible
        Then Click on the add device
        And Enter Serial no and select device id
        Then Enter Asset Tag and Select student id
        And Select lonar status and Device status
        Then Click on the Submit Button
        And Verify the device added successfully
        And Click More filter select- Serial Number in search box and Verify the Result
        Then Click on Clear filter
        And Click More filter select- Asset tag in search box and Verify the Result
        Then Click on Clear filter
        And Click More filter select- Device in search box and Verify the Result
        Then Click on Clear filter
        And Click More filter select- Student in search box and Verify the Result
        Then Click on Clear filter
        #    And Click More filter select- Organization unit in search box and Verify the Result
        #  Then Click on Clear filter
        Then Click on Export To CSV
        And Enter the table fields in search box
        And Verify the record in searching history
        Then Click on deviceIcon and click on view Button
        And Verify the General Device Information
        Then Click on Edit button of General info
        And Update Asset tag and Click on save button
        Then Verfiy General info Record updated successfully
        Then Click on Edit button of Assignment
        And Update student, building, loner status and Click on save button
        Then Verfiy Assignment Record updated successfully
        And Convert Active to Retired device
        Then Verify the Device Retired successfully
        Then Click on Retired Tab
        And Convert Retired to Active device
        Then Verify the Device Active successfully

    # Scenario: Google Data
    #     And Enter the table fields in search box for google data record
    #     Then Verify the record in searching history for google data
    #     And Click on the Google Icon and click on view Button
    #     Then Verify the google data and GoLocation section
    #     And Click on the edit of google data section
    #     Then Update the note
    #     And Verfiy Google data Record updated successfully
    #     Then Click on CPU Status and verify CPU Information
    #     And Click on Memory Information and verify Memory Information
    #     Then Click on Network Information and verify Network Information
    #     And Click on OS Information and verify OS Information
    #     Then Click on Battery Information and verify Battery Information
    #     And Click on Storage Information and verify Storage Information
    #     Then Click on Boot Performance Report and Boot Performance Report
    #     And Click on Recent Users Information and verify Recent Users Information


Scenario: Retired Visibility,add Device,add more filter, view ,Clear filter and Search
    Then Click on Retired Tab
    # And Verify the Title of MyFleet Page
    Then Filters of MyFleet should be visible
    And Table for MyFleet should be visible
    Then Click on the add device
    And Enter Serial no and select device id
    Then Enter Asset Tag and Select student id
    And Select lonar status and Device status
    Then Click on the Submit Button
    And Verify the device added successfully
    And Click More filter select- Serial Number in search box and Verify the Result
    Then Click on Clear filter
    And Click More filter select- Asset tag in search box and Verify the Result
    Then Click on Clear filter
    And Click More filter select- Device in search box and Verify the Result
    Then Click on Clear filter
    And Click More filter select- Student in search box and Verify the Result
    Then Click on Clear filter
    Then Click on Export To CSV
    And Enter the table fields in search box1
    And Verify the record in searching history1
     Then Click on deviceIcon and click on view Button
     And Verify the General Device Information


