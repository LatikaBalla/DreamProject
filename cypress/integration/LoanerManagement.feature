Feature: LoanerManagement Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then close the terms of service window
        Then Click on Manage Devices
        And Click on LoanerManagement Tab

     Scenario: Visiblity and add student, LoanerManagement Available page
        And Verify the Title of LoanerManagement page
        And Click on th add Student button
        Then Enter Fullname, title and email
        And Select status, building and student_id
        Then Click on the submit button of form
        And Verify the student added successfully
        And Click on help icon for Filtering Guide
        Then Verify the Dream Data Filtering Guide

        And Click on filter of Product Description contain and Verify the Result for Available
        And Click on filter of Product Description Does not contain and Verify the Result for Available
        And Click on filter of Product Description Equals and Verify the Result for Available
        And Click on filter of Product Description Does not equal and Verify the Result for Available
        And Click on filter of Product Description Begins with and Verify the Result for Available
        And Click on filter of Product Description Ends with and Verify the Result for Available
        And Click on filter of Product Description Blank and Verify the Result for Available
        And Click on filter of Product Description Not blank and Verify the Result for Available

        And Click on filter of SKU contain and Verify the Result for Available
        And Click on filter of SKU Does not contain and Verify the Result for Available
        And Click on filter of SKU Equals and Verify the Result for Available
        And Click on filter of SKU Does not equal and Verify the Result for Available
        And Click on filter of SKU Begins with and Verify the Result for Available
        And Click on filter of SKU Ends with and Verify the Result for Available
        And Click on filter of SKU Blank and Verify the Result for Available
        And Click on filter of SKU Not blank and Verify the Result for Available

        And Click on filter of Serial contain and Verify the Result for Available
        And Click on filter of Serial Does not contain and Verify the Result for Available
        And Click on filter of Serial Equals and Verify the Result for Available
        And Click on filter of Serial Does not equal and Verify the Result for Available
        And Click on filter of Serial Begins with and Verify the Result for Available
        And Click on filter of Serial Ends with and Verify the Result for Available
        And Click on filter of Serial Blank and Verify the Result for Available
        And Click on filter of Serial Not blank and Verify the Result for Available

        And Click on filter of Asset Tag contain and Verify the Result for Available
        And Click on filter of Asset Tag Does not contain and Verify the Result for Available
        And Click on filter of Asset Tag Equals and Verify the Result for Available
        And Click on filter of Asset Tag Does not equal and Verify the Result for Available
        And Click on filter of Asset Tag Begins with and Verify the Result for Available
        And Click on filter of Asset Tag Ends with and Verify the Result for Available
        And Click on filter of Asset Tag Blank and Verify the Result for Available
        And Click on filter of Asset Tag Not blank and Verify the Result for Available
        And Click on filter of Asset Tag contain and Verify the Result for Available

        And Click on Sort Ascending and Descending for Product Description and Verify the Result
        And Click on Sort Ascending and Descending for SKU and Verify the Result
        And Click on Sort Ascending and Descending for Serial Number and Verify the Result
        And Click on Sort Ascending and Descending for Asset Tag and Verify the Result

        Then Click on DeviceIcon and Click on View History button
        Then Verify the Device History
        Then Click on DeviceIcon and Click on Check out button
        And Select the student name and Date
        Then Enter Check-out Description and click on submit button
        And Click on the Check-Out tab
        Then Click on DeviceIcon and Click on Check In button
        Then Enter Note and Check-in Description
        And Verify the Serial no in the Available section

     Scenario: Visiblity and LoanerManagement Checkout page
        And Click on the Check-Out tab
        And Click on filter of Product Description contain and Verify the Result for Checked Out
        And Click on filter of Product Description Does not contain and Verify the Result for Checked Out
        And Click on filter of Product Description Equals and Verify the Result for Checked Out
        And Click on filter of Product Description Does not equal and Verify the Result for Checked Out
        And Click on filter of Product Description Begins with and Verify the Result for Checked Out
        And Click on filter of Product Description Ends with and Verify the Result for Checked Out
        And Click on filter of Product Description Blank and Verify the Result for Checked Out
        And Click on filter of Product Description Not blank and Verify the Result for Checked Out

        And Click on filter of SKU contain and Verify the Result for Checked Out
        And Click on filter of SKU Does not contain and Verify the Result for Checked Out
        And Click on filter of SKU Equals and Verify the Result for Checked Out
        And Click on filter of SKU Does not equal and Verify the Result for Checked Out
        And Click on filter of SKU Begins with and Verify the Result for Checked Out
        And Click on filter of SKU Ends with and Verify the Result for Checked Out
        And Click on filter of SKU Blank and Verify the Result for Checked Out
        And Click on filter of SKU Not blank and Verify the Result for Checked Out

        And Click on filter of Serial contain and Verify the Result for Checked Out
        And Click on filter of Serial Does not contain and Verify the Result for Checked Out
        And Click on filter of Serial Equals and Verify the Result for Checked Out
        And Click on filter of Serial Does not equal and Verify the Result for Checked Out
        And Click on filter of Serial Begins with and Verify the Result for Checked Out
        And Click on filter of Serial Ends with and Verify the Result for Checked Out
        And Click on filter of Serial Blank and Verify the Result for Checked Out
        And Click on filter of Serial Not blank and Verify the Result for Checked Out

        And Click on filter of Asset Tag Does not contain and Verify the Result for Checked Out
        And Click on filter of Asset Tag Equals and Verify the Result for Checked Out
        And Click on filter of Asset Tag Does not equal and Verify the Result for Checked Out
        And Click on filter of Asset Tag Begins with and Verify the Result for Checked Out
        And Click on filter of Asset Tag Ends with and Verify the Result for Checked Out
        And Click on filter of Asset Tag Blank and Verify the Result for Checked Out
        And Click on filter of Asset Tag Not blank and Verify the Result for Checked Out

        And Click on Sort Ascending and Descending for Product Description and Verify the Result
        And Click on Sort Ascending and Descending for SKU and Verify the Result
        And Click on Sort Ascending and Descending for Serial Number and Verify the Result
        And Click on Sort Ascending and Descending for Asset Tag and Verify the Result

        And Click on help icon for Filtering Guide
        Then Verify the Dream Data Filtering Guide
        Then Click on DeviceIcon and Click on View History button for checkout
        Then Verify the Device History
        And Click on LoanerManagement Tab
        And Click on the Check-Out tab
        Then Click on DeviceIcon and Click on View Details button
        Then Verify the Device Details