Feature: FleetValue Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then Close the terms of service window
        And Click on FleetValue page

    Scenario: FleetValue filters and sorting
        And Click on filter of Device Name contain and Verify the Result
        And Click on filter of Device Name Does not contain and Verify the Result
        And Click on filter of Device Name Equals and Verify the Result
        And Click on filter of Device Name Does not equal and Verify the Result
        And Click on filter of Device Name Begins with and Verify the Result
        And Click on filter of Device Name Ends with and Verify the Result
        And Click on filter of Device Name Blank and Verify the Result
        And Click on filter of Device Name Not blank and Verify the Result

        And Click on filter of Device Model contain and Verify the Result
        And Click on filter of Device Model Does not contain and Verify the Result
        And Click on filter of Device Model Equals and Verify the Result
        And Click on filter of Device Model Does not equal and Verify the Result
        And Click on filter of Device Model Begins with and Verify the Result
        And Click on filter of Device Model Ends with and Verify the Result
        And Click on filter of Device Model Blank and Verify the Result
        And Click on filter of Device Model Not blank and Verify the Result

        And Click on filter of Quantity in Fleet Equals and Verify the Result
        And Click on filter of Quantity in Fleet Does not equal and Verify the Result
        And Click on filter of Quantity in Fleet Greater than and Verify the Result
        And Click on filter of Quantity in Fleet Greater than or equal to and Verify the Result
        And Click on filter of Quantity in Fleet Less than and Verify the Result
        And Click on filter of Quantity in Fleet Less than or equal to and Verify the Result
        And Click on filter of Quantity in Fleet Between and Verify the Result
        And Click on filter of Quantity in Fleet Blank and Verify the Result
        And Click on filter of Quantity in Fleet Not blank and Verify the Result

        And Click on filter of SKU contain and Verify the Result
        And Click on filter of SKU Does not contain and Verify the Result
        And Click on filter of SKU Equals and Verify the Result
        And Click on filter of SKU Does not equal and Verify the Result
        And Click on filter of SKU Begins with and Verify the Result
        And Click on filter of SKU Ends with and Verify the Result
        And Click on filter of SKU Blank and Verify the Result
        And Click on filter of SKU Not blank and Verify the Result

        # And Click on filter of Buyback Price Equals and Verify the Result
        # And Click on filter of Buyback Price Does not equal and Verify the Result
        # And Click on filter of Buyback Price Greater than and Verify the Result
        # And Click on filter of Buyback Price Greater than or equal to and Verify the Result
        # And Click on filter of Buyback Price Less than and Verify the Result
        # And Click on filter of Buyback Price Less than or equal to and Verify the Result
        # And Click on filter of Buyback Price Between and Verify the Result
        # And Click on filter of Buyback Price Blank and Verify the Result
        # And Click on filter of Buyback Price Not blank and Verify the Result

        # And Click on filter of Total Value Equals and Verify the Result
        # And Click on filter of Total Value Does not equal and Verify the Result
        # And Click on filter of Total Value Greater than and Verify the Result
        # And Click on filter of Total Value Greater than or equal to and Verify the Result
        # And Click on filter of Total Value Less than and Verify the Result
        # And Click on filter of Total Value Less than or equal to and Verify the Result
        # And Click on filter of Total Value Between and Verify the Result
        # And Click on filter of Total Value Blank and Verify the Result
        # And Click on filter of Total Value Not blank and Verify the Result

        And Click on Sort Ascending and Descending for Device Name and Verify the Result
        And Click on Sort Ascending and Descending for Device Model and Verify the Result
        And Click on Sort Ascending and Descending for Quantity and Verify the Result
        And Click on Sort Ascending and Descending for SKU and Verify the Result
        And Click on Sort Ascending and Descending for Buyback Price and Verify the Result
        And Click on Sort Ascending and Descending for Total Value and Verify the Result
        Then Click on the Export button
        And Click on help icon for Filtering Guide
        Then Verify the Dream Data Filtering Guide


