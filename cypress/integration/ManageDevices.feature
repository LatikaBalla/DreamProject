Feature: ManageDevices Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then Close the terms of service window
        And Click on ManageDevices page

    Scenario: Admin can access the ManageDevices  page and check the visiblity
        Then I should be redirected to theManageDevices page
        And Verify the Title of ManageDevices Page
        Then Verify the My Fleet Tab should be visible
        And Verify the Loaner Management tab should be visible
        Then Verify the Import Serial Devices tab should be visible
         And Verify the Organization Uploaded Assets tab should be visible



