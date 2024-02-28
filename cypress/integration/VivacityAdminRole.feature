Feature: Vivacity Admin Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then Close the terms of service window

    # Scenario: Vivacity Admin can access the dashboard page and check the visiblity
    #     Then I should be redirected to the dashboard page
    #     And Verify the Title of dashborad Page
    #     Then My Account Detail tab should be visible
    #     And Building tab should be visible

    #     And Click on Report center page
    #     Then I should be redirected to the Report center page
    #     And Verify the Title of Report center Page
    #     Then Verify the VivacityRepairReport Tab should be visible
    #     And Verify the InHouseRepairReport tab should be visible
    #     Then Verify the DeviceRepairReport tab should be visible
    #     And Verify the NonwarrantyRepairs tab should be visible

    #     And Click on ManageDevices page
    #     Then I should be redirected to theManageDevices page
    #     And Verify the Title of ManageDevices Page
    #     Then Verify the My Fleet Tab should be visible
    #     And Verify the Loaner Management tab should be visible
    #     Then Verify the Import Serial Devices tab should be visible
    #     And Verify the Organization Uploaded Assets tab should be visible


    #     And Click on Repair360 page
    #     Then I should be redirected to the Repair360 page
    #     And Verify the Title of Repair360 Page
    #     Then Verify the VivacityRepairCenter Tab should be visible
    #     And Verify the InHouseRepairCenter tab should be visible
    #     Then Verify the StudentRepairCenter tab should be visible
    #     And Verify the PartCloset tab should be visible

    #     And Click on Resources page
    #     Then I should be redirected to the Resources page
    #     And Verify the Title of Resources Page
    #     Then Verify the Instructions Tab should be visible
    #     And Verify the HowToVideos tab should be visible
    #     Then Verify the WarrantyInfo tab should be visible

    #     And Click on My profile page
    #     Then Verify the Title of My Profile Page

    #     And Click on Support page
    #     Then Verify the Title of Support Page

    #     And Click on features page
    #     Then I should be redirected to the Features page
    #     And Verify the Title of Features Page
    #     Then Verify the Under Consideration Tab should be visible
    #     And Verify the Under Construction tab should be visible
    #     Then Verify the Launched tab should be visible

    # Scenario: Dashboard
    #     Then Account Details -Aaccount Name and no should be visible of acc
    #     And Account Manager,Billing Address and Shipping Address should be visible of acc
    #     #   And Click More filter select- Record Id in search box and Verify the Result of acc
    #     #     Then Click on Clear filter of acc
    #     #     And Click More filter select- Full name in search box and Verify the Result of acc
    #     #     Then Click on Clear filter of acc
    #     #     And Click More filter select- Title in search box and Verify the Result of acc
    #     #     Then Click on Clear filter of acc
    #     #     And Click More filter select- Eamil in search box and Verify the Result of acc
    #     #     Then Click on Clear filter of acc
    #     #     And Click More filter select- User Role in search box and Verify the Result of acc
    #     #     Then Click on Clear filter of acc
    #     #     And Click More filter select- Phone in search box and Verify the Result of acc
    #     #     Then Click on Clear filter of acc
    #     #     And Click More filter select- User Status in search box and Verify the Result of acc
    #     #     Then Click on Clear filter of acc
    #     And Enter the Search - Record Id in search box and Verify the Result of acc
    #     And Enter the Search - Full name in search box and Verify the Result of acc
    #     Then Enter the Search - Email in search box and Verify the Result of acc
    #     And Enter the Search - Title in search box and Verify the Result of acc
    #     Then Enter the Search - Phone in search box and Verify the Result of acc
    #     And Click on Export To CSV of acc
    #     # Then Click on Bulk Upload button of acc
    #     # And Click on Attach CSV file and Click on submit button of acc
    #     # Then Verify the Uploaded successfully of acc
      
    #     And Click on Buildings Tab
    #     Then I should click on + Add New button of build
    #     And I should Enter Building Name,Phone and Extension of build
    #     Then Select Default building of build
    #     And Enter Billing Address and select from dropdown of build
    #     Then Click on checkbox Same as Shipping Address of build
    #     And Click on save button of build
    #     Then Verify the builing details added in table of build
    #     And Click on My Account Details Tab
    #     Then I should click on Add New button of acc
    #     And Verify the tilte of Add New Contact page of acc
    #     Then Enter title, full name and valid Email of acc
    #     And Enter Phone and Cell Number of acc
    #     Then Select User Role and Building from Dropdown List of acc
    #     And Click on save button of acc
    #     Then Verify the account details added in table of acc
    #     And Verify the record in searching history of acc
    #     And Click on Edit Icon of acc
    #     Then I should edit title, full name of acc
    #     And I should edit Phone and Cell Number and user role of acc
    #     Then I edit User Status to inactive of acc
    #     Then Click on Submit button of acc
    #     And Verify the Record has been updated Meassage of acc
    #     And Click on Delete Icon of acc
    #     Then Click on Confirm Delete button of acc
    #     And Verify the record is deleted successfully of acc
    #     And Click on Buildings Tab 
    #     And Click on Edit Icon of build
    #     And I should edit Building Name,Phone and Extension of build
    #     Then I should edit Select Default building
    #     Then Click on update button of build
    #     And Verify the Record has been updated Meassage of build
    #     And Click on Delete Icon of build
    #     Then Click on Confirm Delete button of build
    #     And Verify the record is deleted successfully of build

    #       And Click on Buildings Tab
    #     # And Click More filter select- Record Id in search box and Verify the Result of build
    #     # Then Click on Clear filter of build
    #     # And Click More filter select- Building Name in search box and Verify the Result of build
    #     # Then Click on Clear filter of build
    #     # And Click More filter select- Default Building in search box and Verify the Result of build
    #     # Then Click on Clear filter of build
    #     # And Click More filter select- Phone in search box and Verify the Result of build
    #     # Then Click on Clear filter of build
    #     # And Click More filter select- Building Shipping Address in search box and Verify the Result of build
    #     # Then Click on Clear filter of build
    #     # And Click More filter select- Building Billing Address in search box and Verify the Result of build
    #     # Then Click on Clear filter of build
    #     And Enter the Search - Building Name in search box and Verify the Result of build
    #     # Then Enter the Search - Building Shipping Address in search box and Verify the Result of build
    #     And Enter the Search - Phone in search box and Verify the Result of build
    #     And Click on Export To CSV of build
    #     Then Click on Bulk Upload button of build
    #     And Click on Attach CSV file and Click on submit button of build
    #     Then Verify the Uploaded successfully of build

#     Scenario: Repair360 -repaireBox
#         Then Click on Repair360 page
#         And Click on RepairBoxes Tab
#         Then I should click on create new Box of rb
#         Then Enter weight, height, depth and width of rb
#         And Select Pick-up site of rb
#         Then Check the need shipping box of rb
#         And Click on Create box button of rb
#         Then Select Ticket from dropdownlist of rb
#         And Click on Finish button of rb
#         Then Verify new box is added in table of rb
#         And Enter the Search - Tracking Number in search box and Verify the Result of rb
#         Then Enter the Search - Record Id in search box and Verify the Result of rb

#     Scenario: Repair360   -repaireTicket
#         And Click on Repair360 page
#         Then I should click on create new ticket of rt
#         Then Select failure Type, Return site and Serial Device of rt
#         And Select Building and Chromebook issue of rt
#         Then Enter the Describe Your Issue of rt
#         And Click on save button of rt
#         Then Verify New Ticket is added of rt
#         And Enter the Search - Ticket Number in search box and Verify the Result of rt
#         Then Enter the Search - Repair type in search box and Verify the Result of rt
#         Then Enter the Search - Repair status in search box and Verify the Result of rt
#         And Enter the Search - Repair Box in search box and Verify the Result of rt
#         Then Enter the Search - Asset tag in search box and Verify the Result of rt
#     # And Click More filter select- Record Id in search box and Verify the Result of rt
#     # Then Click on Clear filter of rt
#     # And Click More filter select- Ticket Number in search box and Verify the Result of rt
#     # Then Click on Clear filter of rt
#     # And Click More filter select- Repair type in search box and Verify the Result of rt
#     # Then Click on Clear filter of rt
#     # And Click More filter select- Serial Number in search box and Verify the Result of rt
#     # Then Click on Clear filter of rt
#     # And Click More filter select- Repair device in search box and Verify the Result of rt
#     # Then Click on Clear filter of rt
#     # And Click More filter select- Repair status in search box and Verify the Result of rt
#     # Then Click on Clear filter of rt
#     # And Click More filter select- Repair Box in search box and Verify the Result of rt
#     # Then Click on Clear filter of rt
#     # And Click More filter select- Asset tag in search box and Verify the Result of rt
#     # Then Click on Clear filter of rt
#     # And Click More filter select- Created By in search box and Verify the Result of rt
#     # Then Click on Clear filter of rt

#     Scenario:My profile  and feature
#         And Click on My profile page
#         And Click on upload image icon of mp
#         Then Enter tilte and phone no of mp
#         And Eelect Email preference of mp
#         Then click on update button of mp
#         And Verify the updated successfully of mp

#         And Click on features page
#         And Click More filter select- Title in search box and Verify the Result of ft
#         Then Click on Clear filter of ft
#     # And Click More filter select- Description in search box and Verify the Result of ft
#     # Then Click on Clear filter of ft
#     # And Click More filter select- Creator in search box and Verify the Result of ft
#     # Then Click on Clear filter of ft


#     Scenario:Report Center -NonwarrantyRepairs , DeviceRepairReport
#         And Click on Report center page
#         And Click on NonwarrantyRepairs page
#         Then Select failure Type, Return site and Serial Device of Nwr
#         And Select Building and Chromebook issue of Nwr
#         Then Enter the Describe Your Issue of Nwr
#         And Click on save button of Nwr
#         Then Verify New Ticket is added of Nwr
#         # And Click More filter select- Record Id in search box and Verify the Result of Nwr
#         # Then Click on Clear filter of Nwr
#         # And Click More filter select- Ticket Number in search box and Verify the Result of Nwr
#         # Then Click on Clear filter of Nwr
#         # And Click More filter select- Repair type in search box and Verify the Result of Nwr
#         # Then Click on Clear filter of Nwr
#         # And Click More filter select- Serial Number in search box and Verify the Result of Nwr
#         # Then Click on Clear filter of Nwr
#         # And Click More filter select- Repair device in search box and Verify the Result of Nwr
#         # Then Click on Clear filter of Nwr
#         # And Click More filter select- Repair status in search box and Verify the Result of Nwr
#         # Then Click on Clear filter of Nwr
#         # And Click More filter select- Asset tag in search box and Verify the Result of Nwr
#         # Then Click on Clear filter of Nwr
#         # And Click More filter select- Repair Box in search box and Verify the Result of Nwr
#         # Then Click on Clear filter of Nwr
#         # And Click More filter select- Created By in search box and Verify the Result of Nwr
#         # Then Click on Clear filter of Nwr
#         And Enter the Search - Record Id in search box and Verify the Result of Nwr
#         Then Enter the Search - Repair type in search box and Verify the Result of Nwr
#         Then Enter the Search - Repair status in search box and Verify the Result of Nwr

#         And Click on Report center page
#         And Click on DeviceRepairReport page
#         # And Click More filter select- Record Id in search box and Verify the Result of drr
#         # Then Click on Clear filter of drr
#         # And Click More filter select- Ticket Number in search box and Verify the Result of drr
#         # Then Click on Clear filter of drr
#         # And Click More filter select- Repair type in search box and Verify the Result of drr
#         # Then Click on Clear filter of drr
#         # And Click More filter select- Serial Number in search box and Verify the Result of drr
#         # Then Click on Clear filter of drr
#         # And Click More filter select- Repair device in search box and Verify the Result of drr
#         # Then Click on Clear filter of drr
#         # # And Click More filter select- Repair status in search box and Verify the Result of drr
#         # # Then Click on Clear filter of drr
#         # And Click More filter select- Asset tag in search box and Verify the Result of drr
#         # Then Click on Clear filter of drr
#         # And Click More filter select- Repair Box in search box and Verify the Result of drr
#         # Then Click on Clear filter of drr
#         # And Click More filter select- Created By in search box and Verify the Result of drr
#         # Then Click on Clear filter of drr
#         And Enter the Search - Record Id in search box and Verify the Result of drr
#         Then Enter the Search - Repair type in search box and Verify the Result of drr
#         Then Enter the Search - Repair status in search box and Verify the Result of drr
#         And Enter the Search - Repair Box in search box and Verify the Result of drr


#     Scenario:Repair360 create, search and filters InHouseRepairCenter, StudentRepairCenter
#         Then Click on Repair360 page
#         And Click on InHouseRepairCenter tab
#         Then I should click on new button of inw
#         And Select failure Type, Serial Device, Technician and repair issue of inw
#         Then Select building and Enter the Chromebook issue of inw
#         And Click on save button of inw
#         Then Verify New Ticket is added of inw


#         Then Click on Repair360 page
#         And Click on InHouseRepairCenter tab
#         Then Click All InHouseTickets tab
#         Then I should click on Create new button of Inrt
#         And Select failure Type, Serial Device, Technician, issue and Building of Inrt
#         Then Enter the Chromebook issue of Inrt
#         And Click on save button of Inrt
#         Then Verify New Ticket is added of Inrt
#         And Click on Download Export button of Inrt
#         And Enter the Search - Record Id in search box and Verify the Result of Inrt
#         Then Enter the Search - Ticket Number in search box and Verify the Result of Inrt
#         And Enter the Search - Repair type in search box and Verify the Result of Inrt
#         Then Enter the Search - Repair status in search box and Verify the Result of Inrt
#         # And Click More filter select- Record Id in search box and Verify the Result of Inrt
#         # Then Click on Clear filter of Inrt
#         # And Click More filter select- Ticket Number in search box and Verify the Result of Inrt
#         # Then Click on Clear filter of Inrt
#         # And Click More filter select- Repair type in search box and Verify the Result of Inrt
#         # Then Click on Clear filter of Inrt
#         # And Click More filter select- Serial Number in search box and Verify the Result of Inrt
#         # Then Click on Clear filter of Inrt
#         # And Click More filter select- Repair device in search box and Verify the Result of Inrt
#         # Then Click on Clear filter of Inrt
#         # # And Click More filter select- Repair status in search box and Verify the Result of Inrt
#         # # Then Click on Clear filter of Inrt
#         # And Click More filter select- Asset tag in search box and Verify the Result of Inrt
#         # Then Click on Clear filter of Inrt
#         # And Click More filter select- internal Technician in search box and Verify the Result of Inrt
#         # Then Click on Clear filter of Inrt
#         # And Click More filter select- Created By in search box and Verify the Result of Inrt
#         # Then Click on Clear filter of Inrt

#         Then Click on Repair360 page
#         And Click on InHouseRepairCenter tab
#         And Enter Search ticket no in search box of ihw
#         Then Verify search result below of ihw
#         And Click on view button of ihw
#         Then Verify the Details of student repair ticket of ihw
#         And Click on the Edit Ticket Button of ihw
#         Then Update the Technician and Repair Status of ihw
#         And Click on Update Button of ihw
#         Then Verify Updated successfully of ihw
#         And Click on Add Line and Verify of ihw
#         Then Click on Add Repair Image and Verify of ihw
#         And Click on Add Note and Verify of ihw
#         Then I should click on new button of ihw
#         And Select failure Type, Serial Device, Technician and repair issue of ihw
#         Then Select building and Enter the Chromebook issue of ihw
#         And Click on save button of ihw
#         Then Verify New Ticket is added of ihw


#         Then Click on Repair360 page
#         And Click on StudentRepairCenter tab
#         Then Click on SrcStudents tab
#         Then I should click on Add New student of srcs
#         Then Enter title, full name and Email of srcs
#         And Enter Phone and Cell Number of srcs
#         Then Select User Status of srcs
#         And Click on submit button of srcs
#         Then Verify the student added in table of srcs
#         # And Click More filter select- Full name in search box and Verify the Result of srcs
#         # Then Click on Clear filter of srcs
#         # And Click More filter select- Title in search box and Verify the Result of srcs
#         # Then Click on Clear filter of srcs
#         # And Click More filter select- Eamil in search box and Verify the Result of srcs
#         # Then Click on Clear filter of srcs
#         # And Click More filter select- User status in search box and Verify the Result of srcs
#         # Then Click on Clear filter of srcs
#         And Enter the Search - Full name in search box and Verify the Result of srcs
#         Then Enter the Search - Email in search box and Verify the Result of srcs
#         And Enter the Search - Status in search box and Verify the Result of srcs
#         Then Enter the Search - Phone in search box and Verify the Result of srcs


#         Then Click on Repair360 page
#         And Click on StudentRepairCenter tab
#         Then Click on SrcRepairTickets tab
#         And Enter the Search - Record Id in search box and Verify the Result of srcRt
#         Then Enter the Search - Ticket Number in search box and Verify the Result of srcRt
#         And Enter the Search - Repair type in search box and Verify the Result of srcRt
#         Then Enter the Search - Repair status in search box and Verify the Result of srcRt
#         # And Click More filter select- Record Id in search box and Verify the Result of srcRt
#         # Then Click on Clear filter of srcRt
#         # And Click More filter select- Ticket Number in search box and Verify the Result of srcRt
#         # Then Click on Clear filter of srcRt
#         # And Click More filter select- Repair type in search box and Verify the Result of srcRt
#         # Then Click on Clear filter of srcRt
#         # And Click More filter select- Serial Number in search box and Verify the Result of srcRt
#         # Then Click on Clear filter of srcRt
#         # And Click More filter select- Repair device in search box and Verify the Result of srcRt
#         # Then Click on Clear filter of srcRt
#         # And Click More filter select- Repair status in search box and Verify the Result of srcRt
#         # Then Click on Clear filter of srcRt
#         # And Click More filter select- Asset tag in search box and Verify the Result of srcRt
#         # Then Click on Clear filter of srcRt
#         # And Click More filter select- internal Technician in search box and Verify the Result of srcRt
#         # Then Click on Clear filter of srcRt
#         # And Click More filter select- Created By in search box and Verify the Result of srcRt
#         # Then Click on Clear filter of srcRt
#         # Then I should click on Create Student Repair Ticket button of srcRt
#         # And Select failure Type, Serial Device, Technician and building of srcRt
#         # Then Enter the Chromebook issue of srcRt
#         # And Click on save button of srcRt
#         # Then Verify New Ticket is added of srcRt


#         Then Click on Repair360 page
#         And Click on StudentRepairCenter tab
#         Then Click on SrcFacilitators tab
#         And Click More filter select- Full name in search box and Verify the Result of srcF
#         Then Click on Clear filter of srcF
#         And Click More filter select- Title in search box and Verify the Result of srcF
#         Then Click on Clear filter of srcF
#         # And Click More filter select- Eamil in search box and Verify the Result of srcF
#         # Then Click on Clear filter of srcF
#         # And Click More filter select- User status in search box and Verify the Result of srcF
#         # Then Click on Clear filter of srcF
#         And Enter the Search - Full name in search box and Verify the Result of srcF
#         Then Enter the Search - Email in search box and Verify the Result of srcF
#         And Enter the Search - Status in search box and Verify the Result of srcF
#         Then Enter the Search - Phone in search box and Verify the Result of srcF


#         And Click on Repair360 page
#         And Click on PartCloset Tab
#         And I should click on Add New VT part of pc
#         Then Select device and part name of pc
#         And Enter quantity and select building of pc
#         Then Click on submit button of pc
#         And Verify new VT part is added of pc
#         Then I should click on Add New custome part
#         Then Enter part name, manufacture and parent device of pc
#         And Enter part sku and quantity of pc
#         Then Click on submit button of pc
#         And Verify new custome part is added of pc
#         And Enter the Search value in search box of pc
#         Then Verify the Results in the table of pc
#         And Click on delete button of pc
#     # Then Verify the recode is deleted of pc

#     Scenario: Users
#         Then I should click on Add New student of user
#         Then Enter full name, title and Email of user
#         And Enter Phone and Cell Number of user
#         And Click on submit button of user
#         Then Verify the student added in table of user
#         And Click on Edit button of user
#         Then I should edit title, full name of user
#         And I should edit Phone and Cell Number and user role of user
#         Then I edit User Status to inactive of user
#         And I edit Building of user
#         Then Click on Submit button of user
#         # And Verify the Record has been updated Meassage of user
#         And Click on Delete button of user
#         Then Click on Confirm Delete button of user
#         # And Verify the record is deleted successfully of user
#         Then Click on Download button of user
#         And Enter the Search - Record Id in search box and Verify the Result of user
#         Then Enter the Search - Full Name in search box and Verify the Result of user
#         And Enter the Search - Email in search box and Verify the Result of user
#         Then Enter the Search - Phone in search box and Verify the Result of user
#         And Enter the Search - CellNumber in search box and Verify the Result of user
#         Then Enter the Search - User Role in search box and Verify the Result of user
# # And Click More filter select- Record Id in search box and Verify the Result of user
# # Then Click on Clear filter of user
# # And Click More filter select- Full name in search box and Verify the Result of user
# # Then Click on Clear filter of user
# # And Click More filter select- Eamil in search box and Verify the Result of user
# # Then Click on Clear filter of user
# # And Click More filter select- Cell Number in search box and Verify the Result of user
# # Then Click on Clear filter of user
# # And Click More filter select- Role Name in search box and Verify the Result of user
# # Then Click on Clear filter of user
# # And Click More filter select- User status in search box and Verify the Result of user
# # Then Click on Clear filter of user










