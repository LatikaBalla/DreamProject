Feature:SrcStudents Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then close the terms of service window
        Then Click on Repair360 page
        And Click on StudentRepairCenter tab
        Then Click on SrcStudents tab

    Scenario: Add new Srudent, search and view
        And Verify the Title of SrcStudents Page
        Then I should click on Add New student
        Then Enter title, full name and Email
        And Enter Phone and Cell Number
        Then Select User Status
        And Click on submit button
        Then Verify the student added in table
        And Click on filter of Full name contain and Verify the Result
        And Click on filter of Full name Does not contain and Verify the Result
        And Click on filter of Full name Equals and Verify the Result
        And Click on filter of Full name Does not equal and Verify the Result
        And Click on filter of Full name Begins with and Verify the Result
        And Click on filter of Full name Ends with and Verify the Result
        And Click on filter of Full name Blank and Verify the Result
        And Click on filter of Full name Not blank and Verify the Result

        And Click on filter of Title contain and Verify the Result
        And Click on filter of Title Does not contain and Verify the Result
        And Click on filter of Title Equals and Verify the Result
        And Click on filter of Title Does not equal and Verify the Result
        And Click on filter of Title Begins with and Verify the Result
        And Click on filter of Title Ends with and Verify the Result
        And Click on filter of Title Blank and Verify the Result
        And Click on filter of Title Not blank and Verify the Result

        And Click on filter of Eamil contain and Verify the Result
        And Click on filter of Eamil Does not contain and Verify the Result
        And Click on filter of Eamil Equals and Verify the Result
        And Click on filter of Eamil Does not equal and Verify the Result
        And Click on filter of Eamil Begins with and Verify the Result
        And Click on filter of Eamil Ends with and Verify the Result
        And Click on filter of Eamil Blank and Verify the Result
        And Click on filter of Eamil Not blank and Verify the Result

        And Click on filter of User status contain and Verify the Result
        And Click on filter of User status Does not contain and Verify the Result
        And Click on filter of User status Equals and Verify the Result
        And Click on filter of User status Does not equal and Verify the Result
        And Click on filter of User status Begins with and Verify the Result
        And Click on filter of User status Ends with and Verify the Result
        And Click on filter of User status Blank and Verify the Result
        And Click on filter of User status Not blank and Verify the Result

        And Click on filter of Phone No contain and Verify the Result
        And Click on filter of Phone No Does not contain and Verify the Result
        And Click on filter of Phone No Equals and Verify the Result
        And Click on filter of Phone No Does not equal and Verify the Result
        And Click on filter of Phone No Begins with and Verify the Result
        And Click on filter of Phone No Ends with and Verify the Result
        And Click on filter of Phone No Blank and Verify the Result
        And Click on filter of Phone No Not blank and Verify the Result

        And Click on filter of User Role contain and Verify the Result
        And Click on filter of User Role Does not contain and Verify the Result
        And Click on filter of User Role Equals and Verify the Result
        And Click on filter of User Role Does not equal and Verify the Result
        And Click on filter of User Role Begins with and Verify the Result
        And Click on filter of User Role Ends with and Verify the Result
        And Click on filter of User Role Blank and Verify the Result
        And Click on filter of User Role Not blank and Verify the Result
        And Click on Download Export button

        And Click on Sort Ascending and Descending for Full Name and Verify the Result
        And Click on Sort Ascending and Descending for Title and Verify the Result
        And Click on Sort Ascending and Descending for Email and Verify the Result
        And Click on Sort Ascending and Descending for User Status and Verify the Result
        And Click on Sort Ascending and Descending for Phone and Verify the Result
        And Click on Sort Ascending and Descending for User Role and Verify the Result


