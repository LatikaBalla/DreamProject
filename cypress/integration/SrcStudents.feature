Feature:SrcStudents Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then close the terms of service window
        Then Click on Repair360 page
        And Click on StudentRepairCenter tab
        Then Click on SrcStudents tab

    Scenario: Add new Srudent, search and view
        And Verify the Title of SrcStudents Page
        And Table for SrcStudents should be visible
        Then I should click on Add New student
        Then Enter title, full name and Email
        And Enter Phone and Cell Number
        Then Select User Status
        And Click on submit button
        # Then Verify the student added in table
        And Enter the student name in search box
        Then Verify the record in searching history
        And Click on view button
        Then Veriry the Details of Student



