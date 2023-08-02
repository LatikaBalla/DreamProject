Feature: Dashboard Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then close the terms of service window

    Scenario: Admin can access the dashboard page
        Then I should be redirected to the dashboard page
        And Verify the Title of dashborad Page

    Scenario: Visiblity of dashboard page
        Then My Account Detail tab should be visible
        And Building tab should be visible
        Then Slider Menu should be visible

        

    