Feature: Repaire Tech Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then Close the terms of service window

    Scenario: Repaire Tech can access the dashboard page and check the visiblity
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

        And Click on My profile page visible
        Then Verify the Title of My Profile Page

        And Click on Support page
        Then Verify the Title of Support Page

        And Click on features page
        Then I should be redirected to the Features page
        And Verify the Title of Features Page
        Then Verify the Under Consideration Tab should be visible
        And Verify the Under Construction tab should be visible
        Then Verify the Launched tab should be visible

    Scenario: Report Center -NonwarrantyRepairs , DeviceRepairReport and Account Details, Buildings
        Then Account Details -Aaccount Name and no should be visible of acc
        And Account Manager,Billing Address and Shipping Address should be visible of acc

        And Click on Buildings Tab
        And Click on Export To CSV of build

        And Click on Report center page
        And Click on DeviceRepairReport page
        And  Click on the View button of drr
        Then Verify the Repair Ticket page will open of drr
        And Verfiy the details of Ticket of drr
        Then Click on the download Ticket Estimation button of drr
        Then Click on Add Repair Image and Verify of drr
        And Click on Add Note and Verify of drr

        And Click on Report center page
        And Click on NonwarrantyRepairs page
        And Click on the view button of Nwr
        Then Verify the Repair Ticket page will open of Nwr
        And Verfiy the details of Ticket of Nwr
        Then Click on Add Repair Image and Verify of Nwr
        And Click on Add Note and Verify of Nwr

    Scenario: Manage device: ImportSerialDevices,MyFleet, OrgUploadAssets, LoanerManagement
        And Click on ManageDevices page
        And Click on ImportSerialDevices Tab
        # Then I should click on Add New Import of isd
        # Then Upload the CSV import file of isd
        # And Click on submit button of isd
        And Click on Details button of isd
        Then Verify the Device Details of isd

        And Click on ManageDevices page
        And Click on MyFleet Tab
        # Then Click on the add device of MyF
        # And Enter Serial no and select device id of MyF
        # Then Enter Asset Tag and Select student id of MyF
        # And Select lonar status and Device status of MyF
        # Then Click on the Submit Button of MyF
        # And Verify the device added successfully of MyF
        Then Click on Export To CSV of MyF
        And Convert Active to Retired device of MyF
        Then Verify the Device Retired successfully of MyF
        Then Click on Retired Tab
        And Convert Retired to Active device of MyF
        Then Verify the Device Active successfully of MyF
        Then Click on deviceIcon and click on view Button of MyF
        And Verify the General Device Information of MyF
        Then Click on Edit button of General info of MyF
        And Update Asset tag and Click on save button of MyF
        Then Verfiy General info Record updated successfully of MyF
        Then Click on Edit button of Assignment of MyF
        And Update student, building, loner status and Click on save button of MyF
        Then Verfiy Assignment Record updated successfully of MyF

        And Click on ManageDevices page
        And Click on OrgUploadAssets Tab
    # Then I should click on Add Asset of oua
    # Then Enter title, full name location and tag of oua
    # And Enter note, Type and description of oua
    # Then Upload the image file of oua
    # And Click on save button of oua
    # Then Verify the asset details added in table of oua
    # And Enter the title in search box of oua
    # And Verify the record in searching history of oua
    # And Click on Edit button of oua
    # Then I should edit title, full name location and tag of oua
    # And I should edit note, Type and description of oua
    # Then ReUpload the image file of oua
    # Then Click on save button of oua
    # And Verify the Record has been updated Meassage of oua
    # And Click on Delete button of oua
    # Then Click on Confirm Delete button of oua
    # And Verify the record is deleted successfully of oua

    Scenario:Repair360 : VivacityRepairCenter and InHouseRepairCenter
        Then Click on Repair360 page
        And Click on InHouseRepairCenter tab
        Then Click All InHouseTickets tab
        Then I should click on Create new button of Inrt
        And Select failure Type, Serial Device, Technician, issue and Building of Inrt
        Then Enter the Chromebook issue of Inrt
        And Click on save button of Inrt
        Then Verify New Ticket is added of Inrt
        And Click on Download Export button of Inrt
        And Click on view button of Inrt
        Then Verify the Details of student repair ticket of Inrt
        And Click on the Update to student Button of Inrt
        Then Updated to student successfully of Inrt
        And Click on the Update to in house Button of Inrt
        Then Updated to in house successfully of Inrt
        And Click on the Edit Ticket Button of Inrt
        Then Update the Technician and Repair Status of Inrt
        And Click on Update Button of Inrt
        Then Verify Updated successfully of Inrt
        And Click on Add Line and Verify of Inrt
        Then Click on Add Repair Image and Verify of Inrt
        And Click on Add Note and Verify of Inrt

        Then Click on Repair360 page
        And Click on InHouseRepairCenter tab
        Then I should click on new button of ihw
        And Select failure Type, Serial Device, Technician and repair issue of ihw
        Then Select building and Enter the Chromebook issue of ihw
        And Click on save button of ihw
        Then Verify New Ticket is added of ihw
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

        And Click on Repair360 page
        Then I should click on create new ticket of rt
        Then Select failure Type, Return site and Serial Device of rt
        And Select Building and Chromebook issue of rt
        Then Enter the Describe Your Issue of rt
        And Click on save button of rt
        Then Verify New Ticket is added of rt
        And Click on Download import button of rt
        And Click on view button of rt
        Then Verify the Details of student repair ticket of rt
        Then Click on Add Repair Image and Verify of rt

        Then Click on Repair360 page
        And Click on RepairBoxes Tab
        Then Click on label form of image and Verify of rb
        Then Click on label form of Pdf and Verify of rb
        And Click on Export Button of rb
        Then I should click on create new Box of rb
        Then Enter weight and Standard Box Size of rb
        And Select Pick-up site of rb
        Then Check the need shipping box of rb
        And Click on Create box button of rb
        Then Select Ticket from dropdownlist of rb
        And Click on Finish button of rb
        Then Verify new box is added in table of rb
        And Click on view button of rb
        Then Verify the Details new box of rb
        And Add another ticket in the same box of rb
        Then Select Ticket from dropdownlist of rb
        And Click on Add ticket of rb
        Then Verify the ticket is added in table of rb
        And Click on view the ticket Details of rb
        Then Verfiy the ticket Details of rb
        Then Click on Add Repair Image and Verify of rb
        And Click on Add Note and Verify of rb
        Then Click on Remove button for deleting ticket of rb
        And Verify the ticket removed of rb

    Scenario:Repair360 - StudentRepairCenter and Partcloset
        Then Click on Repair360 page
        And Click on StudentRepairCenter tab
        Then Click on SrcStudents tab
        Then I should click on Add New student of srcs
        Then Enter title, full name and Email of srcs
        And Enter Phone and Cell Number of srcs
        Then Select User Status of srcs
        And Click on submit button of srcs
        Then Verify the student added in table of srcs

        Then Click on Repair360 page
        And Click on StudentRepairCenter tab
        Then Click on SrcRepairTickets tab
        Then I should click on Create Student Repair Ticket button of srcRt
        And Select failure Type, Serial Device, Technician and building of srcRt
        Then Enter the Chromebook issue of srcRt
        And Click on save button of srcRt
        Then Verify New Ticket is added of srcRt
        And Click on view button of srcRt
        Then Verify the Details of student repair ticket of srcRt
        Then Click on Add Repair Image and Verify of srcRt
        And Click on Add Note and Verify of srcRt

        Then Click on Repair360 page
        And Click on StudentRepairCenter tab
        Then Click on SrcFacilitators tab
        And Click on Download Export button of srcF

        And Click on Repair360 page
        And Click on PartCloset Tab
        # And I should click on Add New VT part of pc
        # Then Select device and part name of pc
        # And Enter quantity and select building of pc
        # Then Click on submit button of pc
        # And Verify new VT part is added of pc
        Then I should click on Add New custome part
        Then Enter part name, manufacture and parent device of pc
        And Enter part sku and quantity of pc
        Then Click on submit button of pc
        And Verify new custome part is added of pc

    Scenario:My profile and feature and support
        And Click on My profile page
        And Click on upload image icon of mp
        Then Enter tilte and phone no of mp
        And Eelect Email preference of mp
        Then click on update button of mp
        And Verify the updated successfully of mp

# And Click on features page
# And Click More filter select- Title in search box and Verify the Result of ft
# Then Click on Clear filter of ft
# # And Click More filter select- Description in search box and Verify the Result of ft
# # Then Click on Clear filter of ft
# And Click More filter select- Creator in search box and Verify the Result of ft
# Then Click on Clear filter of ft

# And Click on Support page
# And Enter Full name of sup
# Then Select task Priority and Topic of sup
# And Upload the image and enter Notes of sup
# Then Click on submit button of sup
# And Verify the Send Feedback successfully of sup