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
        Then Slider Menu should be visible


  