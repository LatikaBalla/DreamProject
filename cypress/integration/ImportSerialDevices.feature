Feature: ImportSerialDevices Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then close the terms of service window
        Then Click on Manage Devices
        And Click on ImportSerialDevices Tab

    Scenario: Visiblity of ImportSerialDevices page and add ticket, download import and view the details
        And Verify the Title of ImportSerialDevices Page
        Then Filters of ImportSerialDevices should be visible
        And Table for ImportSerialDevices should be visible
        And Click More filter select- Importer in search box and Verify the Result
        Then Click on Clear filter
        And Click More filter select- Quantity Devices in search box and Verify the Result
        Then Click on Clear filter
        Then I should click on Add New Import
        Then Upload the CSV import file
        And Click on submit button
        And Click on refresh button
        # Then Verify the record in table
        # And Click on Download import button
        # And Click on Details button
        # Then Verify the Device Details
      