Feature: MyFleet  Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then close the terms of service window
        Then Click on Manage Devices
        And Click on MyFleet Tab

    Scenario: Active Visibility,add Device,add more filter, view ,Clear filter and Search
        And Verify the Title of MyFleet Page
        And Click on filter of Serial Number contain in search box and Verify the Result
        And Click on filter of Serial Number Does not contain in search box and Verify the Result
        And Click on filter of Serial Number Equals in search box and Verify the Result
        And Click on filter of Serial Number Does not equal in search box and Verify the Result
        And Click on filter of Serial Number Begins with in search box and Verify the Result
        And Click on filter of Serial Number Ends with in search box and Verify the Result
        And Click on filter of Serial Number Blank in search box and Verify the Result
        And Click on filter of Serial Number Not blank in search box and Verify the Result

        And Click on filter of Asset tag contain in search box and Verify the Result
        And Click on filter of Asset tag Does not contain in search box and Verify the Result
        And Click on filter of Asset tag Equals in search box and Verify the Result
        And Click on filter of Asset tag Does not equal in search box and Verify the Result
        And Click on filter of Asset tag Begins with in search box and Verify the Result
        And Click on filter of Asset tag Ends with in search box and Verify the Result
        And Click on filter of Asset tag Blank in search box and Verify the Result
        And Click on filter of Asset tag Not blank in search box and Verify the Result

        And Click on filter of Model contain in search box and Verify the Result
        And Click on filter of Model Does not contain in search box and Verify the Result
        And Click on filter of Model Equals in search box and Verify the Result
        And Click on filter of Model Does not equal in search box and Verify the Result
        And Click on filter of Model Begins with in search box and Verify the Result
        And Click on filter of Model Ends with in search box and Verify the Result
        And Click on filter of Model Blank in search box and Verify the Result
        And Click on filter of Model Not blank in search box and Verify the Result

        And Click on filter of SKU contain in search box and Verify the Result
        And Click on filter of SKU Does not contain in search box and Verify the Result
        And Click on filter of SKU Equals in search box and Verify the Result
        And Click on filter of SKU Does not equal in search box and Verify the Result
        And Click on filter of SKU Begins with in search box and Verify the Result
        And Click on filter of SKU Ends with in search box and Verify the Result
        And Click on filter of SKU Blank in search box and Verify the Result
        And Click on filter of SKU Not blank in search box and Verify the Result

        And Click on filter of Building contain in search box and Verify the Result
        And Click on filter of Building Does not contain in search box and Verify the Result
        And Click on filter of Building Equals in search box and Verify the Result
        And Click on filter of Building Does not equal in search box and Verify the Result
        And Click on filter of Building Begins with in search box and Verify the Result
        And Click on filter of Building Ends with in search box and Verify the Result
        And Click on filter of Building Blank in search box and Verify the Result
        And Click on filter of Building Not blank in search box and Verify the Result

        And Click on filter of Organizational Unit contain in search box and Verify the Result
        And Click on filter of Organizational Unit Does not contain in search box and Verify the Result
        And Click on filter of Organizational Unit Equals in search box and Verify the Result
        And Click on filter of Organizational Unit Does not equal in search box and Verify the Result
        # And Click on filter of Organizational Unit Begins with in search box and Verify the Result
        # And Click on filter of Organizational Unit Ends with in search box and Verify the Result
        And Click on filter of Organizational Unit Blank in search box and Verify the Result
        And Click on filter of Organizational Unit Not blank in search box and Verify the Result

        And Click on filter of User contain in search box and Verify the Result
        And Click on filter of User Does not contain in search box and Verify the Result
        And Click on filter of User Equals in search box and Verify the Result
        And Click on filter of User Does not equal in search box and Verify the Result
        And Click on filter of User Begins with in search box and Verify the Result
        And Click on filter of User Ends with in search box and Verify the Result
        And Click on filter of User Blank in search box and Verify the Result
        And Click on filter of User Not blank in search box and Verify the Result

        And Click on filter of Warranty contain in search box and Verify the Result
        And Click on filter of Warranty Does not contain in search box and Verify the Result
        And Click on filter of Warranty Equals in search box and Verify the Result
        And Click on filter of Warranty Does not equal in search box and Verify the Result
        And Click on filter of Warranty Begins with in search box and Verify the Result
        And Click on filter of Warranty Ends with in search box and Verify the Result
        And Click on filter of Warranty Blank in search box and Verify the Result
        And Click on filter of Warranty Not blank in search box and Verify the Result

        And Click on filter of Warranty End Date Equals in search box and Verify the Result
        And Click on filter of Warranty End Date Does not equal in search box and Verify the Result
        And Click on filter of Warranty End Date Before in search box and Verify the Result
        And Click on filter of Warranty End Date After in search box and Verify the Result
        And Click on filter of Warranty End Date Between in search box and Verify the Result
        And Click on filter of Warranty End Date Blank in search box and Verify the Result
        And Click on filter of Warranty End Date Not blank in search box and Verify the Result

    # Then Click on the add device
    # And Enter Serial no and select device id
    # Then Enter Asset Tag and Select student id
    # And Select lonar status and Device status
    # Then Click on the Submit Button
    # And Verify the device added successfully
    # Then Click on Export To CSV
    # And Enter the table fields in search box
    # And Verify the record in searching history
    # Then Click on deviceIcon and click on view Button
    # And Verify the General Device Information
    # Then Click on Edit button of General info
    # And Update Asset tag and Click on save button
    # Then Verfiy General info Record updated successfully
    # Then Click on Edit button of Assignment
    # And Update student, building, loner status and Click on save button
    # Then Verfiy Assignment Record updated successfully
    # And Convert Active to Retired device
    # Then Verify the Device Retired successfully
    # Then Click on Retired Tab
    # And Convert Retired to Active device
    # Then Verify the Device Active successfully


    # Scenario: Google Data
    #     And Enter the table fields in search box for google data record
    #     Then Verify the record in searching history for google data
    #     And Click on the Google Icon and click on view Button
    #     Then Verify the google data and GoLocation section
    #     And Click on the edit of google data section
    #     Then Update the note
    #     And Verfiy Google data Record updated successfully
    #     Then Click on CPU Status and verify CPU Information
    #     And Click on Memory Information and verify Memory Information
    #     Then Click on Network Information and verify Network Information
    #     And Click on OS Information and verify OS Information
    #     Then Click on Battery Information and verify Battery Information
    #     And Click on Storage Information and verify Storage Information
    #     Then Click on Boot Performance Report and Boot Performance Report
    #     And Click on Recent Users Information and verify Recent Users Information


    Scenario: Retired Visibility,add Device,add more filter, view ,Clear filter and Search
        Then Click on Retired Tab
        And Verify the Title of MyFleet Page
        And Click on filter of Serial Number contain in search box and Verify the Result in Retired
        And Click on filter of Serial Number Does not contain in search box and Verify the Result in Retired
        And Click on filter of Serial Number Equals in search box and Verify the Result in Retired
        And Click on filter of Serial Number Does not equal in search box and Verify the Result in Retired
        And Click on filter of Serial Number Begins with in search box and Verify the Result in Retired
        And Click on filter of Serial Number Ends with in search box and Verify the Result in Retired
        And Click on filter of Serial Number Blank in search box and Verify the Result in Retired
        And Click on filter of Serial Number Not blank in search box and Verify the Result in Retired

        And Click on filter of Asset tag contain in search box and Verify the Result in Retired
        And Click on filter of Asset tag Does not contain in search box and Verify the Result in Retired
        And Click on filter of Asset tag Equals in search box and Verify the Result in Retired
        And Click on filter of Asset tag Does not equal in search box and Verify the Result in Retired
        And Click on filter of Asset tag Begins with in search box and Verify the Result in Retired
        And Click on filter of Asset tag Ends with in search box and Verify the Result in Retired
        And Click on filter of Asset tag Blank in search box and Verify the Result in Retired
        And Click on filter of Asset tag Not blank in search box and Verify the Result in Retired

        And Click on filter of Model contain in search box and Verify the Result in Retired
        And Click on filter of Model Does not contain in search box and Verify the Result in Retired
        And Click on filter of Model Equals in search box and Verify the Result in Retired
        And Click on filter of Model Does not equal in search box and Verify the Result in Retired
        And Click on filter of Model Begins with in search box and Verify the Result in Retired
        And Click on filter of Model Ends with in search box and Verify the Result in Retired
        And Click on filter of Model Blank in search box and Verify the Result in Retired
        And Click on filter of Model Not blank in search box and Verify the Result in Retired

        And Click on filter of SKU contain in search box and Verify the Result in Retired
        And Click on filter of SKU Does not contain in search box and Verify the Result in Retired
        And Click on filter of SKU Equals in search box and Verify the Result in Retired
        And Click on filter of SKU Does not equal in search box and Verify the Result in Retired
        And Click on filter of SKU Begins with in search box and Verify the Result in Retired
        And Click on filter of SKU Ends with in search box and Verify the Result in Retired
        And Click on filter of SKU Blank in search box and Verify the Result in Retired
        And Click on filter of SKU Not blank in search box and Verify the Result in Retired

        And Click on filter of Building contain in search box and Verify the Result in Retired
        And Click on filter of Building Does not contain in search box and Verify the Result in Retired
        And Click on filter of Building Equals in search box and Verify the Result in Retired
        And Click on filter of Building Does not equal in search box and Verify the Result in Retired
        And Click on filter of Building Begins with in search box and Verify the Result in Retired
        And Click on filter of Building Ends with in search box and Verify the Result in Retired
        And Click on filter of Building Blank in search box and Verify the Result in Retired
        And Click on filter of Building Not blank in search box and Verify the Result in Retired

        And Click on filter of Organizational Unit contain in search box and Verify the Result in Retired
        And Click on filter of Organizational Unit Does not contain in search box and Verify the Result in Retired
        And Click on filter of Organizational Unit Equals in search box and Verify the Result in Retired
        And Click on filter of Organizational Unit Does not equal in search box and Verify the Result in Retired
        # And Click on filter of Organizational Unit Begins with in search box and Verify the Result in Retired
        # And Click on filter of Organizational Unit Ends with in search box and Verify the Result in Retired
        And Click on filter of Organizational Unit Blank in search box and Verify the Result in Retired
        And Click on filter of Organizational Unit Not blank in search box and Verify the Result in Retired

        And Click on filter of User contain in search box and Verify the Result in Retired
        And Click on filter of User Does not contain in search box and Verify the Result in Retired
        And Click on filter of User Equals in search box and Verify the Result in Retired
        And Click on filter of User Does not equal in search box and Verify the Result in Retired
        And Click on filter of User Begins with in search box and Verify the Result in Retired
        And Click on filter of User Ends with in search box and Verify the Result in Retired
        And Click on filter of User Blank in search box and Verify the Result in Retired
        And Click on filter of User Not blank in search box and Verify the Result in Retired

        And Click on filter of Warranty contain in search box and Verify the Result in Retired
        And Click on filter of Warranty Does not contain in search box and Verify the Result in Retired
        And Click on filter of Warranty Equals in search box and Verify the Result in Retired
        And Click on filter of Warranty Does not equal in search box and Verify the Result in Retired
        And Click on filter of Warranty Begins with in search box and Verify the Result in Retired
        And Click on filter of Warranty Ends with in search box and Verify the Result in Retired
        And Click on filter of Warranty Blank in search box and Verify the Result in Retired
        And Click on filter of Warranty Not blank in search box and Verify the Result in Retired

        And Click on filter of Warranty End Date Equals in search box and Verify the Result in Retired
        And Click on filter of Warranty End Date Does not equal in search box and Verify the Result in Retired
        And Click on filter of Warranty End Date Before in search box and Verify the Result in Retired
        And Click on filter of Warranty End Date After in search box and Verify the Result in Retired
        And Click on filter of Warranty End Date Between in search box and Verify the Result in Retired
        And Click on filter of Warranty End Date Blank in search box and Verify the Result in Retired
        And Click on filter of Warranty End Date Not blank in search box and Verify the Result in Retired
# #     Then Filters of MyFleet should be visible
# #     And Table for MyFleet should be visible
# #     Then Click on the add device
# #     And Enter Serial no and select device id
# #     Then Enter Asset Tag and Select student id
# #     And Select lonar status and Device status
# #     Then Click on the Submit Button
# #     And Verify the device added successfully
# #     And Click More filter select- Serial Number in search box and Verify the Result
# #     Then Click on Clear filter
# #     And Click More filter select- Asset tag in search box and Verify the Result
# #     Then Click on Clear filter
# #     And Click More filter select- Device in search box and Verify the Result
# #     Then Click on Clear filter
# #     And Click More filter select- Student in search box and Verify the Result
# #     Then Click on Clear filter
# #     Then Click on Export To CSV
# #     And Enter the table fields in search box1
# #     And Verify the record in searching history1
# #     Then Click on deviceIcon and click on view Button
# #     And Verify the General Device Information


