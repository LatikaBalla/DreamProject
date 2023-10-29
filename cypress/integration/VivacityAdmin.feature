Feature:Vivacity admin Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then Close the terms of service window

    Scenario: Vivacity Admin can access page and check the visiblity
        And Click on Vivacity Admin page
        Then I should be redirected to the Users page
        Then All Paid Subscription Requests unit should be visible
        And Roadmap Requests unit should be visible
        Then Admin Users unit should be visible
        And Warranties unit should be visible
        Then Import Serial Device unit should be visible
        And Account Management unit should be visible
        Then New User Creation Requests unit should be visible
        And All Users unit should be visible
        Then Repair Ticket Creation unit should be visible

    Scenario: Add new Srudent and warranty, Search, Edit, Search, Delete
        # Then Click on All Paid Subscription Requests unit
        # And Table should be visible
        # Then If any subscription request is there then approve or deny the request
        # And Verify the Request

        And Click on Vivacity Admin page
        Then Click on Admin Users unit
        Then I should click on Add New student
        Then Enter full name, title and Email
        And Enter Phone,Cell Number and select UserRole
        And Click on submit button
        Then Verify the student added in table
        # And Enter the Search value in search box
        # Then Verify the Results in the table
        And Click on Edit button
        Then I should edit title, full name
        And I should edit Phone and Cell Number and user role
        Then Click on Submit button
        And Verify the Record has been updated Meassage
        And Click on Delete button
        Then Click on Confirm Delete button
        And Verify the record is deleted successfully
        Then Click on Admin Users unit

        Then Click on warranty unit
        And I should click on Add warranty
        Then Enter name and SKU
        And Select Type and Damge protection
        Then Enter Device Price year month and Bettery Year and month
        And Select provider and write description
        Then Click on submit button
        And Verify the warranty added in table
        And Click On Edit icon
        Then I should edit name and SKU
        And I should edit Type and Damge protection
        Then I should edit Device Price year month and Bettery Year and month
        And I should edit provider and write description
        Then Click on update button
        And Verify the warranty updated Meassage
        And Click on Delete Icon
        Then Click on Confirm Delete Icon
        # And Verify the record is deleted successfully for warranty
        Then Click on warranty unit

    Scenario: Add new account, Search, Edit and search Delete the User and download
        And Click on Vivacity Admin page
        Then Click on Account Management unit
        And I should click on Add Account
        Then Enter Account name, Phone, Email, Domain and credit Limit
        And Select In house Repaire and Payment terms
        Then Click on submit button Account
        And Verify the Account added in table
        Then Click on update subscription
        And Select subscription Type
        Then Click on update button for subcription
        And Verify Updated subcription successfully
        Then Click on Account Management unit

        Then Click on Request Users unit
        Then Click on Add Account of request user
        And Select available account
        Then Click on add account button for request user
        And Verify add account successfully
        Then Click on Request Users unit


    Scenario: Vivacity Admin with Roadmap feature request and redirect to Repair Ticket Creation
        And Click on Vivacity Admin page
        Then Click on all Users unit
        Then I should click on Add New student for allUser
        Then Enter full name, title and Email
        And Enter Email for allUser
        And Enter Phone,Cell Number and select UserRole
        And Click on submit button
        Then Verify the student added in table for allUser
        # And Enter the Search value in search box for alluser
        # Then Verify the Results in the table for allUser
        And Click on Edit button for allUser
        Then I should edit title, full name
        And I should edit Phone and Cell Number and user role
        Then Click on Submit button
        And Verify the Record has been updated Meassage
        And Click on Delete button for allUser
        Then Click on Confirm Delete button
        And Verify the record is deleted successfully for allUser
        Then Click on all Users unit
        And Click on features page
        Then Click on Submit a feature request button
        And Enter Title and Description
        Then Click on Feature submit button
        Then Verify Submitting Features request Message
        And Click on Vivacity Admin page
        Then Click on Roadmap Requests unit
        And Click on view button
        Then Click on the Close button
        And Click on approve button
        And Click on features page again
        Then Verify the feature added in Underconsideration
        And Click on Vivacity Admin page
        Then Click on Repair Ticket Creation unit
        And Click on Repair 360 page button
        Then Verify the Repair Ticket page redirected















