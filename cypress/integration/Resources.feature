Feature: Resources Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then Close the terms of service window
        And Click on Resources page

    Scenario: Admin can access the ReportCenter  page and check the visiblity
        Then I should be redirected to the Resources page
        And Verify the Title of Resources Page
        And Click on Instructions tab
        Then Verify the Instructions Tab should be visible
        Then Verify the provisionDevice Tab should be visible
        And Verify the deprovisionDevice tab should be visible
        And Click on HowToVideos tab
        And Verify the HowToVideos tab should be visible
        # Then Verify the Videos Section should be visible
        And Click on WarrantyInfo tab
        Then Verify the WarrantyInfo tab should be visible
        And Verify the Title of WarrantyInfo Page



