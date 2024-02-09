Feature: DeviceRepairReport Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then Close the terms of service window
        And Click on Report center page
        And Click on DeviceRepairReport page

    Scenario:Device Repair history -Search with Ticket no and Non warranty Repair
        Then Click on the export button
        # And Click More filter select- Record Id in search box and Verify the Result
        # Then Click on Clear filter
        # And Click More filter select- Ticket Number in search box and Verify the Result
        # Then Click on Clear filter
        # And Click More filter select- Repair type in search box and Verify the Result
        # Then Click on Clear filter
        # And Click More filter select- Serial Number in search box and Verify the Result
        # Then Click on Clear filter
        # And Click More filter select- Repair device in search box and Verify the Result
        # Then Click on Clear filter
        # And Click More filter select- Repair status in search box and Verify the Result
        # Then Click on Clear filter
        # And Click More filter select- Asset tag in search box and Verify the Result
        # Then Click on Clear filter
        # And Click More filter select- Repair Box in search box and Verify the Result
        # Then Click on Clear filter
        # And Click More filter select- Created By in search box and Verify the Result
        # Then Click on Clear filter
        And Enter the Search - Record Id in search box and Verify the Result
        Then Enter the Search - Repair type in search box and Verify the Result
        Then Enter the Search - Repair status in search box and Verify the Result
        And Enter the Search - Repair Box in search box and Verify the Result
        And Enter the Ticket Number in search box
        Then Verify the Ticket details in table
        And  Click on the Ticket Number
        Then Verify the Repair Ticket page will open
        And Verfiy the details of Ticket
        Then Click on the download Ticket Estimation button








