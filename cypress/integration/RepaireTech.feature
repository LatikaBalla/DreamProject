Feature: Repaire Tech Page Functionality
    As a repaire tech user
    I want to access the all page
    So that I can view information and do functions

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then Close the terms of service window

    Scenario: Repaire Tech can access application and check the visiblity of all pages
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

    Scenario: Report Center- view the NonwarrantyRepairs ,DeviceRepairReport and Account Details, Buildings visibility
        Then Account Details -Aaccount Name and no should be visible of Account
        And Account Manager,Billing Address and Shipping Address should be visible of Account

        And Click on Buildings Tab
        And Click on Export To CSV of building

        And Click on Report center page
        And Click on DeviceRepairReport page
        And  Click on the View button of DeviceRepairReport
        Then Verify the Repair Ticket page will open of DeviceRepairReport
        And Verfiy the details of Ticket of DeviceRepairReport
        Then Click on the download Ticket Estimation button of DeviceRepairReport
        Then Click on Add Repair Image and Verify of DeviceRepairReport
        And Click on Add Note and Verify of DeviceRepairReport

        And Click on Report center page
        And Click on NonwarrantyRepairs page
        And Click on the view button of NonwarrantyRepairs
        Then Verify the Repair Ticket page will open of NonwarrantyRepairs
        And Verfiy the details of Ticket of NonwarrantyRepairs
        Then Click on Add Repair Image and Verify of NonwarrantyRepairs
        And Click on Add Note and Verify of NonwarrantyRepairs

    Scenario: Manage device: ImportSerialDevices,MyFleet, OrgUploadAssets, LoanerManagement
        And Click on ManageDevices page
        And Click on ImportSerialDevices Tab
        # Then I should click on Add New Import of ImportSerialDevices
        # Then Upload the CSV import file of ImportSerialDevices
        # And Click on submit button of ImportSerialDevices
        And Click on Details button of ImportSerialDevices
        Then Verify the Device Details of ImportSerialDevices

        And Click on ManageDevices page
        And Click on MyFleet Tab
        # Then Click on the add device of MyFleet
        # And Enter Serial no and select device id of MyFleet
        # Then Enter Asset Tag and Select student id of MyFleet
        # And Select lonar status and Device status of MyFleet
        # Then Click on the Submit Button of MyFleet
        # And Verify the device added successfully of MyFleet
        Then Click on Export To CSV of MyFleet
        And Convert Active to Retired device of MyFleet
        Then Verify the Device Retired successfully of MyFleet
        Then Click on Retired Tab
        And Convert Retired to Active device of MyFleet
        Then Verify the Device Active successfully of MyFleet
        Then Click on deviceIcon and click on view Button of MyFleet
        And Verify the General Device Information of MyFleet
        Then Click on Edit button of General info of MyFleet
        And Update Asset tag and Click on save button of MyFleet
        Then Verfiy General info Record updated successfully of MyFleet
        Then Click on Edit button of Assignment of MyFleet
        And Update student, building, loner status and Click on save button of MyFleet
        Then Verfiy Assignment Record updated successfully of MyFleet

        And Click on ManageDevices page
        And Click on OrgUploadAssets Tab
    # Then I should click on Add Asset of OrgUploadAssets 
    # Then Enter title, full name location and tag of OrgUploadAssets 
    # And Enter note, Type and description of OrgUploadAssets 
    # Then Upload the image file of OrgUploadAssets 
    # And Click on save button of OrgUploadAssets 
    # Then Verify the asset details added in table of OrgUploadAssets 
    # And Enter the title in search box of OrgUploadAssets 
    # And Verify the record in searching history of OrgUploadAssets 
    # And Click on Edit button of OrgUploadAssets 
    # Then I should edit title, full name location and tag of OrgUploadAssets 
    # And I should edit note, Type and description of OrgUploadAssets 
    # Then ReUpload the image file of OrgUploadAssets 
    # Then Click on save button of OrgUploadAssets 
    # And Verify the Record has been updated Meassage of OrgUploadAssets 
    # And Click on Delete button of OrgUploadAssets 
    # Then Click on Confirm Delete button of OrgUploadAssets 
    # And Verify the record is deleted successfully of OrgUploadAssets 

    Scenario:Repair360 : VivacityRepairCenter and InHouseRepairCenter
        Then Click on Repair360 page
        And Click on InHouseRepairCenter tab
        Then Click All InHouseTickets tab
        Then I should click on Create new button of InHouseTickets
        And Select failure Type, Serial Device, Technician, issue and Building of InHouseTickets
        Then Enter the Chromebook issue of InHouseTickets
        And Click on save button of InHouseTickets
        Then Verify New Ticket is added of InHouseTickets
        And Click on Download Export button of InHouseTickets
        And Click on view button of InHouseTickets
        Then Verify the Details of student repair ticket of InHouseTickets
        And Click on the Update to student Button of InHouseTickets
        Then Updated to student successfully of InHouseTickets
        And Click on the Update to in house Button of InHouseTickets
        Then Updated to in house successfully of InHouseTickets
        And Click on the Edit Ticket Button of InHouseTickets
        Then Update the Technician and Repair Status of InHouseTickets
        And Click on Update Button of InHouseTickets
        Then Verify Updated successfully of InHouseTickets
        And Click on Add Line and Verify of InHouseTickets
        Then Click on Add Repair Image and Verify of InHouseTickets
        And Click on Add Note and Verify of InHouseTickets

        Then Click on Repair360 page
        And Click on InHouseRepairCenter tab
        Then I should click on new button of InHouseWork
        And Select failure Type, Serial Device, Technician and repair issue of InHouseWork
        Then Select building and Enter the Chromebook issue of InHouseWork
        And Click on save button of InHouseWork
        Then Verify New Ticket is added of InHouseWork
        And Enter Search ticket no in search box of InHouseWork
        Then Verify search result below of InHouseWork
        And Click on view button of InHouseWork
        Then Verify the Details of student repair ticket of InHouseWork
        And Click on the Edit Ticket Button of InHouseWork
        Then Update the Technician and Repair Status of InHouseWork
        And Click on Update Button of InHouseWork
        Then Verify Updated successfully of InHouseWork
        And Click on Add Line and Verify of InHouseWork
        Then Click on Add Repair Image and Verify of InHouseWork
        And Click on Add Note and Verify of InHouseWork

        And Click on Repair360 page
        Then I should click on create new ticket of RepairTickets
        Then Select failure Type, Return site and Serial Device of RepairTickets
        And Select Building and Chromebook issue of RepairTickets
        Then Enter the Describe Your Issue of RepairTickets
        And Click on save button of RepairTickets
        Then Verify New Ticket is added of RepairTickets
        And Click on Download import button of RepairTickets
        And Click on view button of RepairTickets
        Then Verify the Details of student repair ticket of RepairTickets
        Then Click on Add Repair Image and Verify of RepairTickets

        Then Click on Repair360 page
        And Click on RepairBoxes Tab
        Then Click on label form of image and Verify of RepairBoxes
        Then Click on label form of Pdf and Verify of RepairBoxes
        And Click on Export Button of RepairBoxes
        Then I should click on create new Box of RepairBoxes
        Then Enter weight and Standard Box Size of RepairBoxes
        And Select Pick-up site of RepairBoxes
        Then Check the need shipping box of RepairBoxes
        And Click on Create box button of RepairBoxes
        Then Select Ticket from dropdownlist of RepairBoxes
        And Click on Finish button of RepairBoxes
        Then Verify new box is added in table of RepairBoxes
        And Click on view button of RepairBoxes
        Then Verify the Details new box of RepairBoxes
        And Add another ticket in the same box of RepairBoxes
        Then Select Ticket from dropdownlist of RepairBoxes
        And Click on Add ticket of RepairBoxes
        Then Verify the ticket is added in table of RepairBoxes
        And Click on view the ticket Details of RepairBoxes
        Then Verfiy the ticket Details of RepairBoxes
        Then Click on Add Repair Image and Verify of RepairBoxes
        And Click on Add Note and Verify of RepairBoxes
        Then Click on Remove button for deleting ticket of RepairBoxes
        And Verify the ticket removed of RepairBoxes

    Scenario:Repair360 - StudentRepairCenter and Partcloset
        Then Click on Repair360 page
        And Click on StudentRepairCenter tab
        Then Click on SrcStudents tab
        Then I should click on Add New student of SrcStudents
        Then Enter title, full name and Email of SrcStudents
        And Enter Phone and Cell Number of SrcStudents
        Then Select User Status of SrcStudents
        And Click on submit button of SrcStudents
        Then Verify the student added in table of SrcStudents

        Then Click on Repair360 page
        And Click on StudentRepairCenter tab
        Then Click on SrcRepairTickets tab
        Then I should click on Create Student Repair Ticket button of SrcRepairTickets
        And Select failure Type, Serial Device, Technician and building of SrcRepairTickets
        Then Enter the Chromebook issue of SrcRepairTickets
        And Click on save button of SrcRepairTickets
        Then Verify New Ticket is added of SrcRepairTickets
        And Click on view button of SrcRepairTickets
        Then Verify the Details of student repair ticket of SrcRepairTickets
        Then Click on Add Repair Image and Verify of SrcRepairTickets
        And Click on Add Note and Verify of SrcRepairTickets

        Then Click on Repair360 page
        And Click on StudentRepairCenter tab
        Then Click on SrcFacilitators tab
        And Click on Download Export button of SrcFacilitators

        And Click on Repair360 page
        And Click on PartCloset Tab
        # And I should click on Add New VT part of PartCloset
        # Then Select device and part name of PartCloset
        # And Enter quantity and select building of PartCloset
        # Then Click on submit button of PartCloset
        # And Verify new VT part is added of PartCloset
        Then I should click on Add New custome part
        Then Enter part name, manufacture and parent device of PartCloset
        And Enter part sku and quantity of PartCloset
        Then Click on submit button of PartCloset
        And Verify new custome part is added of PartCloset

    Scenario:My profile and feature and support
        And Click on My profile page
        And Click on upload image icon of Myprofile
        Then Enter tilte and phone no of Myprofile
        And Eelect Email preference of Myprofile
        Then click on update button of Myprofile
        And Verify the updated successfully of Myprofile

# And Click on features page
# And Click More filter select- Title in search box and Verify the Result of ft
# Then Click on Clear filter of ft
# # And Click More filter select- Description in search box and Verify the Result of ft
# # Then Click on Clear filter of ft
# And Click More filter select- Creator in search box and Verify the Result of ft
# Then Click on Clear filter of ft

# And Click on Support page
# And Enter Full name of Support
# Then Select task Priority and Topic of Support
# And Upload the image and enter Notes of Support
# Then Click on submit button of Support
# And Verify the Send Feedback successfully of Support