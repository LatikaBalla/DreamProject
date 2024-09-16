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
        And Click on filter of Full name contain in search box and Verify the Result
        And Click on filter of Full name Does not contain in search box and Verify the Result
        And Click on filter of Full name Equals in search box and Verify the Result
        And Click on filter of Full name Does not equal in search box and Verify the Result
        And Click on filter of Full name Begins with in search box and Verify the Result
        And Click on filter of Full name Ends with in search box and Verify the Result
        And Click on filter of Full name Blank in search box and Verify the Result
        And Click on filter of Full name Not blank in search box and Verify the Result

        And Click on filter of Title contain in search box and Verify the Result
        And Click on filter of Title Does not contain in search box and Verify the Result
        And Click on filter of Title Equals in search box and Verify the Result
        And Click on filter of Title Does not equal in search box and Verify the Result
        And Click on filter of Title Begins with in search box and Verify the Result
        And Click on filter of Title Ends with in search box and Verify the Result
        And Click on filter of Title Blank in search box and Verify the Result
        And Click on filter of Title Not blank in search box and Verify the Result

        And Click on filter of Eamil contain in search box and Verify the Result
        And Click on filter of Eamil Does not contain in search box and Verify the Result
        And Click on filter of Eamil Equals in search box and Verify the Result
        And Click on filter of Eamil Does not equal in search box and Verify the Result
        And Click on filter of Eamil Begins with in search box and Verify the Result
        And Click on filter of Eamil Ends with in search box and Verify the Result
        And Click on filter of Eamil Blank in search box and Verify the Result
        And Click on filter of Eamil Not blank in search box and Verify the Result

        And Click on filter of User status contain in search box and Verify the Result
        And Click on filter of User status Does not contain in search box and Verify the Result
        And Click on filter of User status Equals in search box and Verify the Result
        And Click on filter of User status Does not equal in search box and Verify the Result
        And Click on filter of User status Begins with in search box and Verify the Result
        And Click on filter of User status Ends with in search box and Verify the Result
        And Click on filter of User status Blank in search box and Verify the Result
        And Click on filter of User status Not blank in search box and Verify the Result

        And Click on filter of Phone No contain in search box and Verify the Result
        And Click on filter of Phone No Does not contain in search box and Verify the Result
        And Click on filter of Phone No Equals in search box and Verify the Result
        And Click on filter of Phone No Does not equal in search box and Verify the Result
        And Click on filter of Phone No Begins with in search box and Verify the Result
        And Click on filter of Phone No Ends with in search box and Verify the Result
        And Click on filter of Phone No Blank in search box and Verify the Result
        And Click on filter of Phone No Not blank in search box and Verify the Result

        And Click on filter of User Role contain in search box and Verify the Result
        And Click on filter of User Role Does not contain in search box and Verify the Result
        And Click on filter of User Role Equals in search box and Verify the Result
        And Click on filter of User Role Does not equal in search box and Verify the Result
        And Click on filter of User Role Begins with in search box and Verify the Result
        And Click on filter of User Role Ends with in search box and Verify the Result
        And Click on filter of User Role Blank in search box and Verify the Result
        And Click on filter of User Role Not blank in search box and Verify the Result
        And Click on Download Export button




