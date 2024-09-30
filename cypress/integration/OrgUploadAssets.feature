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
        Then I should click on Add Asset
        Then Enter location, tag, notes, category, serialno and model
        And Enter assignment, po, invoice, vendor and description
        Then Enter cost and quantity
        Then Upload the image file
         And Enter fieldValue1 and fieldValue2
        And Click on save button
        Then Verify the asset details added in table
        And Click on filter of Description contain and Verify the Result
        And Click on filter of Description Does not contain and Verify the Result
        And Click on filter of Description Equals and Verify the Result
        And Click on filter of Description Does not equal and Verify the Result
        And Click on filter of Description Begins with and Verify the Result
        And Click on filter of Description Ends with and Verify the Result
        And Click on filter of Description Blank and Verify the Result
        And Click on filter of Description Not blank and Verify the Result

        And Click on filter of Acquire Date Equals and Verify the Result
        And Click on filter of Acquire Date Does not equal and Verify the Result
        And Click on filter of Acquire Date Before and Verify the Result
        And Click on filter of Acquire Date After and Verify the Result
        And Click on filter of Acquire Date Between with and Verify the Result
        And Click on filter of Acquire Date Blank and Verify the Result
        And Click on filter of Acquire Date Not blank and Verify the Result

        And Click on filter of Location contain and Verify the Result
        And Click on filter of Location Does not contain and Verify the Result
        And Click on filter of Location Equals and Verify the Result
        And Click on filter of Location Does not equal and Verify the Result
        And Click on filter of Location Begins with and Verify the Result
        And Click on filter of Location Ends with and Verify the Result
        And Click on filter of Location Blank and Verify the Result
        And Click on filter of Location Not blank and Verify the Result

        # And Click on Edit button
        # Then I should edit location, tag, notes, category, serialno and model
        # And I should edit assignment, po, invoice, vendor and description
        # Then I should edit cost and quantity
        # Then ReUpload the image file
        # And I should edit fieldValue1 and fieldValue2
        # Then Click on save button
        # And Verify the Record has been updated Meassage
        # And Click on Delete button
        # Then Click on Confirm Delete button
        # And Verify the record is deleted successfully








