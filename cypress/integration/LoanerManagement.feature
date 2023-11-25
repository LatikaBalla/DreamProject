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

    Scenario: Visiblity and add, remove loaner pool of LoanerManagement page
        And Table for LoanerManagement should be visible
        Then Search the serial no in search box of Available Devices section
        And Verify the search result
        Then Click on the Add to loaner pool
        Then Search the serial no in the Available section
        And Click on th add Student button
        Then Enter Fullname, title and email
        And Select status, building and student_id
        Then Click on the submit button of form
        And Verify the student added successfully
        Then Click on check out button
        And Select the student name
        Then Click on the submit button
        And Search the serial no in the check out section
        Then Click on the Check in button
        And Enter note and click on submit button
        Then Verify the device is added in Available section
        And Click on remove from loaner pool button 


