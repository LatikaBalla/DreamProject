Feature:  HowToVideos Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then Close the terms of service window
        Then Click on Resources page
        And Click on HowToVideos tab

    Scenario: Visiblity of HowToVideos page
        Then Verify the Videos Section should be visible