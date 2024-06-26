Feature: Student Role Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then Close the terms of service window

    Scenario: Stduent can access the dashboard page and check the visiblity
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

        And Click on Repair360 page
        Then I should be redirected to the Repair360 page
        And Verify the Title of Repair360 Page
        # Then Verify the VivacityRepairCenter Tab should be visible
        # And Verify the InHouseRepairCenter tab should be visible
        # Then Verify the StudentRepairCenter tab should be visible
        # And Verify the PartCloset tab should be visible

        And Click on Resources page
        Then I should be redirected to the Resources page
        And Verify the Title of Resources Page
        Then Verify the Instructions Tab should be visible
        And Verify the HowToVideos tab should be visible
        Then Verify the WarrantyInfo tab should be visible

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

    Scenario: Dashboard
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

    # Scenario:My profile and Report Center -NonwarrantyRepairs , DeviceRepairReport
    #     And Click on My profile page
    #     And Click on upload image icon of mp
    #     Then Enter tilte and phone no of mp
    #     And Eelect Email preference of mp
    #     Then click on update button of mp
    #     And Verify the updated successfully of mp

    #     And Click on Report center page
    #     And Click on NonwarrantyRepairs page
    #     Then Select failure Type, Return site and Serial Device of Nwr
    #     And Select Building and Chromebook issue of Nwr
    #     Then Enter the Describe Your Issue of Nwr
    #     And Click on save button of Nwr
    #     Then Verify New Ticket is added of Nwr
    #     And Click More filter select- Record Id in search box and Verify the Result of Nwr
    #     Then Click on Clear filter of Nwr
    #     And Click More filter select- Ticket Number in search box and Verify the Result of Nwr
    #     Then Click on Clear filter of Nwr
    #     And Click More filter select- Repair type in search box and Verify the Result of Nwr
    #     Then Click on Clear filter of Nwr
    #     And Click More filter select- Serial Number in search box and Verify the Result of Nwr
    #     Then Click on Clear filter of Nwr
    #     And Click More filter select- Repair device in search box and Verify the Result of Nwr
    #     Then Click on Clear filter of Nwr
    #     And Click More filter select- Repair status in search box and Verify the Result of Nwr
    #     Then Click on Clear filter of Nwr
    #     And Click More filter select- Asset tag in search box and Verify the Result of Nwr
    #     Then Click on Clear filter of Nwr
    #     And Click More filter select- Repair Box in search box and Verify the Result of Nwr
    #     Then Click on Clear filter of Nwr
    #     And Click More filter select- Created By in search box and Verify the Result of Nwr
    #     Then Click on Clear filter of Nwr
    #     And Enter the Search - Record Id in search box and Verify the Result of Nwr
    #     Then Enter the Search - Repair type in search box and Verify the Result of Nwr
    #     Then Enter the Search - Repair status in search box and Verify the Result of Nwr

    #     And Click on Report center page
    #     And Click on DeviceRepairReport page
    #     And Click More filter select- Record Id in search box and Verify the Result of drr
    #     Then Click on Clear filter of drr
    #     And Click More filter select- Ticket Number in search box and Verify the Result of drr
    #     Then Click on Clear filter of drr
    #     And Click More filter select- Repair type in search box and Verify the Result of drr
    #     Then Click on Clear filter of drr
    #     And Click More filter select- Serial Number in search box and Verify the Result of drr
    #     Then Click on Clear filter of drr
    #     And Click More filter select- Repair device in search box and Verify the Result of drr
    #     Then Click on Clear filter of drr
    #     And Click More filter select- Repair status in search box and Verify the Result of drr
    #     Then Click on Clear filter of drr
    #     And Click More filter select- Asset tag in search box and Verify the Result of drr
    #     Then Click on Clear filter of drr
    #     And Click More filter select- Repair Box in search box and Verify the Result of drr
    #     Then Click on Clear filter of drr
    #     And Click More filter select- Created By in search box and Verify the Result of drr
    #     Then Click on Clear filter of drr
    #     And Enter the Search - Record Id in search box and Verify the Result of drr
    #     Then Enter the Search - Repair type in search box and Verify the Result of drr
    #     Then Enter the Search - Repair status in search box and Verify the Result of drr
    #     And Enter the Search - Repair Box in search box and Verify the Result of drr






