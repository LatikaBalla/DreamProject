Feature:  Users Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then Close the terms of service window
        And Click on Users page

    Scenario: Admin can access the  Users page and check the visiblity
        Then I should be redirected to the Users page
        Then All Organizational unit should be visible
        And All Users Unit should be visible
        Then Filters of Users unit should be visible
        And Table for Users unit should be visible



