Feature: NonWarrantyRepairs Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then Close the terms of service window
        And Click on Report center page
        And Click on NonwarrantyRepairs page

    Scenario:Non Warranty Repairs -Add new Ticket and Search
        And Click on filter of Repair Id Equals and Verify the Result
        And Click on filter of Repair Id Does not equal and Verify the Result
        And Click on filter of Repair Id Greater than and Verify the Result
        And Click on filter of Repair Id Greater than or equal to and Verify the Result
        And Click on filter of Repair Id Less than and Verify the Result
        And Click on filter of Repair Id Less than or equal to and Verify the Result
        And Click on filter of Repair Id Between and Verify the Result
        And Click on filter of Repair Id Blank and Verify the Result
        And Click on filter of Repair Id Not blank and Verify the Result

        And Click on filter of Ticket Number contain and Verify the Result
        And Click on filter of Ticket Number Does not contain and Verify the Result
        And Click on filter of Ticket Number Equals and Verify the Result
        And Click on filter of Ticket Number Does not equal and Verify the Result
        And Click on filter of Ticket Number Begins with and Verify the Result
        And Click on filter of Ticket Number Ends with and Verify the Result
        And Click on filter of Ticket Number Blank and Verify the Result
        And Click on filter of Ticket Number Not blank and Verify the Result

        And Click on filter of Repair type contain and Verify the Result
        And Click on filter of Repair type Does not contain and Verify the Result
        And Click on filter of Repair type Equals and Verify the Result
        And Click on filter of Repair type Does not equal and Verify the Result
        And Click on filter of Repair type Begins with and Verify the Result
        And Click on filter of Repair type Ends with and Verify the Result
        And Click on filter of Repair type Blank and Verify the Result
        And Click on filter of Repair type Not blank and Verify the Result

        And Click on filter of Serial Number contain and Verify the Result
        And Click on filter of Serial Number Does not contain and Verify the Result
        And Click on filter of Serial Number Equals and Verify the Result
        And Click on filter of Serial Number Does not equal and Verify the Result
        And Click on filter of Serial Number Begins with and Verify the Result
        And Click on filter of Serial Number Ends with and Verify the Result
        And Click on filter of Serial Number Blank and Verify the Result
        And Click on filter of Serial Number Not blank and Verify the Result

        And Click on filter of Repair device contain and Verify the Result
        And Click on filter of Repair device Does not contain and Verify the Result
        And Click on filter of Repair device Equals and Verify the Result
        And Click on filter of Repair device Does not equal and Verify the Result
        And Click on filter of Repair device Begins with and Verify the Result
        And Click on filter of Repair device Ends with and Verify the Result
        And Click on filter of Repair device Blank and Verify the Result
        And Click on filter of Repair device Not blank and Verify the Result

        And Click on filter of Asset tag contain and Verify the Result
        And Click on filter of Asset tag Does not contain and Verify the Result
        And Click on filter of Asset tag Equals and Verify the Result
        And Click on filter of Asset tag Does not equal and Verify the Result
        And Click on filter of Asset tag Begins with and Verify the Result
        And Click on filter of Asset tag Ends with and Verify the Result
        And Click on filter of Asset tag Blank and Verify the Result
        And Click on filter of Asset tag Not blank and Verify the Result

        And Click on filter of Repair status op1 and Verify the Result
        And Click on filter of Repair status op2 and Verify the Result
        And Click on filter of Repair status op3 and Verify the Result
        And Click on filter of Repair status op4 and Verify the Result
        And Click on filter of Repair status op5 and Verify the Result
        And Click on filter of Repair status op6 and Verify the Result
        And Click on filter of Repair status op7 and Verify the Result
        And Click on filter of Repair status op8 and Verify the Result
        And Click on filter of Repair status op9 and Verify the Result
        And Click on filter of Repair status op10 and Verify the Result
        # And Click on filter of Repair status op11 and Verify the Result

        And Click on filter of Created By contain and Verify the Result
        And Click on filter of Created By Does not contain and Verify the Result
        And Click on filter of Created By Equals and Verify the Result
        And Click on filter of Created By Does not equal and Verify the Result
        And Click on filter of Created By Begins with and Verify the Result
        And Click on filter of Created By Ends with and Verify the Result
        And Click on filter of Created By Blank and Verify the Result
        And Click on filter of Created By Not blank and Verify the Result

        And Click on the view button
        Then Verify the Repair Ticket page will open
        And Verfiy the details of Ticket
        Then Click on the download Ticket Estimation button
        Then Click on Add Repair Image and Verify
        And Click on Add Note and Verify






