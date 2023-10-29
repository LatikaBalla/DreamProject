Feature: LoanerManagement Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then close the terms of service window
        Then Click on Manage Devices
        And Click on LoanerManagement Tab

    Scenario: Visiblity of LoanerManagement page
        And Table for LoanerManagement should be visible
        Then search the serial no in search box 
        And Verirfy the search result 
        Then Click on the Add to lonar pool
        And Verify device is added in Available section 
        Then Search the serial in the Available 

        