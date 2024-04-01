Feature: Advanced Student Role  Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then Close the terms of service window

    Scenario: Advanced Student can access the dashboard page and check the visiblity
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
        # And Verify the Loaner Management tab should be visible
        # Then Verify the Import Serial Devices tab should be visible
        And Verify the Organization Uploaded Assets tab should be visible

        And Click on Resources page
        Then I should be redirected to the Resources page
        And Verify the Title of Resources Page
        Then Verify the Instructions Tab should be visible
        And Verify the HowToVideos tab should be visible
        Then Verify the WarrantyInfo tab should be visible

        And Click on Repair360 page
        Then I should be redirected to the Repair360 page
        # And Verify the Title of Repair360 Page
        # Then Verify the VivacityRepairCenter Tab should be visible
        And Verify the InHouseRepairCenter tab should be visible
         Then Verify the StudentRepairCenter tab should be visible
        # And Verify the PartCloset tab should be visible

        # And Click on My profile page
        # Then Verify the Title of My Profile Page

        # And Click on Support page
        # Then Verify the Title of Support Page

        # And Click on features page
        # Then I should be redirected to the Features page
        # And Verify the Title of Features Page
        # Then Verify the Under Consideration Tab should be visible
        # And Verify the Under Construction tab should be visible
        # Then Verify the Launched tab should be visible

    Scenario:Dashboard

          And Click More filter select- Record Id in search box and Verify the Result of acc
            Then Click on Clear filter of acc
            And Click More filter select- Full name in search box and Verify the Result of acc
            Then Click on Clear filter of acc
            And Click More filter select- Title in search box and Verify the Result of acc
            Then Click on Clear filter of acc
            And Click More filter select- Eamil in search box and Verify the Result of acc
            Then Click on Clear filter of acc
            And Click More filter select- User Role in search box and Verify the Result of acc
            Then Click on Clear filter of acc
            And Click More filter select- Phone in search box and Verify the Result of acc
            Then Click on Clear filter of acc
            And Click More filter select- User Status in search box and Verify the Result of acc
            Then Click on Clear filter of acc
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
        And Click More filter select- Record Id in search box and Verify the Result of build
        Then Click on Clear filter of build
        And Click More filter select- Building Name in search box and Verify the Result of build
        Then Click on Clear filter of build
        And Click More filter select- Default Building in search box and Verify the Result of build
        Then Click on Clear filter of build
        And Click More filter select- Phone in search box and Verify the Result of build
        Then Click on Clear filter of build
        And Click More filter select- Building Shipping Address in search box and Verify the Result of build
        Then Click on Clear filter of build
        And Click More filter select- Building Billing Address in search box and Verify the Result of build
        Then Click on Clear filter of build
        And Enter the Search - Building Name in search box and Verify the Result of build
        # Then Enter the Search - Building Shipping Address in search box and Verify the Result of build
        And Enter the Search - Phone in search box and Verify the Result of build
    # And Click on Export To CSV of build
    # Then Click on Bulk Upload button of build
    # And Click on Attach CSV file and Click on submit button of build
    # Then Verify the Uploaded successfully of build

    Scenario: Report center
        And Click on Report center page
        And Click on DeviceRepairReport page
        And Click More filter select- Record Id in search box and Verify the Result of drr
        Then Click on Clear filter of drr
        And Click More filter select- Ticket Number in search box and Verify the Result of drr
        Then Click on Clear filter of drr
        And Click More filter select- Repair type in search box and Verify the Result of drr
        Then Click on Clear filter of drr
        And Click More filter select- Serial Number in search box and Verify the Result of drr
        Then Click on Clear filter of drr
        And Click More filter select- Repair device in search box and Verify the Result of drr
        Then Click on Clear filter of drr
        And Click More filter select- Repair status in search box and Verify the Result of drr
        Then Click on Clear filter of drr
        And Click More filter select- Asset tag in search box and Verify the Result of drr
        Then Click on Clear filter of drr
        And Click More filter select- Repair Box in search box and Verify the Result of drr
        Then Click on Clear filter of drr
        And Click More filter select- Created By in search box and Verify the Result of drr
        Then Click on Clear filter of drr
        And Enter the Search - Record Id in search box and Verify the Result of drr
        Then Enter the Search - Repair type in search box and Verify the Result of drr
        Then Enter the Search - Repair status in search box and Verify the Result of drr
        And Enter the Search - Repair Box in search box and Verify the Result of drr

    And Click on Report center page
    And Click on NonwarrantyRepairs page
    # Then Select failure Type, Return site and Serial Device of Nwr
    # And Select Building and Chromebook issue of Nwr
    # Then Enter the Describe Your Issue of Nwr
    # And Click on save button of Nwr
    # Then Verify New Ticket is added of Nwr
    And Click More filter select- Record Id in search box and Verify the Result of Nwr
    Then Click on Clear filter of Nwr
    And Click More filter select- Ticket Number in search box and Verify the Result of Nwr
    Then Click on Clear filter of Nwr
    And Click More filter select- Repair type in search box and Verify the Result of Nwr
    Then Click on Clear filter of Nwr
    And Click More filter select- Serial Number in search box and Verify the Result of Nwr
    Then Click on Clear filter of Nwr
    And Click More filter select- Repair device in search box and Verify the Result of Nwr
    Then Click on Clear filter of Nwr
    And Click More filter select- Repair status in search box and Verify the Result of Nwr
    Then Click on Clear filter of Nwr
    And Click More filter select- Asset tag in search box and Verify the Result of Nwr
    Then Click on Clear filter of Nwr
    And Click More filter select- Repair Box in search box and Verify the Result of Nwr
    Then Click on Clear filter of Nwr
    And Click More filter select- Created By in search box and Verify the Result of Nwr
    Then Click on Clear filter of Nwr
    And Enter the Search - Record Id in search box and Verify the Result of Nwr
    Then Enter the Search - Repair type in search box and Verify the Result of Nwr
    Then Enter the Search - Repair status in search box and Verify the Result of Nwr

     Scenario:Manage device
    #     And Click on ManageDevices page
    #     And Click on MyFleet Tab
    #     Then Click on Edit button of mf
    #     And Update Asset tag, student info and building information and Click on update button of mf
    #     Then Verfiy Record updated successfully of mf
    #     And Click More filter select- Serial Number in search box and Verify the Result of mf
    #     Then Click on Clear filter of mf
    #     And Click More filter select- Asset tag in search box and Verify the Result of mf
    #     Then Click on Clear filter of mf
    #     And Click More filter select- Device in search box and Verify the Result of mf
    #     Then Click on Clear filter of mf
    #     And Click More filter select- Student in search box and Verify the Result of mf
    #     Then Click on Clear filter of mf
    #     And Enter the table fields in search box of mf
    #     And Verify the record in searching history of mf
    #     Then Click on view Button of mf
    #     And Verify the Warranty Description of mf

        # And Click on ManageDevices page
        # And Click on MyFleet Tab
        # Then Click on Retired Tab
        # Then Click on Edit button of mf
        # And Update Asset tag, student info and building information and Click on update button of mf
        # Then Verfiy Record updated successfully of mf
        # And Click More filter select- Serial Number in search box and Verify the Result of mf
        # Then Click on Clear filter of mf
        # And Click More filter select- Asset tag in search box and Verify the Result of mf
        # Then Click on Clear filter of mf
        # And Click More filter select- Device in search box and Verify the Result of mf
        # Then Click on Clear filter of mf
        # And Click More filter select- Student in search box and Verify the Result of mf
        # Then Click on Clear filter of mf
        #    And Enter the table fields in search box of mf
        # And Verify the record in searching history of mf
        # Then Click on view Button of mf
        # And Verify the Warranty Description of mf

        And Click on ManageDevices page
        And Click on OrgUploadAssets Tab
        And Click More filter select- Description in search box and Verify the Result of oua
        Then Click on Clear filter of oua
        And Click More filter select- Acquire Location in search box and Verify the Result of oua
        Then Click on Clear filter of oua

        # And Click on ManageDevices page
        # And Click on LoanerManagement Tab
        # Then Search the serial no in search box of Available Devices section of lm
        # And Verify the search result of lm
        # Then Click on the Add to loaner pool of lm
        # Then Search the serial no in the Available section of lm
        # And Click on th add Student button of lm
        # Then Enter Fullname, title and email of lm
        # And Select status, building and student_id of lm
        # Then Click on the submit button of form of lm
        # And Verify the student added successfully of lm
        # Then Click on check out button of lm
        # And Select the student name of lm
        # Then Click on the submit button of lm
        # And Search the serial no in the check out section of lm
        # Then Click on the Check in button of lm
        # And Enter note and click on submit button of lm
        # Then Verify the device is added in Available section of lm
        # And Click on remove from loaner pool button of lm

        # And Click on ImportSerialDevices Tab
        # And Click More filter select- Importer in search box and Verify the Result of ims
        # Then Click on Clear filter of ims
        # And Click More filter select- Quantity Devices in search box and Verify the Result of ims
        # Then Click on Clear filter of ims

    # Scenario: MYprofile ,support and feature
    #     And Click on My profile page of mp
    #     And Click on upload image icon of mp
    #     Then Enter tilte and phone no of mp
    #     And Eelect Email preference of mp
    #     Then click on update button of mp
    #     And Verify the updated successfully of mp

    #     And Click on Support page
    #     And Enter Full name of sup
    #     Then Select task Priority and Topic of sup
    #     And Upload the image and enter Notes of sup
    #     Then Click on submit button of sup
    #     And Verify the Send Feedback successfully of sup

    #     And Click on features page
    #     And Click More filter select- Title in search box and Verify the Result of ft
    #     Then Click on Clear filter of ft
# And Click More filter select- Description in search box and Verify the Result of ft
# Then Click on Clear filter of ft
# And Click More filter select- Creator in search box and Verify the Result of feat
# Then Click on Clear filter of ft
 


# And Click on Repair360 page
# Then I should click on create new ticket of rt
# Then Select failure Type, Return site and Serial Device of rt
# And Select Building and Chromebook issue of rt
# Then Enter the Describe Your Issue of rt
# And Click on save button of rt
# Then Verify New Ticket is added of rt

# Then Click on Repair360 page
# And Click on RepairBoxes Tab
# Then I should click on create new Box of rb
# Then Enter weight, height, depth and width of rb
# And Select Pick-up site of rb
# Then Check the need shipping box of rb
# And Click on Create box button of rb
# Then Select Ticket from dropdownlist of rb
# And Click on Finish button of rb
# Then Verify new box is added in table of rb

# And Click on Repair360 page
# And Click on PartCloset Tab
# And I should click on Add New VT part of pc
# Then Select device and part name of pc
# And Enter quantity and select building of pc
# Then Click on submit button of pc
# And Verify new VT part is added of pc
# Then I should click on Add New custome part
# Then Enter part name, manufacture and parent device of pc
# And Enter part sku and quantity of pc
# Then Click on submit button of pc
# And Verify new custome part is added of pc
# And Enter the Search value in search box of pc
# Then Verify the Results in the table of pc
# And Click on delete button of pc
# Then Verify the recode is deleted of pc

