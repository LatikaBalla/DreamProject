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
        And Verify the Under Construction tab should be visible
        Then Verify the Launched tab should be visible
        And Click More filter select- Title in search box and Verify the Result
        Then Click on Clear filter
        # And Click More filter select- Creator in search box and Verify the Result
        # Then Click on Clear filter
        # And Click More filter select- Description in search box and Verify the Result
        # Then Click on Clear filter




