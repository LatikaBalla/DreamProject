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
        And Click on filter of Date Imported Equals in search box and Verify the Result
        And Click on filter of Date Imported Does not equal in search box and Verify the Result
        And Click on filter of Date Imported Before in search box and Verify the Result
        And Click on filter of Date Imported After in search box and Verify the Result
        And Click on filter of Date Imported Between with in search box and Verify the Result
        And Click on filter of Date Imported Blank in search box and Verify the Result
        And Click on filter of Date Imported Not blank in search box and Verify the Result

        And Click on filter of Importer contain in search box and Verify the Result
        And Click on filter of Importer Does not contain in search box and Verify the Result
        And Click on filter of Importer Equals in search box and Verify the Result
        And Click on filter of Importer Does not equal in search box and Verify the Result
        And Click on filter of Importer Begins with in search box and Verify the Result
        And Click on filter of Importer Ends with in search box and Verify the Result
        And Click on filter of Importer Blank in search box and Verify the Result
        And Click on filter of Importer Not blank in search box and Verify the Result

        And Click on filter of Quantity Devices Equals in search box and Verify the Result
        And Click on filter of Quantity Devices Does not equal in search box and Verify the Result
        And Click on filter of Quantity Devices Greater than in search box and Verify the Result
        And Click on filter of Quantity Devices Greater than or equal to in search box and Verify the Result
        And Click on filter of Quantity Devices Less than in search box and Verify the Result
        And Click on filter of Quantity Devices Less than or equal to in search box and Verify the Result
        And Click on filter of Quantity Devices Between in search box and Verify the Result
        And Click on filter of Quantity Devices Blank in search box and Verify the Result
        And Click on filter of Quantity Devices Not blank in search box and Verify the Result

        Then I should click on Add New Import
        Then Upload the CSV import file
        And Click on submit button
        And Click on Details button
        Then Verify the Device Details