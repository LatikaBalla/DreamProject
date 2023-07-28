Feature: Dashboard Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application

    # Scenario: Admin can access the dashboard page
    #     Then I should be redirected to the dashboard page
    #     And Verify the Title of dashborad Page

    # Scenario: Visiblity of dashboard page
    #     Then My Account Detail tab should be visible
    #     And Building tab should be visible
    #     And Table for my account deatils should be visible

    # Scenario: Adding new account in My Account Details tab
    #     Then I should click on Add New button
    #     And Verify the tilte of Add New Contact page
    #     Then Enter title, full name and valid Email
    #     And Enter Phone and Cell Number
    #     Then Select User Role from Dropdown List
    #     And Click on save button
    #     Then Verify the account details added in table 

        Scenario: Update new account in My Account Details tab
        Then I should click on Add New button
        And Verify the tilte of Add New Contact page
        Then Enter title, full name and valid Email
        And Enter Phone and Cell Number
        Then Select User Role from Dropdown List
        And Click on save button
         Then Verify the account details added in table 
        And click on Edit Icon




