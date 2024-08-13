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

    Scenario:Add Asset, Search, Edit and Delete Asset
        And Verify the Title of OrgUploadAssets Page
        And Click on filter of Description contain in search box and Verify the Result
        And Click on filter of Description Does not contain in search box and Verify the Result
        And Click on filter of Description Equals in search box and Verify the Result
        And Click on filter of Description Does not equal in search box and Verify the Result
        And Click on filter of Description Begins with in search box and Verify the Result
        And Click on filter of Description Ends with in search box and Verify the Result
        And Click on filter of Description Blank in search box and Verify the Result
        And Click on filter of Description Not blank in search box and Verify the Result

        And Click on filter of Acquire Date Equals in search box and Verify the Result
        And Click on filter of Acquire Date Does not equal in search box and Verify the Result
        And Click on filter of Acquire Date Before in search box and Verify the Result
        And Click on filter of Acquire Date After in search box and Verify the Result
        And Click on filter of Acquire Date Between with in search box and Verify the Result
        And Click on filter of Acquire Date Blank in search box and Verify the Result
        And Click on filter of Acquire Date Not blank in search box and Verify the Result

        And Click on filter of Location contain in search box and Verify the Result
        And Click on filter of Location Does not contain in search box and Verify the Result
        And Click on filter of Location Equals in search box and Verify the Result
        And Click on filter of Location Does not equal in search box and Verify the Result
        And Click on filter of Location Begins with in search box and Verify the Result
        And Click on filter of Location Ends with in search box and Verify the Result
        And Click on filter of Location Blank in search box and Verify the Result
        And Click on filter of Location Not blank in search box and Verify the Result

        Then I should click on Add Asset
        Then Enter title, full name location and tag
        And Enter note, Type and description
        Then Upload the image file
        And Click on save button
        Then Verify the asset details added in table
        And Click on Edit button
        Then I should edit title, full name location and tag
        And I should edit note, Type and description
        Then ReUpload the image file
        Then Click on save button
        And Verify the Record has been updated Meassage
        # And Click on Delete button
        # Then Click on Confirm Delete button
        # And Verify the record is deleted successfully








