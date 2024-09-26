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

    # Scenario: Active Visibility,add Device,add more filter, view ,Clear filter and Search
    #     And Verify the Title of MyFleet Page
    #     And Click on filter of Serial Number contain and Verify the Result
    #     And Click on filter of Serial Number Does not contain and Verify the Result
    #     And Click on filter of Serial Number Equals and Verify the Result
    #     And Click on filter of Serial Number Does not equal and Verify the Result
    #     And Click on filter of Serial Number Begins with and Verify the Result
    #     And Click on filter of Serial Number Ends with and Verify the Result
    #     And Click on filter of Serial Number Blank and Verify the Result
    #     And Click on filter of Serial Number Not blank and Verify the Result

    #     And Click on filter of Asset tag contain and Verify the Result
    #     And Click on filter of Asset tag Does not contain and Verify the Result
    #     And Click on filter of Asset tag Equals and Verify the Result
    #     And Click on filter of Asset tag Does not equal and Verify the Result
    #     And Click on filter of Asset tag Begins with and Verify the Result
    #     And Click on filter of Asset tag Ends with and Verify the Result
    #     And Click on filter of Asset tag Blank and Verify the Result
    #     And Click on filter of Asset tag Not blank and Verify the Result

    #     And Click on filter of Model contain and Verify the Result
    #     And Click on filter of Model Does not contain and Verify the Result
    #     And Click on filter of Model Equals and Verify the Result
    #     And Click on filter of Model Does not equal and Verify the Result
    #     And Click on filter of Model Begins with and Verify the Result
    #     And Click on filter of Model Ends with and Verify the Result
    #     And Click on filter of Model Blank and Verify the Result
    #     And Click on filter of Model Not blank and Verify the Result

    #     And Click on filter of SKU contain and Verify the Result
    #     And Click on filter of SKU Does not contain and Verify the Result
    #     And Click on filter of SKU Equals and Verify the Result
    #     And Click on filter of SKU Does not equal and Verify the Result
    #     And Click on filter of SKU Begins with and Verify the Result
    #     And Click on filter of SKU Ends with and Verify the Result
    #     And Click on filter of SKU Blank and Verify the Result
    #     And Click on filter of SKU Not blank and Verify the Result

    #     And Click on filter of Building contain and Verify the Result
    #     And Click on filter of Building Does not contain and Verify the Result
    #     And Click on filter of Building Equals and Verify the Result
    #     And Click on filter of Building Does not equal and Verify the Result
    #     And Click on filter of Building Begins with and Verify the Result
    #     And Click on filter of Building Ends with and Verify the Result
    #     And Click on filter of Building Blank and Verify the Result
    #     And Click on filter of Building Not blank and Verify the Result

    #     And Click on filter of Organizational Unit contain and Verify the Result
    #     And Click on filter of Organizational Unit Does not contain and Verify the Result
    #     And Click on filter of Organizational Unit Equals and Verify the Result
    #     And Click on filter of Organizational Unit Does not equal and Verify the Result
    #     And Click on filter of Organizational Unit Begins with and Verify the Result
    #     And Click on filter of Organizational Unit Ends with and Verify the Result
    #     And Click on filter of Organizational Unit Blank and Verify the Result
    #     And Click on filter of Organizational Unit Not blank and Verify the Result

    #     And Click on filter of User contain and Verify the Result
    #     And Click on filter of User Does not contain and Verify the Result
    #     And Click on filter of User Equals and Verify the Result
    #     And Click on filter of User Does not equal and Verify the Result
    #     And Click on filter of User Begins with and Verify the Result
    #     And Click on filter of User Ends with and Verify the Result
    #     And Click on filter of User Blank and Verify the Result
    #     And Click on filter of User Not blank and Verify the Result

    #     And Click on filter of Warranty contain and Verify the Result
    #     And Click on filter of Warranty Does not contain and Verify the Result
    #     And Click on filter of Warranty Equals and Verify the Result
    #     And Click on filter of Warranty Does not equal and Verify the Result
    #     And Click on filter of Warranty Begins with and Verify the Result
    #     And Click on filter of Warranty Ends with and Verify the Result
    #     And Click on filter of Warranty Blank and Verify the Result
    #     And Click on filter of Warranty Not blank and Verify the Result

    #     And Click on filter of Warranty End Date Equals and Verify the Result
    #     And Click on filter of Warranty End Date Does not equal and Verify the Result
    #     And Click on filter of Warranty End Date Before and Verify the Result
    #     And Click on filter of Warranty End Date After and Verify the Result
    #     And Click on filter of Warranty End Date Between and Verify the Result
    #     And Click on filter of Warranty End Date Blank and Verify the Result
    #     And Click on filter of Warranty End Date Not blank and Verify the Result

    #     Then Click on the add device
    #     And Enter Serial no and select device id
    #     Then Enter Asset Tag and Select student id
    #     And Select lonar status and Device status
    #     Then Click on the Submit Button
    #     And Verify the device added successfully
    #     Then Click on Export To CSV
    #     And Convert Active to Retired device
    #     Then Verify the Device Retired successfully
    #     Then Click on Retired Tab
    #     And Convert Retired to Active device
    #     Then Verify the Device Active successfully
    #     Then Click on deviceIcon and click on view Button
    #     And Verify the General Device Information
    #     Then Click on Edit button of General info
    #     And Update Asset tag and Click on save button
    #     Then Verfiy General info Record updated successfully
    #     Then Click on Edit button of Assignment
    #     And Update student, building, loner status and Click on save button
    #     Then Verfiy Assignment Record updated successfully

    # Scenario: Google Data
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
        And Click on filter of Serial Number contain and Verify the Result in Retired
        And Click on filter of Serial Number Does not contain and Verify the Result in Retired
        And Click on filter of Serial Number Equals and Verify the Result in Retired
        And Click on filter of Serial Number Does not equal and Verify the Result in Retired
        And Click on filter of Serial Number Begins with and Verify the Result in Retired
        And Click on filter of Serial Number Ends with and Verify the Result in Retired
        And Click on filter of Serial Number Blank and Verify the Result in Retired
        # And Click on filter of Serial Number Not blank and Verify the Result in Retired

        And Click on filter of Asset tag contain and Verify the Result in Retired
        And Click on filter of Asset tag Does not contain and Verify the Result in Retired
        And Click on filter of Asset tag Equals and Verify the Result in Retired
        And Click on filter of Asset tag Does not equal and Verify the Result in Retired
        And Click on filter of Asset tag Begins with and Verify the Result in Retired
        And Click on filter of Asset tag Ends with and Verify the Result in Retired
        And Click on filter of Asset tag Blank and Verify the Result in Retired
        # And Click on filter of Asset tag Not blank and Verify the Result in Retired

        And Click on filter of Model contain and Verify the Result in Retired
        And Click on filter of Model Does not contain and Verify the Result in Retired
        And Click on filter of Model Equals and Verify the Result in Retired
        And Click on filter of Model Does not equal and Verify the Result in Retired
        And Click on filter of Model Begins with and Verify the Result in Retired
        And Click on filter of Model Ends with and Verify the Result in Retired
        And Click on filter of Model Blank and Verify the Result in Retired
        # And Click on filter of Model Not blank and Verify the Result in Retired

        And Click on filter of SKU contain and Verify the Result in Retired
        And Click on filter of SKU Does not contain and Verify the Result in Retired
        And Click on filter of SKU Equals and Verify the Result in Retired
        And Click on filter of SKU Does not equal and Verify the Result in Retired
        And Click on filter of SKU Begins with and Verify the Result in Retired
        And Click on filter of SKU Ends with and Verify the Result in Retired
        And Click on filter of SKU Blank and Verify the Result in Retired
        # And Click on filter of SKU Not blank and Verify the Result in Retired

        And Click on filter of Building contain and Verify the Result in Retired
        And Click on filter of Building Does not contain and Verify the Result in Retired
        And Click on filter of Building Equals and Verify the Result in Retired
        And Click on filter of Building Does not equal and Verify the Result in Retired
        And Click on filter of Building Begins with and Verify the Result in Retired
        And Click on filter of Building Ends with and Verify the Result in Retired
        And Click on filter of Building Blank and Verify the Result in Retired
        # And Click on filter of Building Not blank and Verify the Result in Retired

        And Click on filter of Organizational Unit contain and Verify the Result in Retired
        And Click on filter of Organizational Unit Does not contain and Verify the Result in Retired
        And Click on filter of Organizational Unit Equals and Verify the Result in Retired
        And Click on filter of Organizational Unit Does not equal and Verify the Result in Retired
        And Click on filter of Organizational Unit Begins with and Verify the Result in Retired
        And Click on filter of Organizational Unit Ends with and Verify the Result in Retired
        And Click on filter of Organizational Unit Blank and Verify the Result in Retired
        And Click on filter of Organizational Unit Not blank and Verify the Result in Retired

        And Click on filter of User contain and Verify the Result in Retired
        And Click on filter of User Does not contain and Verify the Result in Retired
        And Click on filter of User Equals and Verify the Result in Retired
        And Click on filter of User Does not equal and Verify the Result in Retired
        And Click on filter of User Begins with and Verify the Result in Retired
        And Click on filter of User Ends with and Verify the Result in Retired
        And Click on filter of User Blank and Verify the Result in Retired
        And Click on filter of User Not blank and Verify the Result in Retired

        And Click on filter of Warranty contain and Verify the Result in Retired
        And Click on filter of Warranty Does not contain and Verify the Result in Retired
        And Click on filter of Warranty Equals and Verify the Result in Retired
        And Click on filter of Warranty Does not equal and Verify the Result in Retired
        And Click on filter of Warranty Begins with and Verify the Result in Retired
        And Click on filter of Warranty Ends with and Verify the Result in Retired
        And Click on filter of Warranty Blank and Verify the Result in Retired
        And Click on filter of Warranty Not blank and Verify the Result in Retired

        And Click on filter of Warranty End Date Equals and Verify the Result in Retired
        And Click on filter of Warranty End Date Does not equal and Verify the Result in Retired
        And Click on filter of Warranty End Date Before and Verify the Result in Retired
        And Click on filter of Warranty End Date After and Verify the Result in Retired
        And Click on filter of Warranty End Date Between and Verify the Result in Retired
        And Click on filter of Warranty End Date Blank and Verify the Result in Retired
        And Click on filter of Warranty End Date Not blank and Verify the Result in Retired
        Then Click on the add device
        And Enter Serial no and select device id
        Then Enter Asset Tag and Select student id
        And Select lonar status and Device status
        Then Click on the Submit Button
        And Verify the device added successfully
        Then Click on deviceIcon and click on view Button
        And Verify the General Device Information


