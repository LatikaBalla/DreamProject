Feature: Account Details Page Functionality
    As a user
    I want to access the dashboard page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
     Then close the terms of service window

    Scenario: Adding,add more filter, Clear filter of Account Details page
        Then Account Details -Aaccount Name and no should be visible
        And Account Manager,Billing Address and Shipping Address should be visible
        And Click More filter select- Record Id in search box and Verify the Result
        Then Click on Clear filter
        And Click More filter select- Full name in search box and Verify the Result
        Then Click on Clear filter
        And Click More filter select- Title in search box and Verify the Result
        Then Click on Clear filter
        And Click More filter select- Eamil in search box and Verify the Result
        Then Click on Clear filter
        And Click More filter select- User Role in search box and Verify the Result
        Then Click on Clear filter
        And Click More filter select- Phone in search box and Verify the Result
        Then Click on Clear filter
        And Click More filter select- User Status in search box and Verify the Result
        Then Click on Clear filter
        And Enter the Search - Record Id in search box and Verify the Result
        And Enter the Search - Full name in search box and Verify the Result
        Then Enter the Search - Email in search box and Verify the Result
        And Enter the Search - Title in search box and Verify the Result
        Then Enter the Search - Phone in search box and Verify the Result
        And Click on Export To CSV
        # Then Click on Bulk Upload button
        # And Click on Attach CSV file and Click on submit button
        # Then Verify the Uploaded successfully














