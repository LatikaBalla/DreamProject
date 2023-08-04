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

    Scenario: Visiblity of ImportSerialDevices page
        And Verify the Title of ImportSerialDevices Page
        Then Filters of ImportSerialDevices should be visible
        And Table for ImportSerialDevices should be visible