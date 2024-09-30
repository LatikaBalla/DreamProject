Feature: PartCloset Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then close the terms of service window
        Then Click on Repair360 page
        And Click on PartCloset Tab

    Scenario: Add new custome part, search , delete and add new vt part
        And Click on filter of Part Name contain and Verify the Result
        And Click on filter of Part Name Does not contain and Verify the Result
        And Click on filter of Part Name Equals and Verify the Result
        And Click on filter of Part Name Does not equal and Verify the Result
        And Click on filter of Part Name Begins with and Verify the Result
        And Click on filter of Part Name Ends with and Verify the Result
        And Click on filter of Part Name Blank and Verify the Result
        And Click on filter of Part Name Not blank and Verify the Result

        And Click on filter of SKU contain and Verify the Result
        And Click on filter of SKU Does not contain and Verify the Result
        And Click on filter of SKU Equals and Verify the Result
        And Click on filter of SKU Does not equal and Verify the Result
        And Click on filter of SKU Begins with and Verify the Result
        And Click on filter of SKU Ends with and Verify the Result
        And Click on filter of SKU Blank and Verify the Result
        And Click on filter of SKU Not blank and Verify the Result

        And Click on filter of Parent Device contain and Verify the Result
        And Click on filter of Parent Device Does not contain and Verify the Result
        And Click on filter of Parent Device Equals and Verify the Result
        And Click on filter of Parent device Does not equal and Verify the Result
        And Click on filter of Parent device Begins with and Verify the Result
        And Click on filter of Parent device Ends with and Verify the Result
        And Click on filter of Parent device Blank and Verify the Result
        And Click on filter of Parent device Not blank and Verify the Result

        And Click on filter of Building contain and Verify the Result
        And Click on filter of Building Does not contain and Verify the Result
        And Click on filter of Building Equals and Verify the Result
        And Click on filter of Building Does not equal and Verify the Result
        And Click on filter of Building Begins with and Verify the Result
        And Click on filter of Building Ends with and Verify the Result
        And Click on filter of Building Blank and Verify the Result
        And Click on filter of Building Not blank and Verify the Result

        And Click on filter of Manufacturer contain and Verify the Result
        And Click on filter of Manufacturer Does not contain and Verify the Result
        And Click on filter of Manufacturer Equals and Verify the Result
        And Click on filter of Manufacturer Does not equal and Verify the Result
        And Click on filter of Manufacturer Begins with and Verify the Result
        And Click on filter of Manufacturer Ends with and Verify the Result
        And Click on filter of Manufacturer Blank and Verify the Result
        And Click on filter of Manufacturer Not blank and Verify the Result

        And Click on filter of Part Category contain and Verify the Result
        And Click on filter of Part Category Does not contain and Verify the Result
        And Click on filter of Part Category Equals and Verify the Result
        And Click on filter of Part Category Does not equal and Verify the Result
        And Click on filter of Part Category Begins with and Verify the Result
        And Click on filter of Part Category Ends with and Verify the Result
        And Click on filter of Part Category Blank and Verify the Result
        And Click on filter of Part Category Not blank and Verify the Result

        And Click on filter of Quantity Equals and Verify the Result
        And Click on filter of Quantity Does not equal and Verify the Result
        And Click on filter of Quantity Greater than and Verify the Result
        And Click on filter of Quantity Greater than or equal to and Verify the Result
        And Click on filter of Quantity Less than and Verify the Result
        And Click on filter of Quantity Less than or equal to and Verify the Result
        And Click on filter of Quantity Between and Verify the Result
        And Click on filter of Quantity Blank and Verify the Result
        And Click on filter of Quantity Not blank and Verify the Result

        Then I should click on Add New custome part
        Then Enter part name, manufacture and parent device
        And Enter part sku and quantity
        Then Click on submit button
        And Verify new custome part is added
        Then Click on the order more quantity
        And Enter the quantity value
        Then Verify the request of quantity
        # And I should click on Add New VT part
        # Then Select device and building
        # And Select part name and quantity
        # Then Click on submit button
        # And Verify new VT part is added
        And Click on delete button
        Then Verify the recode is deleted



