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

    # Scenario: Visiblity of SrcFacilitators page
    #     And Verify the Title of SrcFacilitators Page
    #     Then Filters of SrcFacilitators should be visible
    #     And Table for SrcFacilitators should be visible

           Scenario: View the Facilitators
           And Click on view button 
           Then Veriry the Details of Facilitator