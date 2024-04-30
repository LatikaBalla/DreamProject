Feature:SrcFacilitators Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then close the terms of service window
        Then Click on Repair360 page
        And Click on StudentRepairCenter tab
        Then Click on SrcFacilitators tab

    Scenario:Visiblity check, View the Facilitators
        And Verify the Title of SrcFacilitators Page
        Then Filters of SrcFacilitators should be visible
        And Table for SrcFacilitators should be visible
            And Click on Download Export button
        # And Click on view button
        # Then Veriry the Details of Facilitator
        And Click More filter select- Full name in search box and Verify the Result
        Then Click on Clear filter
        And Click More filter select- Title in search box and Verify the Result
        Then Click on Clear filter
        And Click More filter select- Eamil in search box and Verify the Result
        Then Click on Clear filter
        And Click More filter select- User status in search box and Verify the Result
        Then Click on Clear filter
        And Enter the Search - Full name in search box and Verify the Result
        Then Enter the Search - Email in search box and Verify the Result
        # And Enter the Search - Status in search box and Verify the Result
        # Then Enter the Search - Phone in search box and Verify the Result
      