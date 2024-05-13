Feature:Vivacity admin Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then Close the terms of service window

# #     Scenario: Vivacity Admin can access page and check the visiblity 
# #         And Click on Vivacity Admin page
# #         Then I should be redirected to the Users page
# #         Then All Paid Subscription Requests unit should be visible
# #         And Roadmap Requests unit should be visible
# #         Then Admin Users unit should be visible
# #         And Employee management unit should be visible
# #         And Warranties unit should be visible
# #         Then Import Serial Device unit should be visible
# #         And Account Management unit should be visible
# #         Then New User Creation Requests unit should be visible
# #         And All Users unit should be visible
# #         Then Repair Ticket Creation unit should be visible
# #         And Import serial device Request should be visible
# #          Then Spoof Dream User should be visible
# #         And Import Parts Closet should be visible

# #     Scenario: All Paid Subscription and  Roadmap feature request and admin
# #         And Click on Vivacity Admin page
# #         Then Click on All Paid Subscription Requests unit
# #         And Table should be visible
# #         Then If any subscription request is there then approve or deny the request
# #         And Verify the Request
# #         Then Click on All Paid Subscription Requests unit


# #         And Click on features page
# #         Then Click on Submit a feature request button
# #         And Enter Title and Description
# #         Then Click on Feature submit button
# #         Then Verify Submitting Features request Message
# #         And Click on Vivacity Admin page
# #         Then Click on Roadmap Requests unit
# #         And Click on view button
# #         Then Click on the Close button
# #         And Click on approve button
# #         And Click on features page again
# #         Then Verify the feature added in Underconsideration

# #        And Click on Vivacity Admin page
# #         Then Click on Admin Users unit
# #         Then I should click on Add New Admin
# #         Then Enter full name, title and Email of Admin
# #         And Enter Phone,Cell Number and select UserRole of Admin
# #         And Click on submit button of Admin
# #         # Then Verify the student added in table of Admin
# #         And Enter the Search value in search box of Admin
# #         Then Verify the Results in the table of Admin
# #         And Click on Edit button of Admin
# #         Then I should edit title, full name of Admin
# #         And I should edit Phone and Cell Number and user role of Admin
# #         Then Click on Submit button of Admin
# #         And Verify the Record has been updated Meassage of Admin
# #         And Click on Delete button of Admin
# #         Then Click on Confirm Delete button of Admin
# #         And Verify the record is deleted successfully of Admin
# #         Then Click on Admin Users unit

# #   Scenario: Employee
# #         And Click on Vivacity Admin page
# #         Then Click on Employee management unit
# #         Then I should click on Create new Employee
# #         Then Enter full name, title and Email for Employee
# #         And Enter Phone and select userStatus for Employee
# #         And Click on submit button for Employee
# #         Then Verify the Employee added in table
# #         And Enter the Search value in search box for employee
# #         Then Verify the Results in the table for employee
# #         And Click on Edit button new Employee
# #         Then I should edit fullname and title for Employee
# #         And I should edit Phone and user status for Employee
# #         Then Click on edit Submit button for Employee
# #         And Verify the Record has been updated Meassage
# #         Then Click on the Export Button for Employee
# #         Then Enter the Search - Email in search box and Verify the Result 
# #         Then Click on Employee management unit

        


#     Scenario:  warranty, Search, Edit, Search, Delete
#         And Click on Vivacity Admin page
#         Then Click on warranty unit
#         And I should click on Add warranty
#         Then Enter name and SKU
#         And Select Type and Damge protection
#         Then Enter Device Price year month and Bettery Year and month
#         And Select provider and write description
#         Then Click on submit button of warranty
#         And Verify the warranty added in table
#         Then Enter the value in search warranty
#         And Verify search result warranty
#         And Click On Edit icon
#         Then I should edit name and SKU
#         And I should edit Type and Damge protection
#         Then I should edit Device Price year month and Bettery Year and month
#         And I should edit provider and write description
#         Then Click on update button
#         And Verify the warranty updated Meassage
#         And Click on Delete Icon
#         Then Click on Confirm Delete Icon
#         And Verify the record is deleted successfully for warranty
#         Then Click on warranty unit

    Scenario: Add new account, Search, Edit and search Delete the User and download
        And Click on Vivacity Admin page
        Then Click on Account Management unit
        And I should click on Add Account
        Then Enter Account name, Phone, Email, Domain and credit Limit
        And Select In house Repaire and Payment terms
        And Select account site and account manager
        Then Click on submit button Account
        And Verify the Account added in table
        Then Click on update subscription
        And Select subscription Type
        Then Click on update button for subcription
        And Verify Updated subcription successfully
        Then Click on Account Management unit

    # And Click on Vivacity Admin page
    # Then Click on Request Users unit
    # Then Click on Add Account of request user
    # And Select available account
    # Then Click on add account button for request user
    # And Verify add account successfully
    # Then Click on Request Users unit


    Scenario: Vivacity Admin with all Users  and redirect to Repair Ticket Creation
   
        And Click on Vivacity Admin page
        Then Click on all Users unit
        And I should click on Add New user for allUser
        Then Enter full name, title and Email for allUser
        And Enter Phone,Cell Number and select UserRole for allUser
        And Click on submit button for allUser
        Then Verify the student added in table for allUser
        And Enter the Search value in search box for alluser
        Then Verify the Results in the table for allUser
        And Click on Edit button for allUser
        Then I should edit title, full name for allUser
        And I should edit Phone and Cell Number and user role for allUser
        Then Click on Submit update button for allUser
        And Verify the Record has been updated Meassage for allUser
        And Click on Delete button for allUser
        And Verify the record is deleted successfully for allUser
        Then Click on all Users unit

   And Click on Vivacity Admin page
        Then Click on Repair Ticket Creation unit
        And Enter the Search - Ticket Number in search box and Verify the Result
        And Click More filter select- Ticket Number in search box and Verify the Result
        And Click on Repair 360 page button
        Then Verify the Repair Ticket page redirected
