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
        And Click on Add field button
        Then Enter fieldkey and fieldValue
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

        And Click on Sort Ascending and Descending for Description and Verify the Result
        And Click on Sort Ascending and Descending for Acquire Date and Verify the Result
        And Click on Sort Ascending and Descending for Location and Verify the Result
        And Click on Sort Ascending and Descending for Serial Number and Verify the Result
        And Click on Sort Ascending and Descending for Model and Verify the Result
        And Click on Sort Ascending and Descending for Assignment and Verify the Result
        And Click on Sort Ascending and Descending for Warranty Info and Verify the Result
        And Click on Sort Ascending and Descending for Fund Source and Verify the Result
        And Click on Sort Ascending and Descending for PO and Verify the Result
        And Click on Sort Ascending and Descending for Invoice and Verify the Result
        And Click on Sort Ascending and Descending for Vendor and Verify the Result
        And Click on Sort Ascending and Descending for Cost and Verify the Result
        And Click on Sort Ascending and Descending for Quantity and Verify the Result
        And Click on Sort Ascending and Descending for F1 and Verify the Result
        And Click on Sort Ascending and Descending for F2 and Verify the Result
        And Click on Sort Ascending and Descending for F1F1 and Verify the Result
        And Click on Sort Ascending and Descending for F2f2 and Verify the Result

        And Click on help icon for Filtering Guide
        Then Verify the Dream Data Filtering Guide
        # Then Click on Bulk Upload button
        # And Click on Attach CSV file and Click on submit button
        # Then Verify the Uploaded successfully
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








