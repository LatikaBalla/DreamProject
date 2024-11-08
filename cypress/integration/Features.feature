Feature: features Page Functionality
    As a user
    I want to access the MyProfile page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then Close the terms of service window
        And Click on features page

    Scenario: Features Page visiblity
        Then I should be redirected to the Features page
        And Verify the Title of Features Page
        Then Verify the Under Consideration Tab should be visible
        And Verify the Scheduled tab should be visible
        Then Verify the Launched tab should be visible
        And Verify the Under Construction tab should be visible
        # Then Verify the Roadmap tab should be visible
        And Search for feature title for Under Construction
        Then Verify the serach history for Under Construction
        Then Click on Under Consideration tab
        And Search for feature title for Under Consideration
        Then Verify the serach history for Under Consideration
        Then Click on Scheduled tab
        And Search for feature title for Scheduled
        Then Verify the serach history for Scheduled
        Then Click on Launched tab
        And Search for feature title for Launched
        Then Verify the serach history for Launched








