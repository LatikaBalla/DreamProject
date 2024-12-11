Feature:Vivacity admin Page Functionality
  As a user
  I want to access the dashboard page
  So that I can view my account information and data

  Background: Background name
    Given I should navigate to application
    When I should Sign In into the application
    Then Close the terms of service window
    And Click on Vivacity Admin page

    Scenario: Vivacity Admin can access page and check the visiblity
      Then I should be redirected to the Users page
      Then All Paid Subscription Requests unit should be visible
      And Roadmap Requests unit should be visible
      Then Admin Users unit should be visible
      # And Employee management unit should be visible
      And Warranties unit should be visible
      Then Import Serial Device unit should be visible
      And Account Management unit should be visible
      Then New User Creation Requests unit should be visible
      And All Users unit should be visible
      And Import serial device Request should be visible
      Then Trial Paid Subscriptions should be visible
      And Import Parts Closet should be visible

#     Scenario: Employee Management
#       Then Click on Employee management unit
#       Then I should click on Create new Employee
#       Then Enter full name, title and Email for Employee
#       And Enter Phone and select userStatus for Employee
#       And Click on submit button for Employee
#       Then Verify the Employee added in table
#       And Click on Edit button new Employee
#       Then I should edit fullname and title for Employee
#       And I should edit Phone and user status for Employee
#       Then Click on edit Submit button for Employee
#       And Verify the Record has been updated Meassage
#       Then Click on the Export Button for Employee

#       And Click on filter of Full Name contain and Verify the Result
#       And Click on filter of Full Name Does not contain and Verify the Result
#       And Click on filter of Full Name Equals and Verify the Result
#       And Click on filter of Full Name Does not equal and Verify the Result
#       And Click on filter of Full Name Begins with and Verify the Result
#       And Click on filter of Full Name Ends with and Verify the Result
#       And Click on filter of Full Name Blank and Verify the Result
#       And Click on filter of Full Name Not blank and Verify the Result

#       # And Click on filter of Created Date Equals and Verify the Result
#       #   And Click on filter of Created Date Does not equal and Verify the Result
#       #   And Click on filter of Created Date Before and Verify the Result
#       #   And Click on filter of Created Date After and Verify the Result
#       #   And Click on filter of Created Date Between and Verify the Result
#       #   And Click on filter of Created Date Blank and Verify the Result
#       #   And Click on filter of Created Date Not blank and Verify the Result

#       And Click on filter of Eamil contain and Verify the Result
#       And Click on filter of Eamil Does not contain and Verify the Result
#       And Click on filter of Eamil Equals and Verify the Result
#       And Click on filter of Eamil Does not equal and Verify the Result
#       And Click on filter of Eamil Begins with and Verify the Result
#       And Click on filter of Eamil Ends with and Verify the Result
#       And Click on filter of Eamil Blank and Verify the Result
#       And Click on filter of Eamil Not blank and Verify the Result

#       And Click on filter of Phone contain and Verify the Result
#       And Click on filter of Phone Does not contain and Verify the Result
#       And Click on filter of Phone Equals and Verify the Result
#       And Click on filter of Phone Does not equal and Verify the Result
#       And Click on filter of Phone Begins with and Verify the Result
#       And Click on filter of Phone Ends with and Verify the Result
#       And Click on filter of Phone Blank and Verify the Result
#       And Click on filter of Phone Not blank and Verify the Result

#       And Click on filter of Employee Status contain and Verify the Result
#       # And Click on filter of Employee Status Does not contain and Verify the Result
#       And Click on filter of Employee Status Equals and Verify the Result
#       And Click on filter of Employee Status Does not equal and Verify the Result
#       And Click on filter of Employee Status Begins with and Verify the Result
#       And Click on filter of Employee Status Ends with and Verify the Result
#       And Click on filter of Employee Status Blank and Verify the Result
#       And Click on filter of Employee Status Not blank and Verify the Result

#       And Click on Sort Ascending and Descending for Full Name and Verify the Result
#       And Click on Sort Ascending and Descending for Email and Verify the Result
#       And Click on Sort Ascending and Descending for Phone and Verify the Result
#       And Click on Sort Ascending and Descending for Employee Status and Verify the Result

#     Scenario: Admin Users
#       Then Click on Admin Users unit
#       And Click on filter of Full Name contain and Verify the Result for adminU
#       And Click on filter of Full Name Does not contain and Verify the Result for adminU
#       And Click on filter of Full Name Equals and Verify the Result for adminU
#       And Click on filter of Full Name Does not equal and Verify the Result for adminU
#       And Click on filter of Full Name Begins with and Verify the Result for adminU
#       And Click on filter of Full Name Ends with and Verify the Result for adminU
#       And Click on filter of Full Name Blank and Verify the Result for adminU
#       And Click on filter of Full Name Not blank and Verify the Result for adminU

#       And Click on filter of Eamil contain and Verify the Result for adminU
#       And Click on filter of Eamil Does not contain and Verify the Result for adminU
#       And Click on filter of Eamil Equals and Verify the Result for adminU
#       And Click on filter of Eamil Does not equal and Verify the Result for adminU
#       And Click on filter of Eamil Begins with and Verify the Result for adminU
#       And Click on filter of Eamil Ends with and Verify the Result for adminU
#       And Click on filter of Eamil Blank and Verify the Result for adminU
#       And Click on filter of Eamil Not blank and Verify the Result for adminU

#       And Click on filter of User Status contain and Verify the Result
#       And Click on filter of User Status Does not contain and Verify the Result
#       And Click on filter of User Status Equals and Verify the Result
#       And Click on filter of User Status Does not equal and Verify the Result
#       And Click on filter of User Status Begins with and Verify the Result
#       And Click on filter of User Status Ends with and Verify the Result
#       And Click on filter of User Status Blank and Verify the Result
#       And Click on filter of User Status Not blank and Verify the Result

#       And Click on filter of Phone contain and Verify the Result for adminU
#       And Click on filter of Phone Does not contain and Verify the Result for adminU
#       And Click on filter of Phone Equals and Verify the Result for adminU
#       And Click on filter of Phone Does not equal and Verify the Result for adminU
#       And Click on filter of Phone Begins with and Verify the Result for adminU
#       And Click on filter of Phone Ends with and Verify the Result for adminU
#       And Click on filter of Phone Blank and Verify the Result for adminU
#       And Click on filter of Phone Not blank and Verify the Result for adminU

#       And Click on filter of User Role contain and Verify the Result
#       And Click on filter of User Role Does not contain and Verify the Result
#       And Click on filter of User Role Equals and Verify the Result
#       And Click on filter of User Role Does not equal and Verify the Result
#       And Click on filter of User Role Begins with and Verify the Result
#       And Click on filter of User Role Ends with and Verify the Result
#       And Click on filter of User Role Blank and Verify the Result
#       And Click on filter of User Role Not blank and Verify the Result

#       And Click on Sort Ascending and Descending for Full Name and Verify the Result
#       And Click on Sort Ascending and Descending for Email and Verify the Result
#       And Click on Sort Ascending and Descending for Phone and Verify the Result
#       And Click on Sort Ascending and Descending for User Status and Verify the Result
#       And Click on Sort Ascending and Descending for User Role and Verify the Result

#     # # Then I should click on Add New Admin
#     # # Then Enter full name, title and Email of Admin
#     # # And Enter Phone,Cell Number and select UserRole of Admin
#     # # And Click on submit button of Admin
#     # # Then Verify the student added in table of Admin
#     # # And Enter the Search value in search box of Admin
#     # # Then Verify the Results in the table of Admin
#     # # And Click on Edit button of Admin
#     # # Then I should edit title, full name of Admin
#     # # And I should edit Phone and Cell Number and user role of Admin
#     # # Then Click on Submit button of Admin
#     # # And Verify the Record has been updated Meassage of Admin
#     # # And Click on Delete button of Admin
#     # # Then Click on Confirm Delete button of Admin
#     # # And Verify the record is deleted successfully of Admin
#     # # Then Click on Admin Users unit

#   Scenario: Account Managment
#     Then Click on Account Management unit
#     # And I should click on Add Account
#     # Then Enter Account name, Phone, Email, Domain and credit Limit
#     # And Select In house Repaire and Payment terms
#     # And Select account site and account manager
#     # Then Click on submit button Account
#     # And Verify the Account added in table
#     # Then Click on Image Icon Menu
#     # And Click on Buildings menu
#     # Then Click on add Building
#     # And Enter the Building information and Click on Save button
#     # Then Click on Image Icon Menu
#     # Then Click on Users menu
#     # And Click on Add user button
#     # Then Enter User information and Click on Save button
#     # Then Verify the User added successfully
#     # Then Click on Image Icon Menu
#     # And Click on Update Subscription menu
#     # Then Select Subscriptions and click Update subcription button
#     # And Verify Subscriptions updated successfully
#     # Then Click on Image Icon Menu
#     # Then Click on Update Credit menu
#     # And Credit Increase or decrease by number and Click on update button
#     # Then Verify Credit updated successfully
#     # Then Click on Image Icon Menu
#     # And Click on Update Account Site menu
#     # Then Select Account Site and click on Update Site button
#     # And Verify Account Site updated successfully


#     # And Click on filter of Name contain and Verify the Result
#     # # And Click on filter of Name Does not contain and Verify the Result
#     # And Click on filter of Name Equals and Verify the Result
#     # And Click on filter of Name Does not equal and Verify the Result
#     # And Click on filter of Name Begins with and Verify the Result
#     # And Click on filter of Name Ends with and Verify the Result
#     # # And Click on filter of Name Blank and Verify the Result
#     # And Click on filter of Name Not blank and Verify the Result

#     # And Click on filter of Contact contain and Verify the Result
#     # And Click on filter of Contact Does not contain and Verify the Result
#     # And Click on filter of Contact Equals and Verify the Result
#     # And Click on filter of Contact Does not equal and Verify the Result
#     # And Click on filter of Contact Begins with and Verify the Result
#     # And Click on filter of Contact Ends with and Verify the Result
#     # And Click on filter of Contact Blank and Verify the Result
#     # And Click on filter of Contact Not blank and Verify the Result

#     # And Click on filter of Credit Limit contain and Verify the Result
#     # And Click on filter of Credit Limit Does not contain and Verify the Result
#     # And Click on filter of Credit Limit Equals and Verify the Result
#     # And Click on filter of Credit Limit Does not equal and Verify the Result
#     # And Click on filter of Credit Limit Begins with and Verify the Result
#     # And Click on filter of Credit Limit Ends with and Verify the Result
#     # And Click on filter of Credit Limit Blank and Verify the Result
#     # And Click on filter of Credit Limit Not blank and Verify the Result

#     # And Click on filter of Account Credit contain and Verify the Result
#     # And Click on filter of Account Credit Does not contain and Verify the Result
#     # And Click on filter of Account Credit Equals and Verify the Result
#     # And Click on filter of Account Credit Does not equal and Verify the Result
#     # And Click on filter of Account Credit Begins with and Verify the Result
#     # And Click on filter of Account Credit Ends with and Verify the Result
#     # And Click on filter of Account Credit Blank and Verify the Result
#     # And Click on filter of Account Credit Not blank and Verify the Result

#     # And Click on filter of Account Balance contain and Verify the Result
#     # And Click on filter of Account Balance Does not contain and Verify the Result
#     # And Click on filter of Account Balance Equals and Verify the Result
#     # And Click on filter of Account Balance Does not equal and Verify the Result
#     # And Click on filter of Account Balance Begins with and Verify the Result
#     # And Click on filter of Account Balance Ends with and Verify the Result
#     # And Click on filter of Account Balance Blank and Verify the Result
#     # And Click on filter of Account Balance Not blank and Verify the Result

#     # And Click on filter of Building contain and Verify the Result
#     # And Click on filter of Building Does not contain and Verify the Result
#     # And Click on filter of Building Equals and Verify the Result
#     # And Click on filter of Building Does not equal and Verify the Result
#     # And Click on filter of Building Begins with and Verify the Result
#     # And Click on filter of Building Ends with and Verify the Result
#     # And Click on filter of Building Blank and Verify the Result
#     # And Click on filter of Building Not blank and Verify the Result

#     # And Click on filter of Users contain and Verify the Result
#     # And Click on filter of Users Does not contain and Verify the Result
#     # And Click on filter of Users Equals and Verify the Result
#     # And Click on filter of Users Does not equal and Verify the Result
#     # And Click on filter of Users Begins with and Verify the Result
#     # And Click on filter of Users Ends with and Verify the Result
#     # And Click on filter of Users Blank and Verify the Result
#     # And Click on filter of Users Not blank and Verify the Result

#     # And Click on filter of Repair Tickets Equals and Verify the Result
#     # And Click on filter of Repair Tickets Does not equal and Verify the Result
#     # And Click on filter of Repair Tickets Before with and Verify the Result
#     # And Click on filter of Repair Tickets Between and Verify the Result
#     # And Click on filter of Repair Tickets After  with and Verify the Result
#     # And Click on filter of Repair Tickets Blank and Verify the Result
#     # And Click on filter of Repair Tickets Not blank and Verify the Result

#     # And Click on filter of Fleet Devices Equals and Verify the Result
#     # And Click on filter of Fleet Devices Does not equal and Verify the Result
#     # And Click on filter of Fleet Devices Before and Verify the Result
#     # And Click on filter of Fleet Devices After and Verify the Result
#     # And Click on filter of Fleet Devices Between with and Verify the Result
#     # And Click on filter of Fleet Devices Blank and Verify the Result
#     # And Click on filter of Fleet Devices Not blank and Verify the Result

#     # And Click on filter of Last Full Google Sync Equals and Verify the Result
#     # And Click on filter of Last Full Google Sync Does not equal and Verify the Result
#     # And Click on filter of Last Full Google Sync Before and Verify the Result
#     # And Click on filter of Last Full Google Sync After and Verify the Result
#     # And Click on filter of Last Full Google Sync Between with and Verify the Result
#     # And Click on filter of Last Full Google Sync Blank and Verify the Result
#     # And Click on filter of Last Full Google Sync Not blank and Verify the Result

#     # And Click on Sort Ascending and Descending for Name and Verify the Result
#     # And Click on Sort Ascending and Descending for Credit Limit and Verify the Result
#     # And Click on Sort Ascending and Descending for Account Credit and Verify the Result
#     # And Click on Sort Ascending and Descending for Account Balance and Verify the Result
#     # And Click on Sort Ascending and Descending for Contact and Verify the Result
#     # And Click on Sort Ascending and Descending for Buildings and Verify the Result
#     # And Click on Sort Ascending and Descending for Users and Verify the Result
#     # And Click on Sort Ascending and Descending for Repair Tickets and Verify the Result
#     # And Click on Sort Ascending and Descending for Fleet Devices and Verify the Result
#     # And Click on Sort Ascending and Descending for Service Account and Verify the Result
#     # And Click on Sort Ascending and Descending for Last Full Google Sync and Verify the Result

#   Scenario: Warranties
#     Then Click on warranty unit
#     And I should click on Add warranty
#     Then Enter name and SKU
#     And Select Type and Damge protection
#     Then Enter Device Price year month and Bettery Year and month
#     And Select provider and write description
#     Then Click on submit button of warranty
#     # And Verify the warranty added in table
#     And Click On Edit icon
#     Then I should edit name and SKU
#     And I should edit Type and Damge protection
#     Then I should edit Device Price year month and Bettery Year and month
#     And I should edit provider and write description
#     Then Click on update button
#     # And Verify the warranty updated Meassage
#     And Click on Delete Icon
#     Then Click on Confirm Delete Icon
#     # And Verify the record is deleted successfully for warranty
#     Then Click on warranty unit

#     And Click on filter of Name contain and Verify the Result for warranty
#     And Click on filter of Name Does not contain and Verify the Result for warranty
#     And Click on filter of Name Equals and Verify the Result for warranty
#     And Click on filter of Name Does not equal and Verify the Result for warranty
#     And Click on filter of Name Begins with and Verify the Result for warranty
#     And Click on filter of Name Ends with and Verify the Result for warranty
#     And Click on filter of Name Blank and Verify the Result for warranty
#     And Click on filter of Name Not blank and Verify the Result for warranty

#     And Click on filter of Provider contain and Verify the Result for warranty
#     And Click on filter of Provider Does not contain and Verify the Result for warranty
#     And Click on filter of Provider Equals and Verify the Result for warranty
#     And Click on filter of Provider Does not equal and Verify the Result for warranty
#     And Click on filter of Provider Begins with and Verify the Result for warranty
#     And Click on filter of Provider Ends with and Verify the Result for warranty
#     And Click on filter of Provider Blank and Verify the Result for warranty
#     And Click on filter of Provider Not blank and Verify the Result for warranty

#     And Click on filter of SKU contain and Verify the Result for warranty
#     And Click on filter of SKU Does not contain and Verify the Result for warranty
#     And Click on filter of SKU Equals and Verify the Result for warranty
#     And Click on filter of SKU Does not equal and Verify the Result for warranty
#     And Click on filter of SKU Begins with and Verify the Result for warranty
#     And Click on filter of SKU Ends with and Verify the Result for warranty
#     And Click on filter of SKU Blank and Verify the Result for warranty
#     And Click on filter of SKU Not blank and Verify the Result for warranty

#     And Click on filter of Type contain and Verify the Result for warranty
#     # And Click on filter of Type Does not contain and Verify the Result for warranty
#     And Click on filter of Type Equals and Verify the Result for warranty
#     And Click on filter of Type Does not equal and Verify the Result for warranty
#     # And Click on filter of Type Begins with and Verify the Result for warranty
#     And Click on filter of Type Ends with and Verify the Result for warranty
#     And Click on filter of Type Blank and Verify the Result for warranty
#     And Click on filter of Type Not blank and Verify the Result for warranty

#   Scenario: Import Serial Device
#     Then Click on Import Serial Device unit
#     And Click on filter of Serial Number contain and Verify the Result
#     And Click on filter of Serial Number Does not contain and Verify the Result
#     And Click on filter of Serial Number Equals and Verify the Result
#     And Click on filter of Serial Number Does not equal and Verify the Result
#     And Click on filter of Serial Number Begins with and Verify the Result
#     And Click on filter of Serial Number Ends with and Verify the Result
#     And Click on filter of Serial Number Blank and Verify the Result
#     # And Click on filter of Serial Number Not blank and Verify the Result

#     And Click on filter of Building contain and Verify the Result for ImportSD
#     And Click on filter of Building Does not contain and Verify the Result for ImportSD
#     And Click on filter of Building Equals and Verify the Result for ImportSD
#     And Click on filter of Building Does not equal and Verify the Result for ImportSD
#     And Click on filter of Building Begins with and Verify the Result for ImportSD
#     And Click on filter of Building Ends with and Verify the Result for ImportSD
#     And Click on filter of Building Blank and Verify the Result for ImportSD
#     # And Click on filter of Building Not blank and Verify the Result for ImportSD

#     And Click on filter of Import Number Equals and Verify the Result
#     And Click on filter of Import Number Does not equal and Verify the Result
#     And Click on filter of Import Number Greater than and Verify the Result
#     And Click on filter of Import Number Greater than or equal to and Verify the Result
#     And Click on filter of Import Number Less than and Verify the Result
#     And Click on filter of Import Number Less than or equal to and Verify the Result
#     And Click on filter of Import Number Between and Verify the Result
#     And Click on filter of Import Number Blank and Verify the Result
#     # And Click on filter of Import Number Not blank and Verify the Result

#     And Click on filter of Device contain and Verify the Result
#     And Click on filter of Device Does not contain and Verify the Result
#     And Click on filter of Device Equals and Verify the Result
#     And Click on filter of Device Does not equal and Verify the Result
#     And Click on filter of Device Begins with and Verify the Result
#     And Click on filter of Device Ends with and Verify the Result
#     And Click on filter of Device Blank and Verify the Result
#   # And Click on filter of Device Not blank and Verify the Result

#   #  And Click on filter of Assets Tag contain and Verify the Result
#   # And Click on filter of Assets Tag Does not contain and Verify the Result
#   # And Click on filter of Assets Tag Equals and Verify the Result
#   # And Click on filter of Assets Tag Does not equal and Verify the Result
#   # And Click on filter of Assets Tag Begins with and Verify the Result
#   # And Click on filter of Assets Tag Ends with and Verify the Result
#   # And Click on filter of Assets Tag Blank and Verify the Result
#   # And Click on filter of Assets Tag Not blank and Verify the Result

#   # And Click on filter of Loaner Status op1 and Verify the Result

#   # And Click on filter of Account contain and Verify the Result
#   # And Click on filter of Account Does not contain and Verify the Result
#   # And Click on filter of Account Equals and Verify the Result
#   # And Click on filter of Account Date Does not equal and Verify the Result
#   # And Click on filter of Account Begins with and Verify the Result
#   # And Click on filter of Account Ends with and Verify the Result
#   # And Click on filter of Account Blank and Verify the Result
#   # And Click on filter of Account Not blank and Verify the Result

#   # And Click on filter of Created By contain and Verify the Result
#   # And Click on filter of Created By Does not contain and Verify the Result
#   # And Click on filter of Created By Equals and Verify the Result
#   # And Click on filter of Created By Does not equal and Verify the Result
#   # And Click on filter of Created By Begins with and Verify the Result
#   # And Click on filter of Created By Ends with and Verify the Result
#   # And Click on filter of Created By Blank and Verify the Result
#   # And Click on filter of Created By Not blank and Verify the Result

#   # And Click on filter of Last Modified By contain and Verify the Result
#   # And Click on filter of Last Modified By Does not contain and Verify the Result
#   # And Click on filter of Last Modified By Equals and Verify the Result
#   # And Click on filter of Last Modified By Does not equal and Verify the Result
#   # And Click on filter of Last Modified By Begins with and Verify the Result
#   # And Click on filter of Last Modified By Ends with and Verify the Result
#   # And Click on filter of Last Modified By Blank and Verify the Result
#   # And Click on filter of Last Modified By Not blank and Verify the Result

#   # And Click on filter of Device Status op1 and Verify the Result
#   # And Click on filter of Device Status op2 and Verify the Result

#   Scenario: Import Serial Device Request
#     Then Click on Import Serial Device Request unit
#     And Click on filter of User Name contain and Verify the Result
#     And Click on filter of User Name Does not contain and Verify the Result
#     And Click on filter of User Name Equals and Verify the Result
#     And Click on filter of User Name Does not equal and Verify the Result
#     And Click on filter of User Name Begins with and Verify the Result
#     And Click on filter of User Name Ends with and Verify the Result
#     And Click on filter of User Name Blank and Verify the Result
#     And Click on filter of User Name Not blank and Verify the Result

#     And Click on filter of Email contain and Verify the Result
#     And Click on filter of Email Does not contain and Verify the Result
#     And Click on filter of Email Equals and Verify the Result
#     And Click on filter of Email Does not equal and Verify the Result
#     And Click on filter of Email Begins with and Verify the Result
#     And Click on filter of Email Ends with and Verify the Result
#     And Click on filter of Email Blank and Verify the Result
#     And Click on filter of Email Not blank and Verify the Result

#     And Click on filter of Account Number contain and Verify the Result
#     And Click on filter of Account Number Does not contain and Verify the Result
#     And Click on filter of Account Number Equals and Verify the Result
#     And Click on filter of Account Number Does not equal and Verify the Result
#     And Click on filter of Account Number Begins with and Verify the Result
#     And Click on filter of Account Number Ends with and Verify the Result
#     And Click on filter of Account Number Blank and Verify the Result
#     And Click on filter of Account Number Not blank and Verify the Result

#     And Click on filter of Account Name contain and Verify the Result
#     And Click on filter of Account Name Does not contain and Verify the Result
#     And Click on filter of Account Name Equals and Verify the Result
#     And Click on filter of Account Name Does not equal and Verify the Result
#     And Click on filter of Account Name Begins with and Verify the Result
#     And Click on filter of Account Name Ends with and Verify the Result
#     And Click on filter of Account Name Blank and Verify the Result
#     And Click on filter of Account Name Not blank and Verify the Result

#     And Click on filter of Request Date Equals and Verify the Result
#     And Click on filter of Request Date Does not equal and Verify the Result
#     And Click on filter of Request Date Before and Verify the Result
#     And Click on filter of Request Date After and Verify the Result
#     And Click on filter of Request Date Between and Verify the Result
#     And Click on filter of Request Date Blank and Verify the Result
#     And Click on filter of Request Date Not blank and Verify the Result

#     And Click on filter of Status contain and Verify the Result
#     And Click on filter of Status Does not contain and Verify the Result
#     And Click on filter of Status Equals and Verify the Result
#     And Click on filter of Status Does not equal and Verify the Result
#     And Click on filter of Status Begins with and Verify the Result
#     And Click on filter of Status Ends with and Verify the Result
#     And Click on filter of Status Blank and Verify the Result
#     And Click on filter of Status Not blank and Verify the Result

#     And Click on filter of Quantity Devices contain and Verify the Result
#     And Click on filter of Quantity Devices Does not contain and Verify the Result
#     And Click on filter of Quantity Devices Equals and Verify the Result
#     And Click on filter of Quantity Devices Does not equal and Verify the Result
#     And Click on filter of Quantity Devices Begins with and Verify the Result
#     And Click on filter of Quantity Devices Ends with and Verify the Result
#     And Click on filter of Quantity Devices Blank and Verify the Result
#     And Click on filter of Quantity Devices Not blank and Verify the Result






# # # # Scenario: All Paid Subscription and  Roadmap feature request and admin
# # # # And Click on Vivacity Admin page
# # # # Then Click on All Paid Subscription Requests unit
# # # # And Table should be visible
# # # # Then If any subscription request is there then approve or deny the request
# # # # And Verify the Request
# # # # Then Click on All Paid Subscription Requests unit

# # # # And Click on features page
# # # # Then Click on Submit a feature request button
# # # # And Enter Title and Description
# # # # Then Click on Feature submit button
# # # # Then Verify Submitting Features request Message
# # # # And Click on Vivacity Admin page
# # # # Then Click on Roadmap Requests unit
# # # # And Click on view button
# # # # Then Click on the Close button
# # # # And Click on approve button
# # # # And Click on features page again
# # # # Then Verify the feature added in Underconsideration

# # # #    And Click on Vivacity Admin page
# # # #     Then Click on Admin Users unit
# # # #     Then I should click on Add New Admin
# # # #     Then Enter full name, title and Email of Admin
# # # #     And Enter Phone,Cell Number and select UserRole of Admin
# # # #     And Click on submit button of Admin
# # # #     # Then Verify the student added in table of Admin
# # # #     And Enter the Search value in search box of Admin
# # # #     Then Verify the Results in the table of Admin
# # # #     And Click on Edit button of Admin
# # # #     Then I should edit title, full name of Admin
# # #     And I should edit Phone and Cell Number and user role of Admin
# # #     Then Click on Submit button of Admin
# # #     And Verify the Record has been updated Meassage of Admin
# # #     And Click on Delete button of Admin
# # #     Then Click on Confirm Delete button of Admin
# # #     And Verify the record is deleted successfully of Admin
# # #     Then Click on Admin Users unit

# # #  Scenario:  warranty, Search, Edit, Search, Delete and Import Serial Device
# # #     And Click on Vivacity Admin page
# # #     Then Click on warranty unit
# # #     And I should click on Add warranty
# # #     Then Enter name and SKU
# # #     And Select Type and Damge protection
# # #     Then Enter Device Price year month and Bettery Year and month
# # #     And Select provider and write description
# # #     Then Click on submit button of warranty
# # #     And Verify the warranty added in table
# # #     Then Enter the value in search warranty
# # #     And Verify search result warranty
# # #     And Click On Edit icon
# # #     Then I should edit name and SKU
# # #     And I should edit Type and Damge protection
# # #     Then I should edit Device Price year month and Bettery Year and month
# # #     And I should edit provider and write description
# # #     Then Click on update button
# # #     And Verify the warranty updated Meassage
# # #     And Click on Delete Icon
# # #     Then Click on Confirm Delete Icon
# # #     And Verify the record is deleted successfully for warranty
# # #     Then Click on warranty unit






# # And Click on Vivacity Admin page
# # Then Click on Request Users unit
# # Then Click on Add Account of request user
# # And Select available account
# # Then Click on add account button for request user
# # And Verify add account successfully
# # Then Click on Request Users unit


# # # Scenario: Vivacity Admin with all Users  and redirect to Repair Ticket Creation
# # # And Click on Vivacity Admin page
# # # Then Click on all Users unit
# # # And I should click on Add New user for allUser
# # # Then Enter full name, title and Email for allUser
# # # And Enter Phone,Cell Number and select UserRole for allUser
# # # And Click on submit button for allUser
# # # Then Verify the student added in table for allUser
# # # And Enter the Search value in search box for alluser
# # # Then Verify the Results in the table for allUser
# # # And Click on Edit button for allUser
# # # Then I should edit title, full name for allUser
# # # And I should edit Phone and Cell Number and user role for allUser
# # # Then Click on Submit update button for allUser
# # # And Verify the Record has been updated Meassage for allUser
# # # And Click on Delete button for allUser
# # # And Verify the record is deleted successfully for allUser
# # # Then Click on all Users unit

# # #  And Click on Vivacity Admin page
# # #     Then Click on Repair Ticket Creation unit
# # #     And Enter the Search - Ticket Number in search box and Verify the Result for RT
# # Then Enter the Search - Repair Type in search box and Verify the Result for RT
# # And Enter the Search - Failure Type in search box and Verify the Result for RT
# #     And Click More filter select- Ticket Number in search box and Verify the Result for RT
# #     And Click on Repair 360 page button
# #     Then Verify the Repair Ticket page redirected
