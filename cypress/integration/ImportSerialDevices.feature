Feature: ImportSerialDevices Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then close the terms of service window
        Then Click on Manage Devices
        And Click on ImportSerialDevices Tab

    Scenario: Visiblity of ImportSerialDevices page and add ticket, download import and view the details
        And Verify the Title of ImportSerialDevices Page
        And Click on filter of Date Imported Equals and Verify the Result
        And Click on filter of Date Imported Does not equal and Verify the Result
        And Click on filter of Date Imported Before and Verify the Result
        And Click on filter of Date Imported After and Verify the Result
        And Click on filter of Date Imported Between with and Verify the Result
        And Click on filter of Date Imported Blank and Verify the Result
        And Click on filter of Date Imported Not blank and Verify the Result

        And Click on filter of Importer contain and Verify the Result
        And Click on filter of Importer Does not contain and Verify the Result
        And Click on filter of Importer Equals and Verify the Result
        And Click on filter of Importer Does not equal and Verify the Result
        And Click on filter of Importer Begins with and Verify the Result
        And Click on filter of Importer Ends with and Verify the Result
        And Click on filter of Importer Blank and Verify the Result
        And Click on filter of Importer Not blank and Verify the Result

        And Click on filter of Quantity Devices Equals and Verify the Result
        And Click on filter of Quantity Devices Does not equal and Verify the Result
        And Click on filter of Quantity Devices Greater than and Verify the Result
        And Click on filter of Quantity Devices Greater than or equal to and Verify the Result
        And Click on filter of Quantity Devices Less than and Verify the Result
        And Click on filter of Quantity Devices Less than or equal to and Verify the Result
        And Click on filter of Quantity Devices Between and Verify the Result
        And Click on filter of Quantity Devices Blank and Verify the Result
        And Click on filter of Quantity Devices Not blank and Verify the Result

        Then Click on the download import button
         And Click on help icon for Filtering Guide
        Then Verify the Dream Data Filtering Guide
        Then I should click on Add New Import
        Then Upload the CSV import file
        And Click on submit button
        And Click on Details button
        Then Verify the Device Details