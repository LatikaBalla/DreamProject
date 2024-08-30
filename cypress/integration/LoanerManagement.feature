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

    Scenario: Visiblity and add, remove loaner pool of LoanerManagement page
        # And Table for LoanerManagement should be visible
        # Then Search the serial no  of Available Devices section
        # And Verify the search result
        # Then Click on the Add to loaner pool
        # Then Search the serial no in the Available section
        # And Click on th add Student button
        # Then Enter Fullname, title and email
        # And Select status, building and student_id
        # Then Click on the submit button of form
        # And Verify the student added successfully
        # Then Click on check out button
        # And Select the student name
        # Then Click on the submit button
        # And Search the serial no in the check out section
        # Then Click on the Check in button
        # And Enter note and click on submit button
        # Then Verify the device is added in Available section
        # And Click on remove from loaner pool button

        And Click on filter of Asset Tag contain and Verify the Result
        And Click on filter of Asset Tag Does not contain and Verify the Result
        And Click on filter of Asset Tag Equals and Verify the Result
        And Click on filter of Asset Tag Does not equal and Verify the Result
        And Click on filter of Asset Tag Begins with and Verify the Result
        And Click on filter of Asset Tag Ends with  and Verify the Result
        And Click on filter of Asset Tag Blank and Verify the Result
        And Click on filter of Asset Tag Not blank and Verify the Result

        And Click on filter of Serial contain and Verify the Result
        And Click on filter of Serial Does not contain and Verify the Result
        And Click on filter of Serial Equals and Verify the Result
        And Click on filter of Serial Does not equal and Verify the Result
        And Click on filter of Serial Begins with and Verify the Result
        And Click on filter of Serial Ends with and Verify the Result
        And Click on filter of Serial Blank and Verify the Result
        And Click on filter of Serial Not blank and Verify the Result

        And Click on filter of Student Info contain and Verify the Result
        And Click on filter of Student Info Does not contain and Verify the Result
        And Click on filter of Student Info Equals and Verify the Result
        And Click on filter of Student Info Does not equal and Verify the Result
        And Click on filter of Student Info Begins with and Verify the Result
        And Click on filter of Student Info Ends with and Verify the Result
        And Click on filter of Student Info Blank and Verify the Result
        And Click on filter of Student Info Not blank and Verify the Result

        And Click on filter of Device contain and Verify the Result
        And Click on filter of Device Does not contain and Verify the Result
        And Click on filter of Device Equals and Verify the Result
        And Click on filter of Device Does not equal and Verify the Result
        And Click on filter of Device Begins with and Verify the Result
        And Click on filter of Device Ends with and Verify the Result
        And Click on filter of Device Blank and Verify the Result
        And Click on filter of Device Not blank and Verify the Result

        And Click on filter of Warranty contain and Verify the Result
        And Click on filter of Warranty Does not contain and Verify the Result
        And Click on filter of Warranty Equals and Verify the Result
        And Click on filter of Warranty Does not equal and Verify the Result
        And Click on filter of Warranty Begins with and Verify the Result
        And Click on filter of Warranty Ends with and Verify the Result
        And Click on filter of Warranty Blank and Verify the Result
        And Click on filter of Warranty Not blank and Verify the Result

        # available
        # And Click on filter of Product Description contain and Verify the Result for Available
        # And Click on filter of Product Description Does not contain and Verify the Result for Available
        # And Click on filter of Product Description Equals and Verify the Result for Available
        # And Click on filter of Product Description Does not equal and Verify the Result for Available
        # And Click on filter of Product Description Begins with and Verify the Result for Available
        # And Click on filter of Product Description Ends with and Verify the Result for Available
        # And Click on filter of Product Description Blank and Verify the Result for Available
        # And Click on filter of Product Description Not blank and Verify the Result for Available

        # And Click on filter of SKU contain and Verify the Result for Available
        # And Click on filter of SKU Does not contain and Verify the Result for Available
        # And Click on filter of SKU Equals and Verify the Result for Available
        # And Click on filter of SKU Does not equal and Verify the Result for Available
        # And Click on filter of SKU Begins with and Verify the Result for Available
        # And Click on filter of SKU Ends with and Verify the Result for Available
        # And Click on filter of SKU Blank and Verify the Result for Available
        # And Click on filter of SKU Not blank and Verify the Result for Available

        # And Click on filter of Warranty contain and Verify the Result for Available
        # And Click on filter of Warranty Does not contain and Verify the Result for Available
        # And Click on filter of Warranty Equals and Verify the Result for Available
        # And Click on filter of Warranty Does not equal and Verify the Result for Available
        # And Click on filter of Warranty Begins with and Verify the Result for Available
        # And Click on filter of Warranty Ends with and Verify the Result for Available
        # And Click on filter of Warranty Blank and Verify the Result for Available
        # And Click on filter of Warranty Not blank and Verify the Result for Available

        # And Click on filter of Serial contain and Verify the Result for Available
        # And Click on filter of Serial Does not contain and Verify the Result for Available
        # And Click on filter of Serial Equals and Verify the Result for Available
        # And Click on filter of Serial Does not equal and Verify the Result for Available
        # And Click on filter of Serial Begins with and Verify the Result for Available
        # And Click on filter of Serial Ends with and Verify the Result for Available
        # And Click on filter of Serial Blank and Verify the Result for Available
        # And Click on filter of Serial Not blank and Verify the Result for Available

        # And Click on filter of Asset Tag contain and Verify the Result for Available
        # And Click on filter of Asset Tag Does not contain and Verify the Result for Available
        # And Click on filter of Asset Tag Equals and Verify the Result for Available
        # And Click on filter of Asset Tag Does not equal and Verify the Result for Available
        # And Click on filter of Asset Tag Begins with and Verify the Result for Available
        # And Click on filter of Asset Tag Ends with and Verify the Result for Available
        # And Click on filter of Asset Tag Blank and Verify the Result for Available
        # And Click on filter of Asset Tag Not blank and Verify the Result for Available
        # And Click on filter of Asset Tag contain and Verify the Result for Available

        # And Click on filter of Product Description contain and Verify the Result for Checked Out
        # And Click on filter of Product Description Does not contain and Verify the Result for Checked Out
        # And Click on filter of Product Description Equals and Verify the Result for Checked Out
        # And Click on filter of Product Description Does not equal and Verify the Result for Checked Out
        # And Click on filter of Product Description Begins with and Verify the Result for Checked Out
        # And Click on filter of Product Description Ends with and Verify the Result for Checked Out
        # And Click on filter of Product Description Blank and Verify the Result for Checked Out
        # And Click on filter of Product Description Not blank and Verify the Result for Checked Out

        # And Click on filter of SKU contain and Verify the Result for Checked Out 
        # And Click on filter of SKU Does not contain and Verify the Result for Checked Out
        # And Click on filter of SKU Equals and Verify the Result for Checked Out
        # And Click on filter of SKU Does not equal and Verify the Result for Checked Out
        # And Click on filter of SKU Begins with and Verify the Result for Checked Out
        # And Click on filter of SKU Ends with and Verify the Result for Checked Out
        # And Click on filter of SKU Blank and Verify the Result for Checked Out
        # And Click on filter of SKU Not blank and Verify the Result for Checked Out

        # And Click on filter of Warranty contain and Verify the Result for Checked Out
        # And Click on filter of Warranty Does not contain and Verify the Result for Checked Out
        # And Click on filter of Warranty Equals and Verify the Result for Checked Out
        # And Click on filter of Warranty Does not equal and Verify the Result for Checked Out
        # And Click on filter of Warranty Begins with and Verify the Result for Checked Out
        # And Click on filter of Warranty Ends with and Verify the Result for Checked Out
        # And Click on filter of Warranty Blank and Verify the Result for Checked Out
        # And Click on filter of Warranty Not blank and Verify the Result for Checked Out

        # And Click on filter of Serial contain and Verify the Result for Checked Out
        # And Click on filter of Serial Does not contain and Verify the Result for Checked Out
        # And Click on filter of Serial Equals and Verify the Result for Checked Out
        # And Click on filter of Serial Does not equal and Verify the Result for Checked Out
        # And Click on filter of Serial Begins with and Verify the Result for Checked Out
        # And Click on filter of Serial Ends with and Verify the Result for Checked Out
        # And Click on filter of Serial Blank and Verify the Result for Checked Out
        # And Click on filter of Serial Not blank and Verify the Result for Checked Out

        # And Click on filter of Asset Tag Does not contain and Verify the Result for Checked Out
        # And Click on filter of Asset Tag Equals and Verify the Result for Checked Out
        # And Click on filter of Asset Tag Does not equal and Verify the Result for Checked Out
        # And Click on filter of Asset Tag Begins with and Verify the Result for Checked Out
        # And Click on filter of Asset Tag Ends with and Verify the Result for Checked Out
        # And Click on filter of Asset Tag Blank and Verify the Result for Checked Out
        # And Click on filter of Asset Tag Not blank and Verify the Result for Checked Out

