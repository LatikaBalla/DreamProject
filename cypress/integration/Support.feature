Feature: Support Page Functionality
    As a user
    I want to access the MyProfile page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then Close the terms of service window
        And Click on Support page

    Scenario: Support Page visiblity
        Then Verify the Title of Support Page
        # And Enter Full name 
        # Then Select task Priority and Topic 
        # And Upload the image and enter Notes  
        # Then Click on submit button
        # And Verify the Send Feedback successfully




