Feature: OrgUploadAssets Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then close the terms of service window
        Then Click on Manage Devices 
        And Click on OrgUploadAssets Tab

    Scenario: Visiblity of OrgUploadAssets page
        And Verify the Title of OrgUploadAssets Page
        Then Filters of OrgUploadAssets should be visible
        And Table for OrgUploadAssets should be visible