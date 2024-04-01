Feature: Vivacity Admin Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then Close the terms of service window

    Scenario: Vivacity Admin can access the dashboard page and check the visiblity
        Then I should be redirected to the dashboard page
        And Verify the Title of dashborad Page
        Then My Account Detail tab should be visible
        And Building tab should be visible

        And Click on Report center page
        Then I should be redirected to the Report center page
        And Verify the Title of Report center Page
        Then Verify the VivacityRepairReport Tab should be visible
        And Verify the InHouseRepairReport tab should be visible
        Then Verify the DeviceRepairReport tab should be visible
        And Verify the NonwarrantyRepairs tab should be visible

        And Click on ManageDevices page
        Then I should be redirected to theManageDevices page
        And Verify the Title of ManageDevices Page
        Then Verify the My Fleet Tab should be visible
        And Verify the Loaner Management tab should be visible
        Then Verify the Import Serial Devices tab should be visible
        And Verify the Organization Uploaded Assets tab should be visible


        And Click on Repair360 page
        Then I should be redirected to the Repair360 page
        And Verify the Title of Repair360 Page
        Then Verify the VivacityRepairCenter Tab should be visible
        And Verify the InHouseRepairCenter tab should be visible
        Then Verify the StudentRepairCenter tab should be visible
        And Verify the PartCloset tab should be visible

        And Click on Resources page
        Then I should be redirected to the Resources page
        And Verify the Title of Resources Page
        Then Verify the Instructions Tab should be visible
        And Verify the HowToVideos tab should be visible
        Then Verify the WarrantyInfo tab should be visible

        And Click on My profile page
        Then Verify the Title of My Profile Page

        And Click on Support page
        Then Verify the Title of Support Page

    And Click on Vivacity Admin page
        Then All Paid Subscription Requests unit should be visible
        And Roadmap Requests unit should be visible
        Then Admin Users unit should be visible
        And Employee management unit should be visible
        And Warranties unit should be visible
        Then Import Serial Device unit should be visible
        And Account Management unit should be visible
        Then New User Creation Requests unit should be visible
        And All Users unit should be visible
        Then Repair Ticket Creation unit should be visible
        And Import serial device Request should be visible
        Then Spoof Dream User should be visible
        And Import Parts Closet should be visible

        And Click on features page
        Then I should be redirected to the Features page
        And Verify the Title of Features Page
        Then Verify the Under Consideration Tab should be visible
        And Verify the Under Construction tab should be visible
        Then Verify the Launched tab should be visible

    Scenario: Dashboard
        Then Account Details -Aaccount Name and no should be visible of acc
        And Account Manager,Billing Address and Shipping Address should be visible of acc
        #   And Click More filter select- Record Id in search box and Verify the Result of acc
        #     Then Click on Clear filter of acc
        #     And Click More filter select- Full name in search box and Verify the Result of acc
        #     Then Click on Clear filter of acc
        #     And Click More filter select- Title in search box and Verify the Result of acc
        #     Then Click on Clear filter of acc
        #     And Click More filter select- Eamil in search box and Verify the Result of acc
        #     Then Click on Clear filter of acc
        #     And Click More filter select- User Role in search box and Verify the Result of acc
        #     Then Click on Clear filter of acc
        #     And Click More filter select- Phone in search box and Verify the Result of acc
        #     Then Click on Clear filter of acc
        #     And Click More filter select- User Status in search box and Verify the Result of acc
        #     Then Click on Clear filter of acc
        And Enter the Search - Record Id in search box and Verify the Result of acc
        And Enter the Search - Full name in search box and Verify the Result of acc
        Then Enter the Search - Email in search box and Verify the Result of acc
        And Enter the Search - Title in search box and Verify the Result of acc
        Then Enter the Search - Phone in search box and Verify the Result of acc
        And Click on Export To CSV of acc
        # Then Click on Bulk Upload button of acc
        # And Click on Attach CSV file and Click on submit button of acc
        # Then Verify the Uploaded successfully of acc

        And Click on Buildings Tab
        Then I should click on + Add New button of build
        And I should Enter Building Name,Phone and Extension of build
        Then Select Default building of build
        And Enter Billing Address and select from dropdown of build
        Then Click on checkbox Same as Shipping Address of build
        And Click on save button of build
        Then Verify the builing details added in table of build
        And Click on My Account Details Tab
        Then I should click on Add New button of acc
        And Verify the tilte of Add New Contact page of acc
        Then Enter title, full name and valid Email of acc
        And Enter Phone and Cell Number of acc
        Then Select User Role and Building from Dropdown List of acc
        And Click on save button of acc
        Then Verify the account details added in table of acc
        And Verify the record in searching history of acc
        And Click on Edit Icon of acc
        Then I should edit title, full name of acc
        And I should edit Phone and Cell Number and user role of acc
        Then I edit User Status to inactive of acc
        Then Click on Submit button of acc
        And Verify the Record has been updated Meassage of acc
        And Click on Delete Icon of acc
        Then Click on Confirm Delete button of acc
        And Verify the record is deleted successfully of acc
        And Click on Buildings Tab
        And Click on Edit Icon of build
        And I should edit Building Name,Phone and Extension of build
        Then I should edit Select Default building
        Then Click on update button of build
        And Verify the Record has been updated Meassage of build
        And Click on Delete Icon of build
        Then Click on Confirm Delete button of build
        And Verify the record is deleted successfully of build

          And Click on Buildings Tab
        # And Click More filter select- Record Id in search box and Verify the Result of build
        # Then Click on Clear filter of build
        # And Click More filter select- Building Name in search box and Verify the Result of build
        # Then Click on Clear filter of build
        # And Click More filter select- Default Building in search box and Verify the Result of build
        # Then Click on Clear filter of build
        # And Click More filter select- Phone in search box and Verify the Result of build
        # Then Click on Clear filter of build
        # And Click More filter select- Building Shipping Address in search box and Verify the Result of build
        # Then Click on Clear filter of build
        # And Click More filter select- Building Billing Address in search box and Verify the Result of build
        # Then Click on Clear filter of build
        And Enter the Search - Building Name in search box and Verify the Result of build
        # Then Enter the Search - Building Shipping Address in search box and Verify the Result of build
        And Enter the Search - Phone in search box and Verify the Result of build
        And Click on Export To CSV of build
        Then Click on Bulk Upload button of build
        And Click on Attach CSV file and Click on submit button of build
        Then Verify the Uploaded successfully of build

        # Scenario: Repair360 -repaireBox
        #     Then Click on Repair360 page
        #     And Click on RepairBoxes Tab
        #     Then I should click on create new Box of rb
        #     Then Enter weight, height, depth and width of rb
        #     And Select Pick-up site of rb
        #     Then Check the need shipping box of rb
        #     And Click on Create box button of rb
        #     Then Select Ticket from dropdownlist of rb
        #     And Click on Finish button of rb
        #     Then Verify new box is added in table of rb
        #     And Enter the Search - Tracking Number in search box and Verify the Result of rb
        #     Then Enter the Search - Record Id in search box and Verify the Result of rb

    # Scenario: Users
    #     And Click on Users page
    #     Then I should click on Add New student of user
    #     Then Enter full name, title and Email of user
    #     And Enter Phone and Cell Number of user
    #     And Click on submit button of user
    #     Then Verify the student added in table of user
    #     And Click on Edit button of user
    #     Then I should edit title, full name of user
    #     And I should edit Phone and Cell Number and user role of user
    #     Then I edit User Status to inactive of user
    #     And I edit Building of user
    #     Then Click on Submit button of user
    #     # And Verify the Record has been updated Meassage of user
    #     And Click on Delete button of user
    #     Then Click on Confirm Delete button of user
    #     # And Verify the record is deleted successfully of user
    #     Then Click on Download button of user
    #     And Enter the Search - Record Id in search box and Verify the Result of user
    #     Then Enter the Search - Full Name in search box and Verify the Result of user
    #     And Enter the Search - Email in search box and Verify the Result of user
    #     Then Enter the Search - Phone in search box and Verify the Result of user
    #     And Enter the Search - CellNumber in search box and Verify the Result of user
    #     Then Enter the Search - User Role in search box and Verify the Result of user
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


        # Scenario: Repair360   -repaireTicket
        #     And Click on Repair360 page
        #     Then I should click on create new ticket of rt
        #     Then Select failure Type, Return site and Serial Device of rt
        #     And Select Building and Chromebook issue of rt
        #     Then Enter the Describe Your Issue of rt
        #     And Click on save button of rt
        #     Then Verify New Ticket is added of rt
        #     And Enter the Search - Ticket Number in search box and Verify the Result of rt
        #     Then Enter the Search - Repair type in search box and Verify the Result of rt
        #     Then Enter the Search - Repair status in search box and Verify the Result of rt
        #     And Enter the Search - Repair Box in search box and Verify the Result of rt
        #     Then Enter the Search - Asset tag in search box and Verify the Result of rt
        # # And Click More filter select- Record Id in search box and Verify the Result of rt
        # # Then Click on Clear filter of rt
        # # And Click More filter select- Ticket Number in search box and Verify the Result of rt
        # # Then Click on Clear filter of rt
        # # And Click More filter select- Repair type in search box and Verify the Result of rt
        # # Then Click on Clear filter of rt
        # # And Click More filter select- Serial Number in search box and Verify the Result of rt
        # # Then Click on Clear filter of rt
        # # And Click More filter select- Repair device in search box and Verify the Result of rt
        # # Then Click on Clear filter of rt
        # # And Click More filter select- Repair status in search box and Verify the Result of rt
        # # Then Click on Clear filter of rt
        # # And Click More filter select- Repair Box in search box and Verify the Result of rt
        # # Then Click on Clear filter of rt
        # # And Click More filter select- Asset tag in search box and Verify the Result of rt
        # # Then Click on Clear filter of rt
        # # And Click More filter select- Created By in search box and Verify the Result of rt
        # # Then Click on Clear filter of rt


    Scenario: Repair360-InHouseRepairCenter - InHouseTickets
        Then Click on Repair360 page
        And Click on InHouseRepairCenter tab
        Then Click All InHouseTickets tab
         And Enter the Search - Record Id in search box and Verify the Result of Inrt
        Then Enter the Search - Ticket Number in search box and Verify the Result of Inrt
        And Enter the Search - Repair type in search box and Verify the Result of Inrt
        Then Enter the Search - Repair status in search box and Verify the Result of Inrt
        Then I should click on Create new button of Inrt
        And Select failure Type, Serial Device, Technician, issue and Building of Inrt
        Then Enter the Chromebook issue of Inrt
        And Click on save button of Inrt
        Then Verify New Ticket is added of Inrt
        And Click on Download Export button of Inrt
        # And Click More filter select- Record Id in search box and Verify the Result of Inrt
        # Then Click on Clear filter of Inrt
        # And Click More filter select- Ticket Number in search box and Verify the Result of Inrt
        # Then Click on Clear filter of Inrt
        # And Click More filter select- Repair type in search box and Verify the Result of Inrt
        # Then Click on Clear filter of Inrt
        # And Click More filter select- Serial Number in search box and Verify the Result of Inrt
        # Then Click on Clear filter of Inrt
        # And Click More filter select- Repair device in search box and Verify the Result of Inrt
        # Then Click on Clear filter of Inrt
        # # And Click More filter select- Repair status in search box and Verify the Result of Inrt
        # # Then Click on Clear filter of Inrt
        # And Click More filter select- Asset tag in search box and Verify the Result of Inrt
        # Then Click on Clear filter of Inrt
        # And Click More filter select- internal Technician in search box and Verify the Result of Inrt
        # Then Click on Clear filter of Inrt
        # And Click More filter select- Created By in search box and Verify the Result of Inrt
        # Then Click on Clear filter of Inrt

  Scenario: Repair360-InHouseRepairCenter - InHouseWorkflow
    Then Click on Repair360 page
        And Click on InHouseRepairCenter tab
        And Enter Search ticket no in search box of ihw
        Then Verify search result below of ihw
        And Click on view button of ihw
        Then Verify the Details of student repair ticket of ihw
        And Click on the Edit Ticket Button of ihw
        Then Update the Technician and Repair Status of ihw
        And Click on Update Button of ihw
        Then Verify Updated successfully of ihw
        And Click on Add Line and Verify of ihw
        Then Click on Add Repair Image and Verify of ihw
        And Click on Add Note and Verify of ihw
        Then I should click on new button of ihw
        And Select failure Type, Serial Device, Technician and repair issue of ihw
        Then Select building and Enter the Chromebook issue of ihw
        And Click on save button of ihw
        Then Verify New Ticket is added of ihw

  Scenario:Repair360 create, search - StudentRepairCenter

        Then Click on Repair360 page
        And Click on StudentRepairCenter tab
        Then Click on SrcStudents tab
        And Enter the Search - Full name in search box and Verify the Result of srcs
        Then Enter the Search - Email in search box and Verify the Result of srcs
        And Enter the Search - Status in search box and Verify the Result of srcs
        Then Enter the Search - Phone in search box and Verify the Result of srcs
        Then I should click on Add New student of srcs
        Then Enter title, full name and Email of srcs
        And Enter Phone and Cell Number of srcs
        Then Select User Status of srcs
        And Click on submit button of srcs
        Then Verify the student added in table of srcs
        # And Click More filter select- Full name in search box and Verify the Result of srcs
        # Then Click on Clear filter of srcs
        # And Click More filter select- Title in search box and Verify the Result of srcs
        # Then Click on Clear filter of srcs
        # And Click More filter select- Eamil in search box and Verify the Result of srcs
        # Then Click on Clear filter of srcs
        # And Click More filter select- User status in search box and Verify the Result of srcs
        # Then Click on Clear filter of srcs
      


        Then Click on Repair360 page
        And Click on StudentRepairCenter tab
        Then Click on SrcRepairTickets tab
        And Enter the Search - Record Id in search box and Verify the Result of srcRt
        Then Enter the Search - Ticket Number in search box and Verify the Result of srcRt
        And Enter the Search - Repair type in search box and Verify the Result of srcRt
        Then Enter the Search - Repair status in search box and Verify the Result of srcRt
        # And Click More filter select- Record Id in search box and Verify the Result of srcRt
        # Then Click on Clear filter of srcRt
        # And Click More filter select- Ticket Number in search box and Verify the Result of srcRt
        # Then Click on Clear filter of srcRt
        # And Click More filter select- Repair type in search box and Verify the Result of srcRt
        # Then Click on Clear filter of srcRt
        # And Click More filter select- Serial Number in search box and Verify the Result of srcRt
        # Then Click on Clear filter of srcRt
        # And Click More filter select- Repair device in search box and Verify the Result of srcRt
        # Then Click on Clear filter of srcRt
        # And Click More filter select- Repair status in search box and Verify the Result of srcRt
        # Then Click on Clear filter of srcRt
        # And Click More filter select- Asset tag in search box and Verify the Result of srcRt
        # Then Click on Clear filter of srcRt
        # And Click More filter select- internal Technician in search box and Verify the Result of srcRt
        # Then Click on Clear filter of srcRt
        # And Click More filter select- Created By in search box and Verify the Result of srcRt
        # Then Click on Clear filter of srcRt
        # Then I should click on Create Student Repair Ticket button of srcRt
        # And Select failure Type, Serial Device, Technician and building of srcRt
        # Then Enter the Chromebook issue of srcRt
        # And Click on save button of srcRt
        # Then Verify New Ticket is added of srcRt


        Then Click on Repair360 page
        And Click on StudentRepairCenter tab
        Then Click on SrcFacilitators tab
        And Click More filter select- Full name in search box and Verify the Result of srcF
        Then Click on Clear filter of srcF
        And Click More filter select- Title in search box and Verify the Result of srcF
        Then Click on Clear filter of srcF
        # And Click More filter select- Eamil in search box and Verify the Result of srcF
        # Then Click on Clear filter of srcF
        # And Click More filter select- User status in search box and Verify the Result of srcF
        # Then Click on Clear filter of srcF
        And Enter the Search - Full name in search box and Verify the Result of srcF
        Then Enter the Search - Email in search box and Verify the Result of srcF
        And Enter the Search - Status in search box and Verify the Result of srcF
        Then Enter the Search - Phone in search box and Verify the Result of srcF

 Scenario:Repair360 -Partclosed
        And Click on Repair360 page
        And Click on PartCloset Tab
        And I should click on Add New VT part of pc
        Then Select device and part name of pc
        And Enter quantity and select building of pc
        Then Click on submit button of pc
        And Verify new VT part is added of pc
        Then I should click on Add New custome part
        Then Enter part name, manufacture and parent device of pc
        And Enter part sku and quantity of pc
        Then Click on submit button of pc
        And Verify new custome part is added of pc
        And Enter the Search value in search box of pc
        Then Verify the Results in the table of pc
        And Click on delete button of pc
# Then Verify the recode is deleted of pc


 Scenario:My profile  and feature
        And Click on My profile page
        And Click on upload image icon of mp
        Then Enter tilte and phone no of mp
        And Eelect Email preference of mp
        Then click on update button of mp
        And Verify the updated successfully of mp

        And Click on features page
        And Click More filter select- Title in search box and Verify the Result of ft
        Then Click on Clear filter of ft
    # And Click More filter select- Description in search box and Verify the Result of ft
    # Then Click on Clear filter of ft
    # And Click More filter select- Creator in search box and Verify the Result of ft
    # Then Click on Clear filter of ft


    Scenario:Report Center -NonwarrantyRepairs , DeviceRepairReport
        And Click on Report center page
        And Click on NonwarrantyRepairs page
        Then Select failure Type, Return site and Serial Device of Nwr
        And Select Building and Chromebook issue of Nwr
        Then Enter the Describe Your Issue of Nwr
        And Click on save button of Nwr
        Then Verify New Ticket is added of Nwr
        # And Click More filter select- Record Id in search box and Verify the Result of Nwr
        # Then Click on Clear filter of Nwr
        # And Click More filter select- Ticket Number in search box and Verify the Result of Nwr
        # Then Click on Clear filter of Nwr
        # And Click More filter select- Repair type in search box and Verify the Result of Nwr
        # Then Click on Clear filter of Nwr
        # And Click More filter select- Serial Number in search box and Verify the Result of Nwr
        # Then Click on Clear filter of Nwr
        # And Click More filter select- Repair device in search box and Verify the Result of Nwr
        # Then Click on Clear filter of Nwr
        # And Click More filter select- Repair status in search box and Verify the Result of Nwr
        # Then Click on Clear filter of Nwr
        # And Click More filter select- Asset tag in search box and Verify the Result of Nwr
        # Then Click on Clear filter of Nwr
        # And Click More filter select- Repair Box in search box and Verify the Result of Nwr
        # Then Click on Clear filter of Nwr
        # And Click More filter select- Created By in search box and Verify the Result of Nwr
        # Then Click on Clear filter of Nwr
        And Enter the Search - Record Id in search box and Verify the Result of Nwr
        Then Enter the Search - Repair type in search box and Verify the Result of Nwr
        Then Enter the Search - Repair status in search box and Verify the Result of Nwr

        And Click on Report center page
        And Click on DeviceRepairReport page
        # And Click More filter select- Record Id in search box and Verify the Result of drr
        # Then Click on Clear filter of drr
        # And Click More filter select- Ticket Number in search box and Verify the Result of drr
        # Then Click on Clear filter of drr
        # And Click More filter select- Repair type in search box and Verify the Result of drr
        # Then Click on Clear filter of drr
        # And Click More filter select- Serial Number in search box and Verify the Result of drr
        # Then Click on Clear filter of drr
        # And Click More filter select- Repair device in search box and Verify the Result of drr
        # Then Click on Clear filter of drr
        # # And Click More filter select- Repair status in search box and Verify the Result of drr
        # # Then Click on Clear filter of drr
        # And Click More filter select- Asset tag in search box and Verify the Result of drr
        # Then Click on Clear filter of drr
        # And Click More filter select- Repair Box in search box and Verify the Result of drr
        # Then Click on Clear filter of drr
        # And Click More filter select- Created By in search box and Verify the Result of drr
        # Then Click on Clear filter of drr
        And Enter the Search - Record Id in search box and Verify the Result of drr
        Then Enter the Search - Repair type in search box and Verify the Result of drr
        Then Enter the Search - Repair status in search box and Verify the Result of drr
        And Enter the Search - Repair Box in search box and Verify the Result of drr


    Scenario: Manage device: MyFleet
       And Click on ManageDevices page
        And Click on MyFleet Tab
        Then Click on the add device of MyF
        And Enter Serial no and select device id of MyF
        Then Enter Asset Tag and Select student id of MyF
        And Select lonar status and Device status of MyF
        Then Click on the Submit Button of MyF
        And Verify the device added successfully of MyF
        Then Click on Edit button of MyF
        And Update Asset tag, student info and building information and Click on update button of MyF
        Then Verfiy Record updated successfully of MyF
        # And Click More filter select- Serial Number in search box and Verify the Result of MyF
        # Then Click on Clear filter of MyF
        # And Click More filter select- Asset tag in search box and Verify the Result of MyF
        # Then Click on Clear filter of MyF
        # And Click More filter select- Device in search box and Verify the Result of MyF
        # Then Click on Clear filter of MyF
        # And Click More filter select- Student in search box and Verify the Result of MyF
        # Then Click on Clear filter of MyF
        Then Click on Export To CSV of MyF
        And Enter the table fields in search box of MyF
        And Verify the record in searching history of MyF
        Then Click on view Button of MyF
        And Verify the Warranty Description of MyF

      And Click on ManageDevices page
        And Click on MyFleet Tab
        Then Click on Retired Tab
        Then Click on the add device of MyF
        And Enter Serial no and select device id of MyF
        Then Enter Asset Tag and Select student id of MyF
        And Select lonar status and Device status of MyF
        Then Click on the Submit Button of MyF
        And Verify the device added successfully of MyF
        Then Click on Edit button of MyF
        And Update Asset tag, student info and building information and Click on update button of MyF
        Then Verfiy Record updated successfully of MyF
        # And Click More filter select- Serial Number in search box and Verify the Result of MyF
        # Then Click on Clear filter of MyF
        # And Click More filter select- Asset tag in search box and Verify the Result of MyF
        # Then Click on Clear filter of MyF
        # And Click More filter select- Device in search box and Verify the Result of MyF
        # Then Click on Clear filter of MyF
        # And Click More filter select- Student in search box and Verify the Result of MyF
        # Then Click on Clear filter of MyF
        Then Click on Export To CSV of MyF
        And Enter the table fields in search box of MyF
        And Verify the record in searching history of MyF
        Then Click on view Button of MyF
        And Verify the Warranty Description of MyF

  Scenario: Manage device: ImportSerialDevice,LoanerManagement and OrgUploadAssets
       And Click on ManageDevices page
        And Click on ImportSerialDevices Tab
        # And Click More filter select- Importer in search box and Verify the Result of isd
        # Then Click on Clear filter of isd
        # And Click More filter select- Quantity Devices in search box and Verify the Result of isd
        # Then Click on Clear filter of isd
        # Then I should click on Add New Import of isd
        # Then Upload the CSV import file of isd
        # And Click on submit button of isd
        # And Click on refresh button of isd
        # Then Verify the record in table of isd
        And Click on Download import button of isd
        And Click on Details button of isd
        Then Verify the Device Details of isd

       And Click on ManageDevices page
        And Click on LoanerManagement Tab
        Then Search the serial no in search box of Available Devices section of lm
        And Verify the search result of lm
        Then Click on the Add to loaner pool of lm
        Then Search the serial no in the Available section of lm
        And Click on th add Student button of lm
        Then Enter Fullname, title and email of lm
        And Select status, building and student_id of lm
        Then Click on the submit button of form of lm
        And Verify the student added successfully of lm
        Then Click on check out button of lm
        And Select the student name of lm
        Then Click on the submit button of lm
        And Search the serial no in the check out section of lm
        Then Click on the Check in button of lm
        And Enter note and click on submit button of lm
        Then Verify the device is added in Available section of lm
        And Click on remove from loaner pool button of lm

        Then Click on Manage Devices
        And Click on OrgUploadAssets Tab
        Then I should click on Add Asset of oua
        Then Enter title, full name location and tag of oua
        And Enter note, Type and description of oua
        Then Upload the image file of oua
        And Click on save button of oua
        Then Verify the asset details added in table of oua
        # And Click More filter select- Description in search box and Verify the Result of oua
        # Then Click on Clear filter of oua
        # And Click More filter select- Acquire Location in search box and Verify the Result of oua
        # Then Click on Clear filter of oua
        And Enter the title in search box of oua
        And Verify the record in searching history of oua
        And Click on Edit button of oua
        Then I should edit title, full name location and tag of oua
        And I should edit note, Type and description of oua
        Then ReUpload the image file of oua
        Then Click on save button of oua
        And Verify the Record has been updated Meassage of oua
        And Click on Delete button of oua
        Then Click on Confirm Delete button of oua
        And Verify the record is deleted successfully of oua








