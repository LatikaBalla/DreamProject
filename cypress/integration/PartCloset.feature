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
        # And Verify the Title of PartCloset Page
        Then I should click on Add New custome part
        Then Enter part name, manufacture and parent device
        And Enter part sku and quantity
        Then Click on submit button
        And Verify new custome part is added
        # And I should click on Add New VT part
        # Then Select device and building
        # And Select part name and quantity
        # Then Click on submit button
        # And Verify new VT part is added
And Click on filter of Part Name contain in search box and Verify the Result
And Click on filter of Part Name Does not contain in search box and Verify the Result
And Click on filter of Part Name Equals in search box and Verify the Result
And Click on filter of Part Name Does not equal in search box and Verify the Result
And Click on filter of Part Name Begins with in search box and Verify the Result
And Click on filter of Part Name Ends with in search box and Verify the Result
And Click on filter of Part Name Blank in search box and Verify the Result
And Click on filter of Part Name Not blank in search box and Verify the Result

And Click on filter of SKU contain in search box and Verify the Result
And Click on filter of SKU Does not contain in search box and Verify the Result
And Click on filter of SKU Equals in search box and Verify the Result
And Click on filter of SKU Does not equal in search box and Verify the Result
And Click on filter of SKU Begins with in search box and Verify the Result
And Click on filter of SKU Ends with in search box and Verify the Result
And Click on filter of SKU Blank in search box and Verify the Result
And Click on filter of SKU Not blank in search box and Verify the Result

And Click on filter of Parent Device contain in search box and Verify the Result
And Click on filter of Parent Device Does not contain in search box and Verify the Result
And Click on filter of Parent Device Equals in search box and Verify the Result
And Click on filter of Parent device Does not equal in search box and Verify the Result
And Click on filter of Parent device Begins with in search box and Verify the Result
And Click on filter of Parent device Ends with in search box and Verify the Result
And Click on filter of Parent device Blank in search box and Verify the Result
And Click on filter of Parent device Not blank in search box and Verify the Result

And Click on filter of Building contain in search box and Verify the Result
And Click on filter of Building Does not contain in search box and Verify the Result
And Click on filter of Building Equals in search box and Verify the Result
And Click on filter of Building Does not equal in search box and Verify the Result
And Click on filter of Building Begins with in search box and Verify the Result
And Click on filter of Building Ends with in search box and Verify the Result
And Click on filter of Building Blank in search box and Verify the Result
And Click on filter of Building Not blank in search box and Verify the Result

And Click on filter of Manufacturer contain in search box and Verify the Result
And Click on filter of Manufacturer Does not contain in search box and Verify the Result
And Click on filter of Manufacturer Equals in search box and Verify the Result
And Click on filter of Manufacturer Does not equal in search box and Verify the Result
And Click on filter of Manufacturer Begins with in search box and Verify the Result
And Click on filter of Manufacturer Ends with in search box and Verify the Result
And Click on filter of Manufacturer Blank in search box and Verify the Result
And Click on filter of Manufacturer Not blank in search box and Verify the Result

And Click on filter of Part Category contain in search box and Verify the Result
And Click on filter of Part Category Does not contain in search box and Verify the Result
And Click on filter of Part Category Equals in search box and Verify the Result
And Click on filter of Part Category Does not equal in search box and Verify the Result
And Click on filter of Part Category Begins with in search box and Verify the Result
And Click on filter of Part Category Ends with in search box and Verify the Result
And Click on filter of Part Category Blank in search box and Verify the Result
And Click on filter of Part Category Not blank in search box and Verify the Result

And Click on filter of Quantity Equals in search box and Verify the Result
And Click on filter of Quantity Does not equal in search box and Verify the Result
And Click on filter of Quantity Greater than in search box and Verify the Result
And Click on filter of Quantity Greater than or equal to in search box and Verify the Result
And Click on filter of Quantity Less than in search box and Verify the Result
And Click on filter of Quantity Less than or equal to in search box and Verify the Result
And Click on filter of Quantity Between in search box and Verify the Result
And Click on filter of Quantity Blank in search box and Verify the Result
And Click on filter of Quantity Not blank in search box and Verify the Result
# And Enter the Search value in search box
# Then Verify the Results in the table
# And Click on delete button
# Then Verify the recode is deleted



